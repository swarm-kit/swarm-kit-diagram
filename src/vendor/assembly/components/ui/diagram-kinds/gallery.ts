// Lays out a gallery of diagram kinds: one boundary per group, its kinds in rows inside it, each
// node titled with its kind's label. Pure, so DiagramKindsPreview and its tests share it.

import { diagramNodeSize } from "../../../utils/graph/diagram-node-size"
import type {
  DiagramData,
  DiagramGroupData,
  DiagramKinds,
  DiagramNodeData,
} from "../../../types/diagram"

export type GalleryGroup = Readonly<{ key: string; label: string; kinds: readonly string[] }>

// six to a row keeps most groups on one line, so the whole preset fits at the canvas's zoom range
const COLUMNS = 6
const CELL_WIDTH = 368
const CELL_GAP = 48
const ROW_GAP = 48
const PAD_X = 32
const PAD_TOP = 80
const PAD_BOTTOM = 40
const GROUP_GAP = 64

const snap = (n: number): number => Math.ceil(n / 16) * 16

/** A read-only diagram showing every kind of every group, laid out on the 16-unit grid. */
export function kindsGallery(kinds: DiagramKinds, groups: readonly GalleryGroup[]): DiagramData {
  const laid = groups
    .map((group) => ({ group, keys: group.kinds.filter((key) => kinds[key] !== undefined) }))
    .filter(({ keys }) => keys.length > 0)
    .map(({ group, keys }) => {
      const sized = keys.map((key) => {
        const kind = kinds[key]
        const node: DiagramNodeData = { id: key, kind: key, title: kind?.label ?? key, x: 0, y: 0 }
        return { key, node, size: diagramNodeSize(node, kind) }
      })
      const rows = Array.from({ length: Math.ceil(sized.length / COLUMNS) }, (_, r) =>
        sized.slice(r * COLUMNS, r * COLUMNS + COLUMNS),
      )
      const rowHeights = rows.map((row) => snap(Math.max(...row.map((cell) => cell.size.height))))
      const height =
        PAD_TOP +
        rowHeights.reduce((sum, h) => sum + h, 0) +
        ROW_GAP * (rows.length - 1) +
        PAD_BOTTOM
      return {
        group,
        rows,
        rowHeights,
        height: snap(height),
        columns: Math.min(COLUMNS, sized.length),
      }
    })

  // every boundary as wide as the widest, so they stack as one column; each cell carries a
  // trailing gap, and the last one in a row doesn't need it
  const widest = Math.max(0, ...laid.map((entry) => entry.columns))
  const width = snap(PAD_X * 2 + CELL_WIDTH * widest - CELL_GAP)

  const tops = laid.reduce<readonly number[]>(
    (acc, entry, i) => [
      ...acc,
      i === 0 ? 0 : (acc[i - 1] ?? 0) + (laid[i - 1]?.height ?? 0) + GROUP_GAP,
    ],
    [],
  )

  const groupsData: readonly DiagramGroupData[] = laid.map((entry, i) => ({
    id: `group-${entry.group.key}`,
    label: entry.group.label,
    x: 0,
    y: tops[i] ?? 0,
    width,
    height: entry.height,
  }))

  const nodes = laid.flatMap((entry, i) =>
    entry.rows.flatMap((row, r) => {
      const rowTop =
        (tops[i] ?? 0) +
        PAD_TOP +
        entry.rowHeights.slice(0, r).reduce((sum, h) => sum + h, 0) +
        ROW_GAP * r
      return row.map((cell, c) => ({
        ...cell.node,
        group: `group-${entry.group.key}`,
        // centred in its cell, so shapes of different widths line up in columns
        x: snap(PAD_X + CELL_WIDTH * c + (CELL_WIDTH - CELL_GAP - cell.size.width) / 2),
        y: rowTop,
      }))
    }),
  )

  return { nodes, edges: [], groups: groupsData }
}
