# GitHub Output — Issues, EPICs, PRs

Generate GitHub artifacts from validated hypotheses. Always run Phase 1–4 from SKILL.md first.
Every artifact generated here must satisfy the output contract: hypothesis, stopping condition, signal.

---

## EPIC Format

EPICs represent a hypothesis cluster — a set of related bets that, when validated together,
support a product direction.

```markdown
## EPIC: [Short name]

**Hypothesis:**
We believe [outcome] is achievable if people doing/being [situation] can get [motivation].

**Signal:**
[What we will measure and how]

**Stopping Condition:**
[What result — or absence of result by what date — causes us to abandon or pivot this EPIC]

**Value Delivered:**
[What the user can do at the end of this EPIC that they couldn't do before]

**Validated By:**
[Which issues/slices, when closed, constitute evidence for or against this hypothesis]

---

### Design Decision Record (DDR)

**Decision:** [What scope was chosen for this EPIC]
**Alternatives Considered:** [What else was on the table]
**Trade-offs:** [What was deprioritized and why]
**Value Hypothesis:** [What validated this iteration's scope]
**INVEST Compliance:**
- Independent: [Yes / No — explain if No]
- Negotiable: [Yes / No — explain if No]
- Valuable: [Yes / No — explain if No]
- Estimable: [Yes / No — explain if No]
- Small: [Yes / No — explain if No]
- Testable: [Yes / No — explain if No]
```

---

## Vertical Slice Format (Issue / Story)

Slices are vertical — they cut through all layers of the stack to deliver something a user can
interact with. They are not horizontal tasks (backend only, frontend only, design only).

Each slice is independently valuable, independently testable, and small enough to ship in a sprint.

```markdown
## [Slice title — written as user-observable outcome, not task]

**Parent EPIC:** [EPIC name and link]

**Paired Hypothesis Fragment:**
This slice tests the assumption that [specific assumption from the parent hypothesis].

**Acceptance Criteria:**
- [ ] [Observable behavior — written from the user's perspective]
- [ ] [Observable behavior]
- [ ] [Signal instrumented — telemetry, log, or measurement confirming the behavior is trackable]

**INVEST Check:**
- Independent: [Yes / No]
- Negotiable: [Yes / No]
- Valuable: [Yes / No]
- Estimable: [Yes / No]
- Small: [Yes / No]
- Testable: [Yes / No]

**Definition of Done:**
Acceptance criteria met AND signal instrumented AND DDR updated with outcome.
```

---

## INVEST Failure Modes — Flag and Fix

| Failure | What it looks like | Fix |
|---|---|---|
| Not Independent | Slice requires another slice to be done first | Split or reorder; eliminate the dependency |
| Not Negotiable | Acceptance criteria specify implementation details | Rewrite criteria around user-observable outcomes |
| Not Valuable | Slice delivers infrastructure with no user-facing outcome | Add a thin user-visible layer or absorb into a larger slice |
| Not Estimable | Team cannot size it | Slice is too large or too ambiguous — break it down |
| Not Small | Can't ship in a sprint | Split |
| Not Testable | No acceptance criteria that can be evaluated | Add observable criteria; if none exist, the hypothesis isn't ready |

---

## PR Format

PRs that change product behavior must reference their parent hypothesis.

```markdown
## What this changes
[User-observable outcome — what the user can now do]

## Hypothesis reference
Closes: [Issue / Slice link]
Parent EPIC: [EPIC link]
Assumption tested: [Which assumption from the EPIC hypothesis this PR addresses]

## Signal
[What telemetry, logging, or measurement was added or updated to track the outcome]

## Stopping condition status
[Did this PR bring us closer to or further from the EPIC stopping condition? What was observed?]
```

---

## GitHub Actions — Hypothesis Lint

Every PR that touches product behavior should be checked by `hypothesis-lint`:

Lint rules (implement as GitHub Action):
1. PR description must reference a parent hypothesis (Issue or EPIC)
2. Referenced Issue must contain a stopping condition field
3. Referenced Issue must contain at least one INVEST compliance flag
4. If INVEST flag is `No` on any dimension, a comment is auto-posted requesting justification

This is not a gate — it is a forcing function. Teams can override. But they cannot ignore.
