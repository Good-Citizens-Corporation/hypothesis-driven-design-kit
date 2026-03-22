# Team Performance Consulting Package

This module supports consulting engagements built around hypothesis-driven design. Use it when a team wants structured help auditing their current practice, improving their hypothesis discipline, or establishing a DHF workflow from scratch.

---

## When to Use This Module

This module is relevant when:
- A team has an existing backlog and wants to audit it for hypothesis coverage
- An organization is experiencing design theater and wants structural intervention (not training)
- A team wants to measure their hypothesis discipline over time
- An engagement involves coaching rather than just delivery

---

## Team Diagnostic

### Backlog Audit

Run this against an existing backlog to identify narrative substitution and missing hypotheses.

**For each ticket, ask:**

| Question | Pass | Fail |
|---|---|---|
| Does this ticket have a parent hypothesis? | Linked to EPIC with hypothesis | No EPIC, or EPIC has no hypothesis |
| Is the acceptance condition falsifiable? | Given/When/Then with a threshold | "Done when stakeholder approves" |
| Was a paper solution attempted? | Paper gate documented | No gate, or gate skipped |
| Is there a telemetry spec? | Spec in DHF | No spec, or spec post-hoc |
| Does this ticket have an expiry? | Date or session count defined | Open-ended |

**Score:**
- 5/5 — Hypothesis-compliant
- 3–4/5 — Hypothesis-adjacent (fixable)
- 0–2/5 — Narrative substitution (needs rewrite or removal)

**Aggregate:**
```
Hypothesis coverage = (compliant tickets / total tickets) × 100
```

A team below 40% hypothesis coverage is operating in design theater regardless of their process vocabulary.

---

### Artifact Inventory

Pull all design artifacts from the last two cycles. For each:
- Does it have a paired hypothesis?
- Was it used as evidence or as a hypothesis instrument?
- Did it ever cause a decision to be reversed?

**Red flag:** Any artifact that has never caused a decision to be reversed is functioning as narrative insulation.

---

### Process Interview Questions

Use these in stakeholder interviews to locate where narrative drift is happening:

1. "Walk me through the last feature that was *removed* from scope. What caused that?"
2. "When was the last time a usability test or data signal caused you to change direction?"
3. "How do you know when a feature is done — not shipped, but *validated*?"
4. "What's in your backlog right now that has been there for more than two cycles without a decision?"
5. "Show me a journey map or persona your team produced. What signal would prove it wrong?"

If the team struggles with questions 1, 2, and 5, the problem is structural — not skill.

---

## Engagement Model

### Structure

The engagement follows the same gate structure as the Kit:

**Week 1 — Diagnostic**
- Backlog audit (hypothesis coverage score)
- Artifact inventory
- Stakeholder interviews (2–3 people)
- Deliverable: Diagnostic report with narrative substitution map

**Week 2 — Structural Intervention**
- Convert highest-risk artifacts to hypotheses
- Rewrite top 10 tickets to be hypothesis-compliant
- Install the pre-registration workflow (GitHub Issues or DHF)
- Deliverable: Rewritten backlog segment + pre-registration template installed

**Week 3 — Iteration Run**
- Team runs one full iteration under the new structure
- Consultant observes planning and review
- Deliverable: Iteration review notes + hypothesis coverage delta

**Week 4 — Handoff**
- Team owns the workflow independently
- Consultant available for async review
- Deliverable: Final hypothesis coverage score vs. baseline

---

### Pricing Framework

**Flat-rate diagnostic:** Backlog audit + artifact inventory + diagnostic report  
→ Fixed scope, fixed price. No retainer.

**Full engagement (4 weeks):** Diagnostic + structural intervention + one iteration run + handoff  
→ Fixed scope. Deliverable-gated milestones, not time-gated.

**Ongoing advisory:** Monthly DHF review + hypothesis coverage tracking  
→ Retainer is acceptable here *only* because the deliverable is a measurement, not a narrative. The engagement has a stopping condition: the team reaches self-sufficiency (defined as ≥70% hypothesis coverage sustained for two consecutive cycles).

**Do not offer:** Open-ended consulting without a defined stopping condition. That is the failure mode this framework exists to prevent.

---

## Performance Metrics

Track these across engagements and over time within a team:

| Metric | Description | Target |
|---|---|---|
| Hypothesis Coverage | % of tickets with a compliant parent hypothesis | ≥ 70% |
| Paper Gate Compliance | % of tickets with a documented paper gate | ≥ 80% |
| Telemetry Spec Coverage | % of code tickets with a pre-filed telemetry spec | 100% |
| Hypothesis Settlement Rate | % of open hypotheses that reach a pass/fail verdict (not deferred) | ≥ 85% |
| Artifact Paired Rate | % of design artifacts with a paired hypothesis | ≥ 90% |
| Unregistered Bets | Decisions made without pre-registration (lower = better) | 0 target |

**Dashboard cadence:** Review metrics at iteration start. Not monthly. Not quarterly. Every iteration.

---

## What This Engagement Is Not

- It is not a training program. Training tells people to behave differently. This changes the structure so they have to.
- It is not a workshop. Workshops produce HMW stickies. This produces a measurable change in hypothesis coverage.
- It is not a retainer by default. Every engagement has a stopping condition defined before it starts.
