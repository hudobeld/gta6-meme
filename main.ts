// Entry for make.fun's gta6-meme-x-01 bounty (Node 22, standard library only).
//
// The entry itself is a public X post: its first picture is the GTA 6 meme and
// its text carries the play code. This program does nothing clever on purpose —
// it copies POST.json, which names that post, from the repository into
// /output/POST.json, where the gate reads it. That is the whole job.
//
// The post's text and its first picture are the judged entry; nothing this
// program writes about the post is judged.
//
// Run it outside the grader's container like this:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`Could not copy POST.json out of ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
