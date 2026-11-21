// LOOP-1: the charger that charges itself.
// Copies the pre-rendered catalogue photograph (entry.png, shipped in this
// repo) to $MAKEFUN_OUTPUT_DIR/entry.png. Node 22, stdlib only, no network.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
