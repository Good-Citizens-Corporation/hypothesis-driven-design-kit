# Progressive Validation Test Plan

A test plan in HDD is not a QA document. It is a **validation roadmap** — a sequence of
increasingly expensive experiments designed to raise confidence before committing resources.

The core principle: **Validate at the lowest fidelity that produces a meaningful signal.**
Never escalate to higher fidelity until the current level validates.

---

## The Fidelity Ladder

Each rung costs more but produces higher-confidence signal. Do not climb until the previous
rung produces a signal above your confidence threshold.

| Fidelity | Name | What it is | Cost | Signal quality |
|----------|------|-----------|------|----------------|
| 0 | **Existing behavior** | Observe current user actions without any change | Zero | Baseline — what's already true |
| 1 | **Conversation** | Ask users directly (interview, survey, support channel) | Hours | Stated preference — unreliable but directional |
| 2 | **Concierge** | Manually deliver the value a feature would provide | Days | Real behavior — expensive per user, high signal |
| 3 | **Wizard of Oz** | Fake the feature with manual backend work | Week | Real behavior at scale — users don't know it's manual |
| 4 | **Prototype** | Clickable mockup or thin vertical slice | Sprint | Interaction data — no real outcome yet |
| 5 | **MVP** | Real feature, minimal scope, instrumented | Sprints | Outcome data — first real validation |
| 6 | **Full build** | Production feature at scale | Months | Scale validation — only after MVP proves direction |

**The rule:** Never build at fidelity N+1 until fidelity N produces a signal above your
confidence threshold.

---

## Finding Existing Situations (Fidelity 0)

Before introducing *any* change, ask: **Where is this problem already surfacing?**

This is free signal. If users are already experiencing the problem, you can observe
behavior without intervention.

| Source | What to look for | Example query |
|--------|-----------------|---------------|
| Support tickets | Users asking for workarounds | Search: keywords related to the hypothesis |
| Analytics | Drop-offs, rage clicks, repeated actions | Funnel analysis at the friction point |
| Sales calls | Objections, feature requests | CRM notes mentioning the problem domain |
| Competitor reviews | Complaints about alternatives | App store / G2 / Capterra reviews |
| Current workarounds | Manual processes, spreadsheets, hacks | User interviews asking "how do you do this today?" |

**Output of fidelity 0:** Baseline metrics and evidence that the problem exists (or doesn't).

If you find no evidence at fidelity 0, the hypothesis may be a solution looking for a problem.
Challenge it before proceeding.

---

## Observation Windows

The question isn't "did it work?" — it's "do we have enough observations to trust the pattern?"

Novelty effects, weekly cycles, and buying behavior all distort short-term data.
Minimum observation windows prevent false positives.

| Hypothesis type | Minimum window | Why |
|-----------------|---------------|-----|
| Behavior change | 2 weeks | Novelty effect wears off in ~7 days |
| Adoption / activation | 1 month | Need to see repeat usage, not just trial |
| Retention / engagement | 2+ months | Churn patterns take time to emerge |
| Revenue / conversion impact | 1 quarter | Buying cycles are slow; seasonality matters |

**Stopping condition = confidence threshold OR time expiry**, whichever comes first.

If time expires without reaching the confidence threshold, the hypothesis is ABANDONED,
not failed. Absence of signal is not the same as negative signal.

---

## Confidence Thresholds

Define these *before* running the test. Post-hoc threshold setting is narrative management.

| Decision | Threshold definition |
|----------|---------------------|
| **Escalate** | Signal strength that justifies investing in the next fidelity level |
| **Pivot** | Signal appeared but in an unexpected direction — revise hypothesis |
| **Stop** | Signal indicates the hypothesis is false OR time expired without signal |

Thresholds should be:
- **Quantitative where possible:** "5+ support tickets in 30 days," "3 of 5 concierge users retain for 2 weeks"
- **Directional when quantitative isn't feasible:** "Majority of interviewees describe the workaround unprompted"

---

## Test Plan Generation Protocol

When generating a test plan from a hypothesis, follow this sequence:

### Step 1: Identify the Riskiest Assumption

From the hypothesis, extract the assumption that — if false — invalidates the entire direction.
This is what you test first.

Example:
- **Hypothesis:** *We believe increased session duration is achievable if users reviewing reports
  can get inline annotations.*
- **Riskiest assumption:** Users actually want to annotate reports (not export and annotate elsewhere).

### Step 2: Check for Existing Situations

Before designing an intervention, search for existing signal:

```
EXISTING SITUATION CHECKLIST:
- [ ] Support tickets matching: [keywords from hypothesis]
- [ ] Analytics showing: [friction at the relevant step]
- [ ] Workarounds observed: [manual processes users have built]
- [ ] Competitor complaints: [gaps in alternatives]
```

If existing signal is strong, you may skip fidelity 1–2 entirely. If no signal exists,
that is information — the problem may not be real.

### Step 3: Design the Fidelity Ladder

For each fidelity level, specify:
- **Intervention:** What change or action will be taken
- **Success signal:** What observation indicates validation
- **Failure signal:** What observation indicates the hypothesis is wrong
- **Observation window:** How long before evaluating

Only fill in fidelities 0–2 initially. Higher fidelities are planned only after lower ones validate.

### Step 4: Define the Decision Protocol

At each fidelity level, the team commits to a decision based on observed signal:

| Signal observed | Decision |
|-----------------|----------|
| Success signal above threshold | **Escalate** to next fidelity |
| Signal present but unexpected | **Pivot** — revise hypothesis, re-test at same fidelity |
| Failure signal OR time expired | **Stop** — log learning, close hypothesis |

---

## Test Plan Output Format

Generate as markdown. Can be converted to GitHub Issue or DHF entry depending on team context.

```markdown
---
title: Test Plan — [Hypothesis short name]
hypothesis_id: [HYP-XXX from pre-registration]
date_created: [YYYY-MM-DD]
created_by: [name or team]
status: PLANNING | ACTIVE | ESCALATING | PIVOTING | STOPPED
current_fidelity: [0–6]
---

## Hypothesis Under Test

We believe [outcome] is achievable if people doing/being [situation] can get [motivation].

## Riskiest Assumption

[Single statement — the thing that must be true for any of this to matter]

## Existing Situations Checked

| Source | Query / Method | Finding |
|--------|---------------|---------|
| Support tickets | [search terms] | [N tickets found / none found] |
| Analytics | [funnel or event] | [drop-off rate / no data] |
| Workarounds | [interview question] | [description / none observed] |
| Competitor reviews | [platform searched] | [complaints found / none relevant] |

**Baseline determination:** [Summary of what fidelity 0 revealed]

## Fidelity Ladder

| Fidelity | Intervention | Success signal | Failure signal | Window |
|----------|-------------|----------------|----------------|--------|
| 0 | Observe [existing behavior] | [baseline exists] | [no evidence of problem] | 1 week |
| 1 | [conversation / survey] | [N responses indicating X] | [no recognition of problem] | 3–5 days |
| 2 | [concierge delivery] | [N users adopt, M retain] | [<N adopt or 0 retain] | 2 weeks |
| 3+ | *Planned only after 0–2 validate* | — | — | — |

## Confidence Thresholds

- **Escalate:** [quantitative or directional threshold]
- **Pivot:** [what pattern triggers a hypothesis revision]
- **Stop:** [what pattern kills the hypothesis]

## Decision Log

| Date | Fidelity | Signal observed | Decision | Next action |
|------|----------|-----------------|----------|-------------|
| — | — | — | — | — |

## Outcome

*(Filled in when hypothesis is resolved)*

**Final status:** VALIDATED / INVALIDATED / ABANDONED / PIVOTED
**Learnings:** [What this test taught us]
**Next hypothesis:** [Link to follow-on, if any]
```

---

## Anti-Patterns — Reject These

| Pattern | Why it's wrong | Correction |
|---------|---------------|------------|
| Starting at fidelity 4+ | Skipping cheap validation wastes resources | Back up to fidelity 0 — does the problem exist? |
| No observation window | Results measured too early are noise | Define minimum window before starting |
| Post-hoc threshold | Threshold set after seeing data is narrative | Commit to thresholds in the test plan before running |
| "We'll know it when we see it" | Unfalsifiable — any result can be spun | Quantify success and failure signals |
| Activity metrics as signals | "Page views" or "signups" ≠ validation | Outcome metrics: retention, task completion, revenue |
| No failure signal defined | If you can't be wrong, you're not testing | Every test plan must define what kills the hypothesis |

---

## Integration with Other Artifacts

Test plans connect to other HDD outputs:

| Artifact | Relationship |
|----------|-------------|
| Pre-registration (`vv-preregistration.md`) | Test plan operationalizes the pre-registered hypothesis |
| EPIC (`agile-output.md`) | Test plan gates EPIC progression — no escalation without validation |
| GitHub Issues (`github-output.md`) | Each fidelity level can generate a spike or research issue |
| Evidence Packet (`evidence/`) | Decision log entries feed the evidence trace |

A test plan without a pre-registration is ad-hoc experimentation.
A pre-registration without a test plan is a hypothesis without a validation path.
Both are required for rigorous HDD practice.
