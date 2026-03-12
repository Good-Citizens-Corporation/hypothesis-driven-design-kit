# Changelog

## 2026-03-12 — V&V Traceability Fix

**What happened:** The original evidence packet jumped directly from Design Inputs (PRE-###) to observations — with no record of what was actually built. This breaks traceability and defeats the purpose of a verifiable evidence trail.

**Why it matters:** If you can't trace from "what we said we'd build" to "what we built" to "proof it works," you don't have an evidence packet — you have a wish list and some notes.

**What we added:**

| New Artifact | Purpose |
|--------------|---------|
| `evidence-packet/design_outputs.csv` | Records what was built (DO-###) to satisfy each input |
| `evidence-packet/trace_matrix.csv` | Links Input → Output → Evidence |
| `evidence-packet/evidence.ts` | TypeScript loader with `validateTraceability()` |

**Updated docs:**
- `docs/GOVERNANCE.md` — Added Input → Output → Evidence flow diagram
- `evidence-packet/README.md` — Documents new files and traceability requirements

**If you're already using the kit:**

1. Copy the new CSV files to your `evidence-packet/` directory
2. For each existing PRE-###, create a corresponding DO-### entry documenting what you built
3. Add trace matrix entries linking your inputs to outputs to evidence

The TypeScript loader includes `validateTraceability()` to catch gaps programmatically.

---

*Found through actual use. If you're not surprised by your process, you're not improving it.*
