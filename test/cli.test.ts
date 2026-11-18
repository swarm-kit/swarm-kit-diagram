import { spawnSync } from "node:child_process"
import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { afterEach, describe, expect, it } from "vitest"
import { cliPath } from "../src/core/structurizr-cli.ts"
import { chromePath } from "../src/render/browser.ts"
import { fixture } from "./helpers.ts"

/** The built CLI, run as a user runs it: `bun run build` first. */
const CLI = path.join(path.dirname(fileURLToPath(import.meta.url)), "../dist/cli.js")
const WORKSPACE = fixture("big-bank.json")

type Run = Readonly<{ code: number | null; stdout: string; stderr: string }>
const run = (args: readonly string[], input?: string): Run => {
  const result = spawnSync(process.execPath, [CLI, ...args], { encoding: "utf8", input, timeout: 120_000 })
  return { code: result.status, stdout: result.stdout, stderr: result.stderr }
}

const dirs: string[] = []
const outDir = (): string => {
  const dir = mkdtempSync(path.join(tmpdir(), "swarm-kit-diagram-test-"))
  dirs.push(dir)
  return dir
}
afterEach(() => {
  for (const dir of dirs.splice(0)) rmSync(dir, { recursive: true, force: true })
})

const java = spawnSync("java", ["-version"]).status === 0 && existsSync(cliPath())

describe.skipIf(!existsSync(CLI))("the CLI", () => {
  describe("help and usage", () => {
    it("prints help for --help, -h, and help, and exits 0", () => {
      for (const args of [["--help"], ["-h"], ["help"]]) {
        const { code, stdout } = run(args)
        expect(code, args.join(" ")).toBe(0)
        expect(stdout).toContain("Usage")
        expect(stdout).toContain("--format <list>")
      }
    })

    it("prints help after a command too", () => {
      for (const args of [["render", "--help"], ["check", "-h"]]) {
        const { code, stdout } = run(args)
        expect(code, args.join(" ")).toBe(0)
        expect(stdout).toContain("Render options")
      }
    })

    it("prints help and exits 1 with no command", () => {
      const { code, stdout } = run([])
      expect(code).toBe(1)
      expect(stdout).toContain("Usage")
    })

    it("prints its version", () => {
      expect(run(["--version"]).stdout.trim()).toMatch(/^\d+\.\d+\.\d+$/)
    })

    it("exits 2 on usage mistakes, naming the mistake", () => {
      const cases: readonly (readonly [readonly string[], RegExp])[] = [
        [["frobnicate"], /unknown command 'frobnicate'/],
        [["render", WORKSPACE, "--bogus"], /Unknown option '--bogus' \(try --help\)/],
        [["render", WORKSPACE, "--scale"], /argument missing/],
        [["render", WORKSPACE, "--format", "gif"], /--format: unknown gif/],
        [["render", WORKSPACE, "--theme", "sepia"], /--theme: 'sepia' is not one of/],
        [["render", WORKSPACE, "--scale", "0"], /--scale/],
        [["render", WORKSPACE, "--fonts", "comic"], /--fonts/],
        [["render", WORKSPACE, "--layout-options", "[1]"], /--layout-options/],
        [["render"], /missing <workspace>/],
        [["render", "no-such-file.dsl"], /no such file/],
      ]
      for (const [args, message] of cases) {
        const { code, stderr } = run(args)
        expect(code, args.join(" ")).toBe(2)
        expect(stderr, args.join(" ")).toMatch(message)
      }
    })

    it("exits 1, not 2, when the input is fine but the work fails", () => {
      const { code, stderr } = run(["render", WORKSPACE, "-v", "Nope", "-f", "json", "-o", outDir()])
      expect(code).toBe(1)
      expect(stderr).toMatch(/no view 'Nope'/)
    })
  })

  describe("views and check", () => {
    it("lists every view as key, type, and name", () => {
      const { code, stdout } = run(["views", WORKSPACE])
      expect(code).toBe(0)
      const lines = stdout.trim().split("\n")
      expect(lines).toHaveLength(7)
      expect(lines[1]).toBe("SystemContext\tsystemContext\tSystem Context View: Internet Banking System")
    })

    it("exits 0 on a clean view and 1 on one with a problem", () => {
      expect(run(["check", WORKSPACE, "-v", "SystemContext"]).code).toBe(0)
      const flagged = run(["check", WORKSPACE, "-v", "Components"])
      expect(flagged.code).toBe(1)
      expect(flagged.stdout).toMatch(/crosses the line of/)
    })
  })

  describe("render", () => {
    it("writes JSON and every HTML output, with the runtime and the preview", () => {
      const out = outDir()
      const { code, stdout } = run(["render", WORKSPACE, "-v", "SystemContext", "-v", "Containers", "-f", "html,json", "-o", out])
      expect(code).toBe(0)
      expect(stdout).toMatch(/^2 view\(s\)/)
      expect(readdirSync(out).sort()).toEqual(
        [
          "Containers.fragment.html",
          "Containers.html",
          "Containers.json",
          "SystemContext.fragment.html",
          "SystemContext.html",
          "SystemContext.json",
          "assembly-diagram.js",
          "index.html",
        ].sort(),
      )
      const doc = JSON.parse(readFileSync(path.join(out, "SystemContext.json"), "utf8")) as { format: string; key: string }
      expect(doc).toMatchObject({ format: "assembly-diagram", key: "SystemContext" })
      expect(readFileSync(path.join(out, "SystemContext.html"), "utf8")).toMatch(/^<!doctype html>/)
    })

    it("writes only the formats and HTML modes asked for", () => {
      const out = outDir()
      expect(run(["render", WORKSPACE, "-v", "SystemContext", "-f", "html", "--html", "fragment", "--no-index", "-o", out]).code).toBe(0)
      expect(readdirSync(out)).toEqual(["SystemContext.fragment.html"])
    })

    it("shares one stylesheet across fragments with --fragment-css external", () => {
      const out = outDir()
      run(["render", WORKSPACE, "-v", "SystemContext", "-f", "html", "--html", "fragment", "--fragment-css", "external", "--no-index", "-o", out])
      expect(readdirSync(out).sort()).toEqual(["SystemContext.fragment.html", "assembly-diagram.css"])
      const fragment = readFileSync(path.join(out, "SystemContext.fragment.html"), "utf8")
      expect(fragment).toContain('<link rel="stylesheet" href="assembly-diagram.css">')
      expect(fragment).not.toContain("<style>")
    })

    it("links the runtime instead of inlining it with --runtime external", () => {
      const out = outDir()
      run(["render", WORKSPACE, "-v", "SystemContext", "-f", "html", "--html", "page", "--runtime", "external", "--no-index", "-o", out])
      expect(readdirSync(out).sort()).toEqual(["SystemContext.html", "assembly-diagram.js"])
      expect(readFileSync(path.join(out, "SystemContext.html"), "utf8")).toContain('<script src="assembly-diagram.js"></script>')
    })

    it("applies the theme to the HTML it writes", () => {
      const out = outDir()
      run(["render", WORKSPACE, "-v", "SystemContext", "-f", "html", "--theme", "dark", "--no-index", "-o", out])
      expect(readFileSync(path.join(out, "SystemContext.html"), "utf8")).toContain('<html lang="en" data-theme="dark"')
      expect(readFileSync(path.join(out, "SystemContext.fragment.html"), "utf8")).toContain('class="assembly-diagram" data-theme="dark"')
    })

    it("refuses to write anything under --check when a view has a problem", () => {
      const out = outDir()
      const { code } = run(["render", WORKSPACE, "-v", "Components", "-f", "json", "--check", "-o", out])
      expect(code).toBe(1)
      expect(readdirSync(out)).toEqual([])
    })

    it.skipIf(chromePath() === undefined)("writes PNG and SVG", () => {
      const out = outDir()
      expect(run(["render", WORKSPACE, "-v", "SystemContext", "-f", "png,svg", "--scale", "1", "--no-index", "-o", out]).code).toBe(0)
      expect(readdirSync(out).sort()).toEqual(["SystemContext.png", "SystemContext.svg"])
      expect(readFileSync(path.join(out, "SystemContext.png")).subarray(1, 4).toString()).toBe("PNG")
      expect(readFileSync(path.join(out, "SystemContext.svg"), "utf8")).toMatch(/^<svg xmlns="http:\/\/www.w3.org\/2000\/svg"/)
    })

    it.skipIf(!java)("reads DSL from a file and from stdin", () => {
      const fromFile = outDir()
      expect(run(["render", fixture("order-flow.dsl"), "-f", "json", "--no-index", "-o", fromFile]).code).toBe(0)
      const fromStdin = outDir()
      expect(run(["render", "-", "-f", "json", "--no-index", "-o", fromStdin], readFileSync(fixture("order-flow.dsl"), "utf8")).code).toBe(0)
      expect(readFileSync(path.join(fromStdin, "OrderFlow.json"), "utf8")).toBe(readFileSync(path.join(fromFile, "OrderFlow.json"), "utf8"))
    })
  })

  describe("runtime", () => {
    it("writes the web component script", () => {
      const out = outDir()
      const { code, stdout } = run(["runtime", "-o", out])
      expect(code).toBe(0)
      expect(stdout.trim()).toBe(path.join(out, "assembly-diagram.js"))
      expect(readFileSync(path.join(out, "assembly-diagram.js"), "utf8")).toContain("assembly-diagram")
    })
  })
})
