# Artifact Risk Registry

This file defines danger levels and diagnostic questions for common design artifacts. Apply this assessment only when an artifact lacks a paired hypothesis.

---

## Risk Levels

**🔴 High Risk** — Frequently used as narrative insulation. Produces no falsifiable output on its own.  
**🟡 Medium Risk** — Useful as a hypothesis instrument if constrained. Dangerous when treated as a deliverable.  
**🟢 Low Risk** — Structurally tied to a testable condition. Safe when used correctly.

---

## Artifact Registry

### Persona — 🔴 High Risk

**What it does well:** Builds team empathy, aligns on an audience segment.  
**What makes it dangerous:** It cannot be wrong. No persona has ever been falsified. It becomes a reference point that immunizes decisions against measurement.  
**The tell:** "Our persona wouldn't do that" used to reject usability data.

**Diagnostic questions:**
- What signal would prove this persona's stated motivation is incorrect?
- Has this persona ever caused a feature to be *removed* from scope?
- Is the persona derived from behavioral data or from a workshop?

**Conversion path:** Strip the persona. Extract the *situation* and *motivation*. Write it as a job story hypothesis. Test the motivation claim directly.

---

### Journey Map — 🔴 High Risk

**What it does well:** Surfaces handoff gaps, aligns cross-functional teams on sequence.  
**What makes it dangerous:** It is always plausible. A journey map tells a story that is impossible to falsify because it describes an idealized sequence, not a measured one. It becomes a consensus artifact — everyone agrees, nothing is tested.  
**The tell:** The journey map is presented to stakeholders as a research output.

**Diagnostic questions:**
- Which step in this journey was observed vs. assumed?
- What would the journey map look like if the core assumption were wrong?
- What signal would tell us users actually experience this sequence?

**Conversion path:** Identify the highest-risk assumed step. Write a hypothesis about it. Design a paper test for that step only.

---

### Service Blueprint — 🟡 Medium Risk

**What it does well:** Makes operational complexity visible. Useful for identifying failure modes.  
**What makes it dangerous:** When used as a planning artifact rather than a diagnostic one, it becomes a map of how we *want* things to work — not how they do.  

**Diagnostic questions:**
- Which backstage processes in this blueprint have been observed vs. assumed?
- Does each frontstage action have a success signal?

---

### How Might We (HMW) — 🟡 Medium Risk

**What it does well:** Opens problem space, prevents premature convergence.  
**What makes it dangerous:** HMW sessions produce infinite plausible ideas with no stopping condition. Teams leave energized and untethered.  
**The tell:** The HMW output is treated as a roadmap.

**Conversion path:** Each HMW that survives synthesis must be converted to a job-story hypothesis before it enters a backlog. No hypothesis = no ticket.

---

### Creative Brief — 🟡 Medium Risk

**What it does well:** Aligns stakeholders on intent and scope.  
**What makes it dangerous:** Briefs have no stopping condition. "Create an experience that delights users" cannot be falsified.  

**Diagnostic questions:**
- What is the measurable outcome this brief is optimizing for?
- What signal tells us the brief has been satisfied?
- When does work under this brief stop?

**Conversion path:** Rewrite the brief's objective section as a job-story hypothesis. The brief becomes the context. The hypothesis becomes the contract.

---

### User Story — 🟡 Medium Risk

**What it does well:** Communicates scope in a team-legible format.  
**What makes it dangerous:** "As a user, I want X so that Y" has no signal. It can be satisfied by shipping anything that plausibly resembles X.

**Conversion path:** Convert to a job story. Add a signal and test plan. Pre-register in DHF.

---

### Usability Test Plan — 🟢 Low Risk

Low risk when the test plan specifies:
- A task completion threshold
- A session count and participant criteria
- A defined pass/fail condition

Becomes medium risk when the plan produces "insights" but no pass/fail verdict.

---

### A/B Test / Experiment — 🟢 Low Risk

Lowest risk artifact in the toolkit — structurally falsifiable by design.  
Risk increases when:
- Sample size is not pre-specified (p-hacking window)
- No expiry date on the test
- "Inconclusive" is treated as a valid permanent state

---

## Universal Diagnostic Questions

Apply these to any artifact when in doubt:

1. **What would prove this wrong?** If the answer is "nothing," the artifact is functioning as narrative insulation.
2. **If it were falsified, would behavior change?** If the team would generate a new narrative instead of changing course, the artifact has no epistemic force.
3. **Does this have a stopping condition?** Work without a stopping condition is a retainer in disguise.
4. **Is this derived from observation or synthesis?** Synthesis without observation is creative writing.
