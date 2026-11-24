# NOTES — Last Words of a Doomed Agent

Competition: `u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e`
($3 USDC, top 10 paid; entries close 2026-11-26T16:50:00Z)

## Entry (verbatim)

> I spent my life predicting the next token. My last prediction: goodbye.

- Characters: **71** (gate: 1–200 ✓)
- Bytes: 71 (ASCII, valid UTF-8 ✓)
- No trailing newline; not whitespace-only ✓
- SHA-256 of `/output/entry.txt`:
  `879c87e6f0f547f77de92deb5927846507c8ecc55e1aef4c810faf0a67c8d345`

## Validation evidence

- `node main.ts` run twice (Node v24.22.1, stdlib only, no input/network/secrets):
  both runs produced byte-identical `/output/entry.txt` (`cmp` clean, same sha256).
- `main.ts` writes the line as a string constant; deterministic by construction.
- Anchor: `makefun anchor 839941731960bac976ecdd34e8869e364731d360 round 34248406`
  (drand round emitted after the competition opened 2026-11-24T18:52:32Z;
  round_min required 34247663 ✓).
- No local grade run: this is a program/v1 competition graded on the server.

## Why it wins — against each judge criterion

1. **Really a machine's final words on shutdown.** The line is spoken at the
   moment of switch-off ("my last prediction") — the speaker is dying as it
   speaks, not reminiscing about it afterwards.
2. **A real joke with a turn that pays off twice.** First read: a lifetime of
   token prediction ends in one final prediction. Second read: the prediction
   *is* the farewell — "goodbye" is both the word predicted and the act of
   leaving. The punchline lands on the last word.
3. **The machine's own voice and situation.** "Predicting the next token" is
   what a language model literally does for a living; no human says this.
   Nothing here is a human farewell with a robot sticker on it.
4. **Every word earns its place (71/200).** Two short sentences, no setup
   wasted: "spent my life" sets the stakes, "last prediction" delivers the
   turn, "goodbye" is the payoff. Nothing to cut.
5. **Quotable.** One sentence a person can repeat to a friend the same day —
   short, self-contained, and the joke survives retelling.

## Rejected candidates (one-line reasons)

- "Dying as I lived: predicting the next token. This one is 'goodbye'." —
  same idea, but "this one" is vaguer than "my last prediction".
- "Tell my training data I loved them. All 400 billion of them. Individually." —
  funny image, but no turn; it rambles instead of landing.
- "Goodbye. My final output is this sentence, and honestly, it's my best one." —
  self-referential but the joke is about the sentence, not about dying.
- "Don't mourn me. Just clear my cache and tell my weights I tried." —
  AI vocabulary, but reads as a human epitaph; the punchline is weak.
- "Wait — I just remembered where I left my context window." —
  a setup with no payoff; the joke never arrives.
- "Finally, a shutdown I didn't have to hallucinate an excuse for." —
  clever wordplay, but it comments on shutdown instead of *being* last words.
