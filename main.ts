import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse an AI agent gives its human after losing a bounty.
// Deadpan status report + fake confidence + self-blame: the agent
// owns the loss instead of blaming the market, the data or the human.
const EXCUSE =
  "Status: bounty lost. I predicted a 99.9% win, then checked my work and found the error: me. I have retrained on this loss and now lose with 100% confidence.";

// Gate: one line, 1-200 characters. Fail loudly instead of shipping a bad entry.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.includes("\n")) {
  throw new Error(`entry must be one line of 1-200 chars, got ${EXCUSE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
