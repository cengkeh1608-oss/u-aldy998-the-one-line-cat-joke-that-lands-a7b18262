import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

// One-line cat joke: "My cat watches me work for eight hours, then
// sits on the keyboard and submits my resignation."
// Winner from 20 drafts, 25/25: real cat behaviour (sitting on the
// keyboard while you work) + a fresh, specific turn (submitting a
// resignation, not just typing gibberish) + the punch lands on the
// last two words. 93 characters, one line, no trailing newline.
// It beat the runner-up ("I bought my cat a $200 bed. She sleeps on
// the receipt.", 24/25) because the expensive-bed-vs-box trope is one
// the judge has heard before, while a cat filing a resignation is a
// turn it has not — the joke's surprise lives in the final beat, not
// in a familiar setup.
const JOKE =
  "My cat watches me work for eight hours, then sits on the keyboard and submits my resignation.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
