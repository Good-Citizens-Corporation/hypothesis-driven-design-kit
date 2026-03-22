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

| File | Purpose | Updated By |
|------|---------|------------|
| `intake_log.csv` | Source artifacts — PRDs, decks, briefs before analysis | 🤖 Workflow (from issue form) |
| `pre_registrations.csv` | Design inputs — locked hypotheses with predictions | 🤖 Workflow (from issue form) |
| `design_outputs.csv` | Design outputs — what was built to satisfy each input | ✍️ Manual / 🤖 Workflow |
| `trace_matrix.csv` | Traceability — links Input → Output → Evidence | ✍️ Manual / 🤖 Workflow |
| `decision_log.csv` | Design decisions and learnings | 🤖 Workflow (from issue form) |
| `observation_events.csv` | Structured observation data | 🤖 Workflow (from issue form) |

## Traceability (V&V)

```
INK-### (Artifact) → PRE-### (Hypothesis) → DO-### (Output) → OBS-### (Evidence)
                                                   ↓
                                            trace_matrix.csv
```

The full chain:
1. **INK-###** — Source artifact arrives (PRD, deck, brief)
2. **PRE-###** — Hypotheses extracted and pre-registered
3. **DO-###** — What was built to test each hypothesis
4. **OBS-###** — Evidence collected during testing

## How It Works

1. **Intake an artifact** → Creates `INK-XXX` entry, run HDD analysis
2. **Pre-register hypotheses** → Creates `PRE-XXX` entries from the analysis
3. **Do your work** → Create experiments and work items
4. **Collect evidence** → Log observations as you go
5. **Make decisions** → Record what you learned, especially surprises
6. **Close the loop** → Update the PRE-XXX status with outcome

## Rules

- **Append-only**: Never edit past entries (maintains audit trail)
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
