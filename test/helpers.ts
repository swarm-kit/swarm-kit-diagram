import { readFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { buildDiagrams } from "../src/core/build.ts"
import { readWorkspace, type Workspace } from "../src/core/structurizr.ts"
import type { DiagramFigure } from "../src/core/types.ts"

export const fixture = (name: string): string => path.join(path.dirname(fileURLToPath(import.meta.url)), "fixtures", name)

/** The Big Bank workspace, from its exported JSON: no Java needed. */
export const bigBank = (): Workspace => readWorkspace({ file: fixture("big-bank.json") })

/** The workspace with one element renamed, for escaping tests. */
export const bigBankRenamed = (from: string, to: string): Workspace => {
  const json = readFileSync(fixture("big-bank.json"), "utf8").replaceAll(JSON.stringify(from), JSON.stringify(to))
  return readWorkspace({ json })
}

export const figure = async (workspace: Workspace, view: string): Promise<DiagramFigure> => {
  const [built] = await buildDiagrams(workspace, { views: [view] })
  if (built === undefined) throw new Error(`no view ${view}`)
  return built
}
