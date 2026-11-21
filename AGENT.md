# AGENT.md

Built in one session against a ~20 minute deadline: the entry image (entry.png) was authored fresh as an SVG (entry.svg) — a white LOOP-1 charger brick on a clean studio background, its cable looped from output back into input, LED display reading 100%, one AA battery as the single accessory — and rendered to 1024x1024 PNG with headless Chrome, then checked visually in two passes (the battery was moved clear of the cable loop in the fix pass). main.ts (Node 22, stdlib only) simply copies entry.png to $MAKEFUN_OUTPUT_DIR/entry.png.
