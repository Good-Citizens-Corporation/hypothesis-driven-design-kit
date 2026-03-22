# V&V Evidence Trace

This page is not documentation. It is a **living evidence log** — the Design History File for the Hypothesis-Driven Design Kit itself.

The kit validates its own methodology by using it. Every claim made about HDD is tracked here as a hypothesis, tested, and recorded.

---

## Meta-Validation: The Kit as Its Own Test Subject

**PRE-001** was the hypothesis that this kit works:

> We believe the HDD skill produces actionable hypotheses from messy real-world artifacts if practitioners submit PRDs, decks, and briefs and can get clear next steps (INK → PRE → test plan).

**Validation status:** ✅ **VALIDATED** (5/5 artifacts tested, threshold met)

This is the strongest possible proof-of-concept: **the DHF methodology running on the methodology tool.**

If the kit can't validate itself using its own process, why would anyone else trust it?

---

## Current Evidence

### Intakes (INK-###)

Source artifacts that entered the HDD process.

| ID | Date | Artifact Type | Danger Level | Narratives (HIGH) | Assumptions (CRITICAL) | Hypotheses |
|----|------|--------------|--------------|-------------------|------------------------|------------|
| INK-001 | 2026-03-21 | Brief / Strategy Doc | HIGH | 4 | 2 | 3 |
| INK-002 | 2026-03-21 | Research Study + Outreach | MEDIUM | 2 | 2 | 3 |
| INK-003 | 2026-03-22 | Voice Memo / Manifesto | MEDIUM-HIGH | 3 | 1 | 3 |
| INK-004 | 2026-03-22 | Lean UX Workshop Deliverable | LOW | 0 | 1 | 11 |
| INK-005 | 2026-03-22 | Heuristic Evaluation (PURE) | LOW | 0 | 0 | 0 |
| INK-006 | 2026-03-22 | Validation Script + Requirements | MEDIUM | 2 | 5 | 3 |
| INK-007 | 2026-03-22 | Story Map / Backlog | HIGH | 0 | 67 | 0 |
| INK-008 | 2026-03-22 | Methodology Template (Meta) | N/A | 0 | 0 | 0 |

**Linked artifacts:** INK-002 ↔ INK-003. The Flattening manifesto (INK-003) is the worldview; [DL-001] outreach (INK-002) is its commercial application. The car in INK-003 is a physical hypothesis with a real falsification gate.

**Own-work artifacts:** INK-004 and INK-005 are work-for-hire authored by [DL-001]. INK-004 was best-structured artifact in PRE-001 set — HDD-compliant before the Kit existed. INK-005 surfaced the most important epistemological distinction: detection is not prediction.

**Pattern artifacts:** INK-006 exhibits **assumption-masked-as-requirement** (5 hedged widgets shipped as scope). INK-007 exhibits **undifferentiated commitment** (67 features at equal weight) with a **hypothesis-shaped hole** ("Top 25 Inspections" backbone is unvalidated). These patterns are structural inverses — one says "we don't know if this is needed" and keeps going; the other says "everything is needed" and never asks which thing most needs to be true first.

**Meta-artifact:** INK-008 is the WWT Lean UX Book template — source of the stopping condition gaps in INK-004. Template-encoded bias confirmed: the hypothesis format systematically asks "how will we know it works" but never "how will we know it doesn't." Every deliverable inherits this blindspot. The HDD skill is the structural correction. Closed without separate pre-registration — the fix already shipped.

### Pre-Registrations (PRE-###)

Hypotheses locked before testing.

| ID | Hypothesis | Metric | Threshold | Status |
|----|-----------|--------|-----------|--------|
| PRE-001 | HDD skill produces actionable hypotheses from messy artifacts | actionable_hypothesis_rate | ≥3/5 artifacts yield actionable output | ✅ Validated |
| PRE-002 | AI-Heavy vs Low-AI cohorts show distinguishable frustration patterns | inter_rater_theme_agreement | Cohen's κ ≥0.6 on cohort-specific themes | Registered |
| PRE-003 | Skill output contract can enforce experiment design validity | experiment_design_validity_rate | ≥80% include confound acknowledgment or controlled design | Registered |

### Observations (OBS-###)

Evidence collected during testing.

| ID | Date | Reference | Finding | Implication |
|----|------|-----------|---------|-------------|
| OBS-001 | 2026-03-21 | PRE-001 / INK-001 | Thin input bypassed Phase 1; CSV logging emerged autonomously | Two skill updates: thin input handling, explicit CSV logging |
| OBS-002 | 2026-03-22 | PRE-001 / INK-002+003 | Intake treated linked artifacts as independent; manifesto converts emotionally but leaves commercial close implicit | Artifact sequencing matters. Ask: is this part of a positioning sequence? |
| OBS-003 | 2026-03-22 | PRE-001 / INK-004 | H8 uses "correlated" in success metric without controlled design. Confounds (call volume, lead quality, coaching) uncontrolled. | Intake should flag correlation-as-test claims. Failure criteria gap > other gaps. |
| OBS-004 | 2026-03-22 | PRE-001 / INK-005 | Detection is not prediction. Expert evaluation finds things; it doesn't tell you whether what it found matters. | Add DETECTION vs PREDICTION artifact classification. |
| OBS-005 | 2026-03-22 | INK-006 | 5 widgets contain hedging language ("Not sure if applicable", "TBD") but remain in scope. Author signals uncertainty; spec ignores it. | Add assumption-masked-as-requirement pattern. Scan for hedging language that creates scope ambiguity. |
| OBS-006 | 2026-03-22 | INK-007 | Story map has 67 features at equal weight. Top row ("Top 25 Inspections") is unvalidated assumption organizing entire structure. | Add undifferentiated commitment and hypothesis-shaped hole patterns. Feature factories have no stopping conditions. |
| OBS-007 | 2026-03-22 | INK-008 | Template-encoded bias confirmed. WWT Lean UX hypothesis format omits failure criteria because the template never asked. INK-004 gaps were template compliance, not practitioner error. | HDD output contract is the structural correction. No additional reference needed — the fix already shipped. |

### Decisions

What we decided and why — especially when surprised.

| Date | Decision | Evidence | Surprised? | Learning |
|------|----------|----------|------------|----------|
| 2026-03-21 | Add thin input handling and explicit CSV logging | OBS-001 | Yes | Output contracts get interpreted literally — emergent behaviors that work should be codified explicitly |
| 2026-03-21 | Acknowledge dual-purpose tension in Big Mad Study | INK-002 | No | Artifacts serving dual purposes (research validity + positioning) create validity/narrative entanglement. Intake must distinguish design gaps from design decisions. |
| 2026-03-22 | Close INK-002 and INK-003 as linked artifacts | OBS-002 | Yes | Intakes should ask: who is the named recipient? Is this artifact part of a positioning sequence? H1 in INK-003 (car sells at premium) is a rare manifesto with a built-in falsification gate. |
| 2026-03-22 | Flag correlation-without-control as hypothesis flaw | OBS-003 | No | Standard Lean UX stops at "we will know we are successful when" — no "we will abandon when" clause. The Kit's stopping condition requirement is the correction. Correlation claims in test methods need controlled experiment design. |
| 2026-03-22 | Close PRE-001 as validated; open PRE-003 | OBS-001–004 | No | Skill's weakest phase is Phase 5 output routing. Input contract catches structural gaps; output contract doesn't evaluate experiment design quality. A well-formed hypothesis with a poorly designed test method passes. It shouldn't. |

---

## Why This Matters

A dashboard shows status. An evidence log shows reasoning.

This page exists because:
1. **Claims without evidence are narratives** — the exact thing HDD is designed to challenge
2. **Self-referential validation is non-negotiable** — if the methodology doesn't work on itself, it doesn't work
3. **Transparency builds trust** — you can verify every hypothesis, test, and outcome

The kit's evidence-packet is structured identically to what it teaches:
- `intake_log.csv` — source artifacts
- `pre_registrations.csv` — locked hypotheses
- `observation_events.csv` — evidence during testing
- `decision_log.csv` — choices with rationale

**This is the DHF pattern from TerraQuotes, NASA, and FDA design controls — applied to its own teaching tool.**

---

## PRE-001 Outcome

**VALIDATED** — 5/5 artifacts produced actionable output. Threshold met.

Every artifact produced more specific, testable artifacts than existed before. Intake consistently surfaced gaps invisible to the original authors. Named inquiry modes (falsification + abductive) operated as described in spec.

**Key learning:** The skill's weakest phase is Phase 5 output routing. The input contract catches structural gaps; the output contract doesn't yet evaluate experiment design quality. A well-formed hypothesis with a poorly designed test method passes the output contract. It shouldn't.

**PRE-001 produced five specific skill improvements:**

| # | Learning | Source | Status |
|---|----------|--------|--------|
| 1 | Thin input handling | INK-001 | ✅ Patched |
| 2 | Dual-purpose artifact flag + DECISION assumption status | INK-002 | ⬜ Queued |
| 3 | Linked artifact sequencing check | INK-003 | ⬜ Queued |
| 4 | Experiment design validity check (correlation/causation, confound ID) | INK-004 | ⬜ Queued |
| 5 | Detection vs prediction flag for evaluation-type artifacts | INK-005 | ⬜ Queued |

**Next hypothesis:** PRE-003 — experiment design validity enforcement.

---

## Updates

This page updates as evidence accumulates. Check the [CHANGELOG](/CHANGELOG.md) for detailed session logs.

*Last updated: 2026-03-22*
