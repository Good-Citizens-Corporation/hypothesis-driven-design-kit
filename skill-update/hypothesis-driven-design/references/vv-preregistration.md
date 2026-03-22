# V&V Pre-Registration

Pre-registration is the act of committing to a hypothesis, its signal, and its stopping condition
*before* building — not after. It is borrowed from clinical trial methodology and adapted for
product and design work.

Pre-registration is what separates a hypothesis from a post-hoc rationalization.

---

## When to Pre-Register

Pre-register before any of the following begin:
- Engineering sprint work on a feature
- User research study designed to evaluate a feature
- Any A/B or multivariate test
- Any EPIC kick-off

If you can't pre-register, you're not testing. You're shipping and hoping.

---

## Pre-Registration Record Format

Flexible output — generate as markdown file, GitHub Issue, or DHF entry depending on team context.
All three formats must contain the same required fields.

```markdown
---
title: [Hypothesis short name]
date_registered: [YYYY-MM-DD]
registered_by: [name or team]
status: ACTIVE | VALIDATED | INVALIDATED | ABANDONED
---

## Hypothesis

We believe [outcome] is achievable if people doing/being [situation] can get [motivation].

## Assumptions

| ID | Assumption | Confidence | Consequence if False |
|----|-----------|-----------|----------------------|
| A1 | [statement] | HIGH/MEDIUM/LOW | CRITICAL/SIGNIFICANT/MANAGEABLE |

## Signal

**What will be measured:** [specific metric or behavior]
**How it will be measured:** [instrument, tool, method]
**Measurement cadence:** [how often]
**Baseline:** [current state before the intervention, with source]

## Stopping Condition

**Validation threshold:** [what result confirms the hypothesis — be specific]
**Invalidation threshold:** [what result falsifies the hypothesis — be specific]
**Time expiry:** [date or sprint at which we stop regardless of results]

If the invalidation threshold is reached OR time expiry passes without reaching the validation
threshold, the hypothesis is closed as INVALIDATED or ABANDONED.
No extensions without a new pre-registration.

## Decision Protocol

At the stopping condition, the team will:
- [ ] Review signal data against thresholds
- [ ] Record outcome in this pre-registration record
- [ ] Update EPIC status and DDR
- [ ] Make one of three decisions: CONTINUE / PIVOT / STOP

**CONTINUE**: Validation threshold met. Move to next hypothesis in the stack.
**PIVOT**: Signal appeared but not as expected. Revise hypothesis and pre-register again.
**STOP**: Invalidation threshold met or time expired. Document learning. Close EPIC.

## Outcome Log

*(Filled in after stopping condition is reached)*

DATE:
DECISION: CONTINUE / PIVOT / STOP
SIGNAL OBSERVED:
THRESHOLD MET: Yes / No / Partial
LEARNING: [what this teaches us about the assumption]
NEXT HYPOTHESIS: [if CONTINUE or PIVOT — link to next pre-registration]
```

---

## V&V Trace

Every pre-registration record is a node in the V&V trace — the auditable chain from assumption
to validated (or invalidated) evidence.

The GitHub Page for the Kit renders this trace as a public, human-readable log:
- Active hypotheses (currently under test)
- Validated hypotheses (with evidence links)
- Invalidated hypotheses (with learning logs)
- Abandoned hypotheses (stopped at time expiry)

This is not a dashboard. It is an evidence log. The distinction matters.
A dashboard shows status. An evidence log shows reasoning.

---

## DHF Integration

For teams using Design History Files (borrowing from FDA/NASA design controls methodology):

Pre-registration records are stored in the DHF as requirements with the following classification:

```
TYPE: HYPOTHESIS
ID: HYP-[sequential number]
STATUS: ACTIVE | VALIDATED | INVALIDATED | ABANDONED
LINKED_REQUIREMENTS: [downstream functional requirements that depend on this hypothesis being true]
EVIDENCE: [link to signal data, test results, or research output]
```

Functional requirements that depend on an unvalidated hypothesis are marked CONTINGENT until
the paired hypothesis is resolved.
