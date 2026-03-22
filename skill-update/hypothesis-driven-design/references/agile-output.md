# Agile Output — EPICs and Vertical Slices

This reference covers EPIC structuring and vertical slice generation under the HDD + INVEST model.

---

## The Relationship Between Hypotheses and EPICs

An EPIC is not a feature cluster. An EPIC is a **hypothesis container** — it exists to test one
primary hypothesis, and it closes when the stopping condition is reached, not when all tickets are done.

```
HYPOTHESIS → EPIC (validates the hypothesis)
EPIC → VERTICAL SLICES (each slice tests a sub-assumption)
SLICE → SIGNAL (each slice instruments something measurable)
SIGNAL → DECISION (continue / pivot / stop at EPIC level)
```

If an EPIC has no hypothesis, it is a feature roadmap item wearing an EPIC label. Return it to
Phase 4 in SKILL.md and generate the hypothesis first.

---

## INVEST Model — Applied to HDD

INVEST is the standard for well-formed user stories. In HDD, every dimension maps to a testability concern.

| Principle | Standard definition | HDD interpretation |
|---|---|---|
| **I**ndependent | Can be developed without other stories | Can be validated without other hypotheses being true first |
| **N**egotiable | Not a fixed contract; scope can flex | The implementation is negotiable; the outcome being tested is not |
| **V**aluable | Delivers value to users or stakeholders | Advances validation of the parent hypothesis |
| **E**stimable | Team can size it | The assumption being tested is specific enough to scope |
| **S**mall | Fits in a sprint | Tests one assumption, not a cluster |
| **T**estable | Can be verified | Has acceptance criteria written as observable user behaviors |

A slice that fails INVEST is not "a risk to manage." It is a hypothesis that isn't ready to build.

---

## Splitting EPICs into Vertical Slices

Vertical slices cut through all layers of the stack (data, logic, UI) to deliver something
a user can interact with. They are not horizontal layers.

**Bad split (horizontal):**
- Slice 1: Backend API for feature X
- Slice 2: Frontend for feature X
- Slice 3: Analytics for feature X

No individual slice is valuable. Nothing can be validated until all three are done.

**Good split (vertical):**
- Slice 1: User can complete the core action with a thin UI and basic data — no polish
- Slice 2: User gets feedback when the action succeeds or fails — instrumented
- Slice 3: User can recover from errors without leaving the flow — completion path

Each slice ships something a user touches. Each slice can be validated independently.

---

## Slice Splitting Patterns

Use these when a slice fails INVEST:

| Problem | Split pattern |
|---|---|
| Too big | Happy path first — build the minimal version that proves the hypothesis direction |
| Not independently testable | Stub the dependency — mock or hardcode what isn't built yet |
| Not valuable alone | Thin vertical — add the thinnest possible UI to an otherwise invisible slice |
| Not estimable | Research spike — timebox investigation, output is a revised estimate and scope |

---

## Value Delivery Checkpoint

At the end of every EPIC, before closing, verify:

1. **Value delivered**: What can a user do now that they couldn't do before?
2. **Value validated**: What signal confirmed that this is valuable?
3. **Learning captured**: What did the team learn about the hypothesis?
4. **DDR updated**: Are all INVEST trade-offs documented?

If the team cannot answer all four, the EPIC is not done — the outcome log in the pre-registration
record is incomplete. Close only when the outcome log is filled.

---

## Non-Agile Teams

For teams not using sprints or EPICs, the same logic applies at a different granularity:

- Replace EPIC with **Design Phase**
- Replace vertical slice with **Prototype milestone**
- Replace INVEST with **INVEST-equivalent criteria**: Is this milestone independently evaluable?
  Does it deliver something a user can react to? Is it scoped to test one assumption?

The V&V trace and pre-registration process are identical. Only the packaging changes.
