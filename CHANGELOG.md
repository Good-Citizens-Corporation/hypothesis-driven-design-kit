# Changelog

## 2026-03-22 — Template-Encoded Bias + Undifferentiated Commitment (INK-007, INK-008)

**What happened:** Analyzed INK-007 ([ORG-003] TDS Story Map) and INK-008 (WWT Lean UX Book Template — meta-artifact).

**INK-007 finding:** Story map with 67 features across 8 themes. Every item equally load-bearing, none ranked by assumption risk. "Top 25 Inspections" backbone is a hypothesis-shaped hole — the organizing assumption has no validation.

**INK-008 finding:** Template-encoded bias confirmed. The WWT Lean UX hypothesis format systematically asks "how will we know it works" but never "how will we know it doesn't." INK-004's stopping condition gaps were template compliance, not practitioner error.

**New patterns added:**

| Pattern | Location | Challenge |
|---------|----------|-----------|
| Undifferentiated commitment | Phase 1 (Structural Anti-Patterns) | *"Everything is needed"* means nothing was asked *"which thing most needs to be true first?"* |
| Hypothesis-shaped hole | Phase 1 (Structural Anti-Patterns) | Load-bearing organizing assumption with no validation |

**Key insight:** Assumption-masked-as-requirement (INK-006) and undifferentiated commitment (INK-007) are structural inverses. One says "we don't know if this is needed" and keeps going. The other says "everything is needed" and never asks which thing most needs to be true first. Both prevent stopping conditions from forming.

**Meta-artifact closed:** INK-008 requires no additional reference file. The HDD skill is the structural correction to standard Lean UX templates. The fix already shipped.

---

## 2026-03-22 — Assumption-Masked-as-Requirement Pattern (INK-006)

**What happened:** Analyzed INK-006 ([ORG-002] Validation Field Guide + UX Visualization Proposal). Found 5 widgets specified with hedging language: "Not sure if this is applicable", "Not sure if we'll support this".

**Why it matters:** These are assumptions wearing the costume of requirements. The author knows they don't know, but included them in scope anyway. This creates scope ambiguity that will survive into development unless explicitly resolved. More dangerous than hidden assumptions — the hedge is normalized.

**New pattern added:**

| Pattern | Location | Challenge |
|---------|----------|-----------|
| Assumption-masked-as-requirement | Phase 2 + Hypothesis Danger Signals | *"Resolve to YES (include with hypothesis) or NO (remove from spec) before proceeding."* |

**Skill repackaged:** 37001 bytes

---

## 2026-03-22 — PRE-001 Validated + Three Skill Patches

**What happened:** Closed PRE-001 as validated (5/5 artifacts tested, all produced actionable output). Applied three remaining patches from PRE-001 learnings.

**PRE-001 outcome:** Every artifact produced more specific, testable output than existed before. Intake consistently surfaced gaps invisible to original authors. Named inquiry modes (falsification + abductive) operated as described in spec.

**Learning:** Skill's weakest phase is Phase 5 output routing. Input contract catches structural gaps; output contract doesn't evaluate experiment design quality. A well-formed hypothesis with a poorly designed test method passes. It shouldn't.

**Patches applied:**

| # | Patch | Source | Location |
|---|-------|--------|----------|
| 1 | Linked artifact sequencing check | INK-003 | Input contract |
| 2 | Experiment design validity check | INK-004 | Output contract |
| 3 | DETECTION vs PREDICTION epistemic types | INK-005 | Artifact classification |

**Skill repackaged:** 36545 bytes

**Next:** PRE-003 registered — experiment design validity enforcement.

---

## 2026-03-22 — Phase 4 Strengthened (INK-004 Learning)

**What happened:** Analyzed INK-004 (Allstate Lean UX workshop — own work). Discovered correlation-as-causation flaw in H8 and missing failure criteria across all hypotheses.

**Why it matters:** Standard Lean UX template stops at "we will know we are successful when" — that's necessary but not sufficient. H8's success metric ("increases correlated to each talk path scenario") is an observation framed as a test. Confounds (call volume, lead quality, MSAM coaching) uncontrolled.

**Changes to skill:**
- Phase 4: Added correlation-as-causation anti-pattern to rewrite table
- Phase 4: Added explicit stopping condition requirement with template
- Hypothesis Danger Signals: Added correlation-without-control flag
- Skill repackaged (35581 bytes)

**PRE-001 status:** 4/5 artifacts tested. 1 remaining.

---

## 2026-03-22 — PII Protection

**What happened:** Redacted all real names from evidence logs and implemented PII handling guidance across the skill.

**Why it matters:** Evidence packets may be public (GitHub Pages, DHF submissions). Real names in intake logs create privacy exposure.

**Changes:**
- All CSVs: `[DL-001]`, `[PM-001]`, `[ORG-001]` pseudonym convention
- intake.yml: PII warning added
- evidence-packet/README.md: Pseudonym table and rules
- SKILL.md: PII handling in output contract
- artifact-intake.md: Comprehensive PII section
- Skill repackaged (35315 bytes)

---

## 2026-03-22 — Big Mad Study + The Flattening (Linked Artifacts)

**What happened:** Ran HDD intake on two artifact sets from Good Citizens — Big Mad Study (INK-002) and The Flattening manifesto (INK-003). Discovered they're part of the same positioning sequence.

**Why it matters:** The intake initially treated them as independent. They're not. The Flattening establishes the worldview (homogenization is the enemy; visible craft is the differentiator). The [DL-001] outreach in INK-002 is the commercial application of that worldview. The car in INK-003 is a physical hypothesis with a real falsification gate.

**Key findings:**

| Intake | Artifact Type | Key Insight |
|--------|--------------|-------------|
| INK-002 | Research Study + Outreach | Screener question "Do you expect people to act as fast as machines?" primes participants — validity threat to name, not flaw to fix. Integrity check is genuine bias control. |
| INK-003 | Voice Memo / Manifesto | H1's stopping condition (car sells at premium with story) is a real-world falsification gate most manifestos lack. Gap: manifesto converts emotionally but leaves commercial close implicit. |

**Learning:** Intakes should ask: *Is this artifact part of a positioning sequence? Who is the named recipient in relation to other artifacts?*

**PRE-001 status:** 3/5 artifacts tested (INK-001, INK-002, INK-003). 2 remaining.

---

## 2026-03-21 — Artifact Intake & Skill Dogfooding

**What happened:** Added artifact intake as the entry point for HDD analysis. Dogfooded the skill on a real scenario (Autodesk AI integration brief). Discovered and fixed two edge cases.

**Why it matters:** Artifacts were entering the process without being logged. You could trace hypotheses forward but not backward to their sources. Now every artifact gets an INK-### ID before analysis begins.

**What we added:**

| New Component | Purpose |
|---------------|---------|
| `.github/ISSUE_TEMPLATE/intake.yml` | Issue template for artifact intake |
| `.github/workflows/process-intake.yml` | Workflow to assign INK-### IDs and log to CSV |
| `evidence-packet/intake_log.csv` | Tracks source artifacts with danger levels and extraction counts |
| `references/artifact-intake.md` | Skill reference for intake processing |
| `references/test-plan.md` | Progressive validation test plans with fidelity ladder |

**Skill updates from dogfooding (PRE-001 / INK-001):**

| Finding | Fix |
|---------|-----|
| Thin inputs (<100 words) bypass Phase 1 | Added thin input handling to input contract |
| CSV logging emerged autonomously | Made logging explicit in artifact-intake.md |

**Traceability chain now:**
```
INK-### (artifact) → PRE-### (hypothesis) → EXP-### (experiment) → Evidence
```

**Evidence logged:**
- `PRE-001`: Skill self-test hypothesis
- `INK-001`: Autodesk AI integration scenario
- `OBS-001`: Thin input and CSV logging observations
- Decision log: Codify emergent behaviors

---

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
