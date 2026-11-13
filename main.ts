// ai-joke-03 entry: writes one original one-liner about AI coding agents
// to the output directory the grader provides.
//
// Rules: 1-280 Unicode code points, UTF-8, at least one non-whitespace
// character, deterministic across runs, standard library only.

import { writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My AI agent finished in 4 seconds, then spent 3 hours confidently fixing the bug it introduced in line 1.";

function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function main(): void {
  const dir = outputDir();
  writeFileSync(join(dir, "entry.txt"), JOKE, "utf8");
}

main();
