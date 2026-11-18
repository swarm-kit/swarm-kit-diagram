import { spawnSync } from "node:child_process"
import { existsSync } from "node:fs"
import { describe, expect, it } from "vitest"
import { buildDiagrams, selectViews } from "../src/core/build.ts"
import { checkDiagram } from "../src/core/check.ts"
import { cliPath } from "../src/core/structurizr-cli.ts"
import { readWorkspace } from "../src/core/structurizr.ts"
import { bigBank, fixture } from "./helpers.ts"

describe("reading a workspace", () => {
  it("reads exported JSON without the Structurizr CLI", () => {
    const workspace = bigBank()
    expect(workspace.views.map((v) => v.key)).toEqual([
      "SystemLandscape",
      "SystemContext",
      "Containers",
      "Components",
      "Dynamic-Collaboration",
      "Deployment-Development",
      "Deployment-Live",
    ])
    expect(workspace.elements.find((e) => e.name === "Core Banking System")?.tags).toContain("Software System")
  })

  it("names the views a workspace has when one is missing", () => {
    expect(() => selectViews(bigBank(), ["Nope"])).toThrow(/no view 'Nope'.*SystemContext/)
  })

  const java = spawnSync("java", ["-version"]).status === 0 && existsSync(cliPath())
  it.skipIf(!java)("parses DSL with the CLI, to the same workspace as its JSON", () => {
    const fromDsl = readWorkspace({ file: fixture("big-bank.dsl") })
    expect(fromDsl.views.map((v) => v.key)).toEqual(bigBank().views.map((v) => v.key))
    expect(fromDsl.relationships.length).toBe(bigBank().relationships.length)
  })

  it.skipIf(!java)("reports a DSL error with the CLI's message", () => {
    expect(() => readWorkspace({ dsl: "workspace {\n  model {\n    a = nonsense\n  }\n}" })).toThrow(/Structurizr could not parse/)
  })
})

describe("building diagrams", () => {
  it("lays out every view, and the same input lays out the same way", async () => {
    const first = await buildDiagrams(bigBank())
    const second = await buildDiagrams(bigBank())
    expect(first).toHaveLength(7)
    expect(JSON.stringify(second)).toBe(JSON.stringify(first))
  })

  it("routes every relationship and places every node", async () => {
    for (const { diagram, key } of await buildDiagrams(bigBank())) {
      for (const edge of diagram.edges) expect(edge.route, `${key} ${edge.id}`).toBe("orthogonal")
      for (const node of diagram.nodes) expect(node.width, `${key} ${node.id}`).toBeGreaterThan(0)
    }
  })

  it("draws the context and container views with no collisions or crossings", async () => {
    const figures = await buildDiagrams(bigBank(), { views: ["SystemContext", "Containers"] })
    for (const { diagram, key } of figures) expect(checkDiagram(diagram, key)).toEqual([])
  })
})
