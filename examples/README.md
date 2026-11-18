# Examples

Each folder holds a Structurizr workspace and every view of it rendered by this tool, in light and
dark.

| Example | Views | What it shows |
| --- | --- | --- |
| [Big Bank](big-bank) | 7 | Every view type: landscape, context, container, component, dynamic, deployment |
| [Order flow](order-flow) | 1 | Relationship styles, a two-way relationship, shapes picked from technology |

Render one yourself, in every format, and open the preview:

```sh
swarm-kit-diagram render examples/big-bank/workspace.dsl -o out/big-bank
open out/big-bank/index.html     # xdg-open on Linux
```

Re-render the images in this folder after a change that alters how diagrams look:

```sh
bun run examples
```
