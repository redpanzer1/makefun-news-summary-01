// news-summary-01 entry: writes the summary in summary.txt to the grader's
// output file. Node 22, standard library only; no network, no dependencies.
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(here, 'summary.txt'), 'utf8');
const length = [...text].length;
if (length < 1 || length > 2000 || text.trim().length === 0) {
  throw new Error(`summary.txt must hold 1 to 2000 characters, got ${length}`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
