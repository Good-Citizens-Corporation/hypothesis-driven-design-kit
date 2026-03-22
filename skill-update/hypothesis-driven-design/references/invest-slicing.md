# INVEST Slicing Reference

This file covers common failure patterns when splitting EPICs into vertical slices, and heuristics for doing it correctly under the INVEST model.

---

## What a Vertical Slice Is

A vertical slice cuts through all layers of the stack (UI → logic → data) to deliver a thin but complete piece of user value. It is not a horizontal layer (e.g., "build the database schema" or "design all the screens").

**Horizontal (wrong):** "Build the parcel data ingestion pipeline"  
**Vertical (right):** "User can enter an address and receive a parcel boundary on the map"

The vertical slice is testable end-to-end. The horizontal layer is not.

---

## INVEST Criteria — Applied

### I — Independent
Each slice should be deliverable without blocking or being blocked by other slices.

**Failure pattern:** Slices that share a data dependency and must be merged in sequence.  
**Fix:** Stub or mock the dependency. Ship the slice against the stub. Replace the stub when the dependency is ready.

### N — Negotiable
Scope within the slice is a conversation, not a commitment. The team can adjust what's included.

**Failure pattern:** Slice is written as a feature spec with locked requirements.  
**Fix:** Write acceptance conditions, not feature descriptions. What signal tells us this slice is done?

### V — Valuable
Each slice delivers observable value to a user or directly tests a hypothesis signal.

**Failure pattern:** "Refactor the component library" or "Set up CI/CD" shipped as a standalone slice.  
**Fix:** Attach the technical work to a slice that produces user-visible value. Internal value alone doesn't satisfy V.

Exception: Infrastructure slices are acceptable *only* if the EPIC hypothesis cannot be tested without them, and the dependency is documented in the pre-registration.

### E — Estimable
The team must be able to size the slice. If they can't, it's not ready to be sliced — it needs more analysis.

**Failure pattern:** "We'll figure it out in the sprint."  
**Fix:** Return to Gate 1. Run a paper solution or spike. Size after you have a paper artifact.

### S — Small
A slice should fit in one iteration. If it spans two, split it.

**Heuristics for splitting:**
- **By happy path vs. edge cases:** Ship the happy path. Add error handling and edge cases in a subsequent slice.
- **By data source:** Ship against real data in prod, stub in test env, separately.
- **By persona/situation:** If two different situations share a feature, split into two slices — one per situation.
- **By output fidelity:** Ship with rough output first. Refine fidelity in a follow-on slice.

### T — Testable
Each slice has a defined acceptance condition that connects to the parent EPIC hypothesis.

**Required format:**
```
Given [starting condition]
When [user action]
Then [observable outcome] within [time or session constraint]
```

If the "Then" clause can't be written, the slice is not ready to be filed.

---

## Common Splitting Failures

| Failure | Symptom | Fix |
|---|---|---|
| Epic masquerading as a story | Slice takes 3+ iterations to complete | Split by happy path, then edge cases |
| Layer slice | "Build the API endpoint" with no user-facing output | Attach to a full vertical slice |
| Orphaned infrastructure | DevOps work filed independently | Document as EPIC dependency; don't file as a standalone story unless critical path |
| Missing acceptance condition | Story is "done" when the developer says so | Write the Given/When/Then before the slice enters the board |
| Hypothesis orphan | Slice has no parent EPIC hypothesis | Block it. No slice enters development without a parent hypothesis. |

---

## Slice Pre-Filing Checklist

Before a slice moves to "Ready":

- [ ] Parent EPIC hypothesis identified and linked
- [ ] INVEST criteria satisfied (all six)
- [ ] Acceptance condition written in Given/When/Then format
- [ ] Paper Gate status confirmed (passed or ruled out with reason)
- [ ] Telemetry spec filed in DHF (if code is being written)
- [ ] V&V pre-registration complete

A slice that fails this checklist is **not ready.** Do not move it to the board.
