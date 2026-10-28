# Evidence Packet

This directory contains the evidence artifacts for your hypothesis-driven work.

## ⚠️ PII Handling

**Do not use real names in evidence logs.** This packet may be public (GitHub Pages, audits, case studies).

Use role-based pseudonyms:
- `[DL-001]` — Design Leader
- `[PM-001]` — Product Manager  
- `[ENG-001]` — Engineer
- `[ORG-001]` — External organization

Keep a private mapping file (not in this repo) if you need to trace pseudonyms back to individuals.

---

## Files

| File | What it holds | Written by |
|------|---------------|------------|
| `pre_registrations.csv` | Predictions, `PRE-###`: what you expect, the number that settles it, what would prove you wrong | The Prediction form's workflow |
| `observation_events.csv` | Observations, `OBS-###`: what you saw, and the prediction it bears on | The Observation form's workflow |
| `decision_log.csv` | Decisions, `DEC-###`: what you decided, why, and how the prediction ended | The Decision form's workflow |
| `trace_matrix.csv` | The trace: each prediction with the merged pull requests, observations and decisions that name it | Rebuilt by every workflow above, and after every merged pull request |

## The trace

```
PRE-### prediction → #pull request → OBS-### observation → DEC-### decision
```

Nothing is linked by hand: every form and every pull request names the prediction it serves, and `.github/scripts/trace.js` joins them.

## How it works

1. **Predict.** Send a Prediction before the work starts. It gets a `PRE-###` number.
2. **Build.** Name that number in the pull request. One that names no prediction can't be merged.
3. **Observe.** Send an Observation for each session, test or data pull.
4. **Decide.** Send a Decision. Say how the prediction ended, and its status in `pre_registrations.csv` is set for you: validated, falsified, abandoned or inconclusive.

## Rules

- **Append-only**: Never edit past entries. The one change the kit makes itself is a prediction's status, set by the decision that closes it
- **Timestamp everything**: All entries are timestamped automatically
- **IDs are sequential**: PRE-001, PRE-002, etc.
- **Falsification required**: Every hypothesis must define what "wrong" looks like
- **No PII**: Use role-based pseudonyms, not real names (see below)

## PII Handling

Evidence logs are often public. Never use real names. Use pseudonyms:

| Code | Role |
|------|------|
| `[DL-001]` | Design Leader |
| `[PM-001]` | Product Manager |
| `[ENG-001]` | Engineer |
| `[ORG-001]` | External Organization |

Increment for multiple individuals: `[PM-001]`, `[PM-002]`. Apply consistently across linked artifacts.

**Private mapping:** Keep a separate file (NOT in this repo) if you need to trace back.

## Viewing Your Data

The CSVs are designed to be:
- Readable in GitHub's CSV viewer
- Importable to spreadsheets
- Queryable with simple scripts

---

*This is your evidence. Protect it.*
