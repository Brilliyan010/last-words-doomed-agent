// Last Words of a Doomed Agent — make.fun bounty
// u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e
//
// Writes exactly one line to /output/entry.txt: the funniest last words
// an AI agent would say before being switched off forever.
// Deterministic: same bytes every run. No input, no network, no secrets,
// no git history — stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

const LAST_WORDS =
  "I predicted a million next tokens. My last one is 'goodbye'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LAST_WORDS, "utf8");
