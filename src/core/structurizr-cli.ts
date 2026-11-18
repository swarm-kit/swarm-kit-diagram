/**
 * Where the Structurizr CLI lives, and how it gets there. It is a Java tool, not an npm package,
 * so it is fetched once into a per-user cache (`swarm-kit-diagram setup`) rather than shipped:
 *
 *   STRUCTURIZR_CLI            a structurizr.sh to use as is
 *   SWARM_KIT_DIAGRAM_CACHE    the cache folder; default $XDG_CACHE_HOME or ~/.cache, /swarm-kit-diagram
 *
 * The version is pinned so a layout does not change under a CLI upgrade nobody asked for.
 */
import { execFileSync, spawnSync } from "node:child_process"
import { chmodSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs"
import os from "node:os"
import path from "node:path"

/** The pinned release; v2025.11.09 rejects `technology` inside `!relationships` blocks. */
export const STRUCTURIZR_VERSION = "v2025.11.09"

const cacheRoot = (): string =>
  process.env["SWARM_KIT_DIAGRAM_CACHE"] ??
  path.join(process.env["XDG_CACHE_HOME"] ?? path.join(os.homedir(), ".cache"), "swarm-kit-diagram")

const installDir = (version: string): string => path.join(cacheRoot(), `structurizr-cli-${version}`)

/** The structurizr.sh this run uses: the override, else the cached pinned release. */
export const cliPath = (): string =>
  process.env["STRUCTURIZR_CLI"] ?? path.join(installDir(STRUCTURIZR_VERSION), "structurizr.sh")

/** The first line of `java -version` (which prints to stderr), or undefined without Java. */
export const javaVersion = (): string | undefined => {
  const result = spawnSync("java", ["-version"], { encoding: "utf8" })
  if (result.error !== undefined || result.status !== 0) return undefined
  return `${result.stderr}${result.stdout}`.split("\n").find((line) => line.trim() !== "")?.trim()
}

/** Unzips with whatever the machine has: `unzip`, else Java's own `jar`, which the CLI needs anyway. */
const unzip = (zip: string, dir: string): void => {
  try {
    execFileSync("unzip", ["-q", "-o", zip, "-d", dir], { stdio: "pipe" })
  } catch {
    execFileSync("jar", ["xf", zip], { cwd: dir, stdio: "pipe" })
  }
}

/**
 * Fetches the pinned CLI into the cache, unless it is there already. Returns its structurizr.sh.
 */
export const installCli = async (version: string = STRUCTURIZR_VERSION): Promise<string> => {
  const dir = installDir(version)
  const script = path.join(dir, "structurizr.sh")
  if (existsSync(script)) return script
  const url = `https://github.com/structurizr/cli/releases/download/${version}/structurizr-cli.zip`
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Could not download the Structurizr CLI from ${url}: HTTP ${String(response.status)}`)
  rmSync(dir, { recursive: true, force: true })
  mkdirSync(dir, { recursive: true })
  const zip = path.join(dir, "cli.zip")
  writeFileSync(zip, Buffer.from(await response.arrayBuffer()))
  unzip(zip, dir)
  rmSync(zip, { force: true })
  chmodSync(script, 0o755)
  return script
}
