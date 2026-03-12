# Evidence Packet

This directory contains the evidence artifacts for your hypothesis-driven work.

## Files

| File | Purpose | Updated By |
|------|---------|------------|
| `pre_registrations.csv` | Design inputs — locked hypotheses with predictions | 🤖 Workflow (from issue form) |
| `design_outputs.csv` | Design outputs — what was built to satisfy each input | ✍️ Manual / 🤖 Workflow |
| `trace_matrix.csv` | Traceability — links Input → Output → Evidence | ✍️ Manual / 🤖 Workflow |
| `decision_log.csv` | Design decisions and learnings | 🤖 Workflow (from issue form) |
| `observation_events.csv` | Structured observation data | 🤖 Workflow (from issue form) |

## Traceability (V&V)

```
PRE-### (Input) → DO-### (Output) → OBS-### (Evidence)
                         ↓
                  trace_matrix.csv
```

Every design input (PRE-###) should trace to:
1. A design output (DO-###) — what was built
2. Evidence (OBS-###, decisions) — proof it works

## How It Works

1. **Pre-register a hypothesis** → Creates `PRE-XXX` entry
2. **Do your work** → Create experiments and work items
3. **Collect evidence** → Log observations as you go
4. **Make decisions** → Record what you learned, especially surprises
5. **Close the loop** → Update the PRE-XXX status with outcome

## Rules

- **Append-only**: Never edit past entries (maintains audit trail)
- **Timestamp everything**: All entries are timestamped automatically
- **IDs are sequential**: PRE-001, PRE-002, etc.
- **Falsification required**: Every hypothesis must define what "wrong" looks like

## Viewing Your Data

The CSVs are designed to be:
- Readable in GitHub's CSV viewer
- Importable to spreadsheets
- Queryable with simple scripts

---

*This is your evidence. Protect it.*
