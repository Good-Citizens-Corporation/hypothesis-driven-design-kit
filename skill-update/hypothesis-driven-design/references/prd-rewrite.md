# PRD → HDD Intake Rewrite

When a PRD is submitted, run Phase 1–4 from SKILL.md first. Then apply this rewrite guide.

---

## The Problem with Standard PRDs

The standard 2026 PRD format has the structure for rigor but rarely exercises it.
Every section below is a narrative risk by default. The HDD rewrite surfaces what each section
*actually* contains, then rebuilds it as a testable contract.

---

## Section-by-Section Rewrite Map

### Problem Statement → Hypothesis Provenance Block

**What the standard PRD does:** States the problem as a finding.
**What HDD requires:** The problem must be sourced or declared as an assumption.

Rewrite to:
```
PROBLEM CLAIM: [original statement]
PROVENANCE: [source] OR [UNVALIDATED ASSUMPTION — rank: CRITICAL / SIGNIFICANT / MANAGEABLE]
PAIRED HYPOTHESIS: We believe [outcome] is achievable if people doing/being [situation] can get [motivation].
```

If no provenance exists and the problem is load-bearing, it becomes the first hypothesis to validate —
not the foundation to build on.

---

### Success Metrics → Signal + Instrument + Stopping Condition

**What the standard PRD does:** Lists SMART goals with target numbers and dates.
**What HDD requires:** Every metric must have a baseline, an instrument, and a stopping condition.

Rewrite to:
```
METRIC: [what will be measured]
BASELINE: [current state, with source]
INSTRUMENT: [how it will be measured — tool, method, cadence]
TARGET: [threshold that indicates the hypothesis is supported]
STOPPING CONDITION: [threshold or date at which we abandon or pivot, whichever comes first]
```

A metric without a stopping condition is a goal, not a test. Goals do not falsify hypotheses.

---

### Personas → Research Provenance or Assumption Declaration

**What the standard PRD does:** Presents 2–3 personas as research outputs.
**What HDD requires:** Every persona must be sourced or declared as an assumption with a validation plan.

Rewrite to:
```
PERSONA: [name/label]
BASIS: [interview count] / [survey n] / [analytics segment] / [ASSUMPTION]
CRITICAL ASSUMPTIONS EMBEDDED: [list what must be true about this persona for the strategy to hold]
VALIDATION PLAN: [how and when these assumptions will be tested]
```

A persona labeled ASSUMPTION is not a failure. It is honest. An unflagged assumption is a liability.

---

### User Stories → HDD Hypothesis Pairs

**What the standard PRD does:** "As a [persona], I want [feature] so that [benefit]."
**What HDD requires:** Every user story must be paired with a hypothesis that can falsify the claimed benefit.

Rewrite to:
```
ORIGINAL: As a [persona], I want [feature] so that [benefit].
ASSUMPTION EMBEDDED: [the benefit is achievable via this feature for this persona]
PAIRED HYPOTHESIS: We believe [benefit restated as outcome] is achievable if people doing/being
  [actual behavioral situation] can get [motivation behind the want].
SIGNAL: [what changes if the hypothesis is true]
STOPPING CONDITION: [when do we stop building this if the signal doesn't appear]
```

---

### Assumptions Section → Promoted to Top, Ranked, Converted

**What the standard PRD does:** Buries assumptions at the bottom as a footnote.
**What HDD requires:** Assumptions are the primary unit of work. They lead the document.

Move the assumptions section to position #2 (immediately after the problem statement).
Apply Phase 2–3 from SKILL.md. Every assumption gets a confidence rank and a hypothesis conversion.

---

### Timeline → Validation Milestone Map

**What the standard PRD does:** Ship dates and release stages.
**What HDD requires:** Validation milestones — what will be learned by when, not what will be shipped by when.

Rewrite to:
```
MILESTONE: [date or sprint]
HYPOTHESIS UNDER TEST: [which hypothesis this milestone is designed to validate]
SIGNAL EXPECTED: [what observable change indicates progress]
DECISION GATE: [what the team will decide at this milestone — continue / pivot / stop]
```

Ship milestones remain. But they are subordinate to validation milestones.
You do not ship until the validation gate is passed.

---

### Out of Scope → Constraint Hypothesis Log

**What the standard PRD does:** Lists exclusions.
**What HDD requires:** Each exclusion should carry a rationale that can be revisited if a hypothesis fails.

Rewrite to:
```
EXCLUDED: [feature or scope item]
RATIONALE: [why excluded]
REVISIT CONDITION: [what would need to be true for this exclusion to be reconsidered]
```

This transforms exclusions from arbitrary scope gates into falsifiable constraints.

---

## HDD PRD Intake Checklist

Before accepting a PRD as an HDD contract, verify all of the following:

- [ ] Problem statement has provenance OR is declared as a ranked assumption
- [ ] At least one canonical hypothesis statement exists
- [ ] Every hypothesis has a stated stopping condition
- [ ] Every success metric has a baseline and an instrument
- [ ] Personas are sourced or declared as assumptions with validation plans
- [ ] User stories are paired with hypotheses
- [ ] Assumptions section exists and is ranked by consequence
- [ ] Timeline includes at least one validation milestone
- [ ] Out of scope items have revisit conditions

A PRD that fails this checklist is returned with a gap report. It is not accepted as an HDD contract
until the gaps are resolved.

---

## Scope-Stopping Prevention Patterns

Two structural anti-patterns prevent stopping conditions from forming. They are inverses that 
produce the same outcome: scope that cannot be cut.

### Pattern 1: Assumption-Masked-as-Requirement

**Signal:** Author hedges with uncertainty language ("TBD", "may or may not support", "if we decide 
to...") but includes the item in scope anyway.

**Why it prevents stopping:** The hedge normalizes ambiguity. No one can cut the item because "we 
haven't decided yet." But the item is in the spec, so it persists into development. The scope 
expands or contracts unpredictably at implementation time instead of design time.

**Canonical habitat:** Feature lists with placeholder widgets, "nice to have" sections that ship 
anyway, conditional requirements that are never resolved.

**Example:** 
> "May or may not support social media sharing (TBD)"

This is not a requirement. It is an unresolved design decision masquerading as scope.

### Pattern 2: Undifferentiated Commitment

**Signal:** Every item appears equally load-bearing. No story can be cut because none are ranked.

**Why it prevents stopping:** *"Everything is needed"* means nothing was asked *"which thing most 
needs to be true first?"* Without ranking, there is no mechanism to cut. Without a mechanism to cut, 
there is no stopping condition.

**Canonical habitat:** Story maps, feature backlogs, epic breakdowns where every item has an ID but 
no item has a hypothesis.

**Example:**
> A story map with 67 features distributed across 8 themes. Each column is complete. No column 
> answers "what happens if we don't build this?"

This is a feature factory, not a validation plan.

### The Hypothesis-Shaped Hole

When undifferentiated commitment appears, look for the **hypothesis-shaped hole** — the load-bearing 
assumption at the center of the structure that has no validation. Story maps are especially 
vulnerable because the top row (the "backbone") is usually an unvalidated strategy claim.

**Example:**
> A story map organized around "Top 25 Inspections" where neither "Top" (selection criteria) nor 
> "25" (threshold) have been validated. The entire structure assumes the backbone is correct.

**Flagging language:**
*"This artifact has a hypothesis-shaped hole at its center. The organizing assumption '[X]' has 
no stated validation. If this assumption is false, the entire structure is arbitrary."*

### Detection and Response

When either pattern is found, escalate to assumption extraction. Do not attempt to fix the artifact 
in place — the structure itself prevents HDD compliance.

Report:
1. Pattern detected (assumption-masked-as-requirement OR undifferentiated commitment)
2. Count of affected items
3. Whether a hypothesis-shaped hole exists
4. Recommendation: return artifact with gap report, or extract hypotheses from the unranked scope
