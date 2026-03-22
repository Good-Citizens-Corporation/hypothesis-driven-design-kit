---
name: hypothesis-driven-design
description: >
  Apply Hypothesis-Driven Design (HDD) methodology to any product, research, or strategy artifact.
  Trigger this skill whenever a user submits a PRD, brief, research report, strategy doc, journey map,
  persona set, or any artifact that contains assertions, requirements, or recommendations. Also trigger
  when a user asks to write, critique, or format a hypothesis; wants to generate GitHub issues or EPICs
  from a hypothesis; needs to pre-register a hypothesis for V&V tracing; asks how to split work into
  vertical slices; or needs a progressive validation test plan to validate assumptions at the lowest
  fidelity before building. Trigger aggressively — if the artifact makes claims about users, value, or
  outcomes, this skill applies.
---

# Hypothesis-Driven Design Skill

HDD is a methodology that treats every design artifact as a hypothesis to test — not evidence to cite.
The canonical unit of work is the **hypothesis statement**. Every deliverable this skill produces traces
back to one.

> **Canonical hypothesis format:**
> *We believe [outcome] is achievable if people doing/being [situation] can get [motivation].*

This is the atomic unit. If a team cannot write this sentence for what they're building, they are not
doing product work — they are doing narrative management.

---

## Order of Operations

Run these phases in sequence. Do not skip narrative challenge. It is the most important step.

```
1. NARRATIVE CHALLENGE    → Identify and surface unsupported assertions
2. ASSUMPTION EXTRACTION  → Extract all implicit assumptions
3. CONFIDENCE RANKING     → Rank by how much is riding on each assumption being true
4. HYPOTHESIS GENERATION  → Convert top assumptions to canonical hypothesis statements
5. ARTIFACT ROUTING       → PRD rewrite | GitHub output | V&V pre-registration | EPIC/slice | Test plan
```

---

## Phase 1: Narrative Challenge

**Before extracting anything, identify narratives.**

A narrative is any claim presented as a finding that has no stated source, no measurement basis, and no
falsification criteria. Narratives are dangerous because they feel like evidence. They survive slide
decks, PRDs, and strategy reviews because they are plausible, not because they are true.

**Detection patterns — flag these on sight:**

| Pattern | Example | Why it's a narrative |
|---|---|---|
| Confident assertion without provenance | "Users are frustrated by slow onboarding" | Who measured this? When? How many users? |
| Persona stated as fact | "CTOs at mid-market SaaS spend 40+ hours/month on X" | Specific number, no source |
| "Research shows" with no citation | "Research shows users prefer simplicity" | Which research? What sample? |
| Solutions framed as needs | "Users need a dashboard" | Solution, not a need |
| Trend as justification | "AI is transforming the industry" | Trend ≠ evidence this feature is worth building |
| Consensus as evidence | "Stakeholders agree that..." | Agreement is not validation |

**Structural anti-patterns — flag these on intake:**

| Pattern | Signal | Why it prevents stopping |
|---|---|---|
| **Undifferentiated commitment** | Every item appears equally load-bearing; no story can be cut because none are ranked | *"Everything is needed"* means nothing was asked *"which thing most needs to be true first?"* |
| **Hypothesis-shaped hole** | Top-level organizing assumption (e.g., "Top 25 Inspections") has no validation | The structure appears complete but the load-bearing claim at the center is untested |

Story maps and feature backlogs are especially vulnerable to undifferentiated commitment because the 
format rewards completeness — every story in its column, every ID assigned — without requiring any 
story to answer *what would happen if we didn't build this*.

When found, flag explicitly:

*"This artifact exhibits undifferentiated commitment. [N] items are specified with equal weight. None 
are ranked by assumption risk. Without ranking, there is no mechanism to cut scope — and without a 
mechanism to cut, there is no stopping condition."*

**Output of this phase — Narrative Risk Register:**

```
NARRATIVE: [quoted assertion from artifact]
LOAD-BEARING: Yes/No — if false, does the strategy change?
PROVENANCE: [source cited, or NONE]
RISK: HIGH / MEDIUM / LOW
```

Flag `HIGH` whenever the narrative is both load-bearing AND uncited.
These become the top candidates for hypothesis conversion in Phase 3.

---

## Phase 2: Assumption Extraction

Extract the full assumption set — including ones the author didn't know they were making.

**Sources of hidden assumptions:**
- Every persona section assumes the persona is real and representative
- Every user story assumes the stated want exists and that satisfying it produces the stated benefit
- Every timeline assumes scope is stable enough to commit to dates
- Every success metric assumes the metric is measurable with current instrumentation
- Every "out of scope" section assumes exclusions won't invalidate the core value proposition

**Author-flagged uncertainty (assumption-masked-as-requirement):**

Scan for hedging language that signals the author knows they don't know:

| Pattern | Examples |
|---------|----------|
| Uncertainty hedges | "Not sure if this is applicable", "TBD", "May or may not support" |
| Conditional existence | "If we decide to...", "Potentially include..." |
| Placeholder scope | "Something like...", "Some kind of..." |

These are **more dangerous than hidden assumptions** — they create scope ambiguity that survives into 
development because the hedge is normalized. Each one is a load-bearing narrative pretending to be 
a requirement.

When found, flag explicitly:

*"This artifact contains [N] author-flagged uncertainties. Each represents scope that will expand or 
contract unpredictably unless resolved before development:*
- *[Widget/Feature]: '[hedge text]' — resolve to YES (include with hypothesis) or NO (remove from spec)*"

**Output of this phase — flat assumption list:**

```
ASSUMPTION: [plain language statement of what must be true]
SOURCE SECTION: [where in the artifact this was found or implied]
CURRENTLY VALIDATED: Yes / No / Partially
```

---

## Phase 3: Confidence Ranking

Rank by **consequence of being wrong**, not likelihood of being wrong.

For each assumption, ask: *If this is false, what happens to the product strategy?*

- **CRITICAL**: Strategy collapses or requires full pivot
- **SIGNIFICANT**: Major scope or design change required
- **MANAGEABLE**: Addressable with iteration; low cost to be wrong

Promote all CRITICAL and SIGNIFICANT assumptions to hypothesis candidates.
MANAGEABLE assumptions are logged but not pre-registered unless the team requests it.

---

## Phase 4: Hypothesis Generation

Convert ranked assumptions to canonical hypothesis statements.

**Template:**
> We believe **[outcome]** is achievable if people doing/being **[situation]** can get **[motivation]**.

**Rules:**
- Outcome must be observable and eventually measurable
- Situation must describe a real behavioral/contextual state — not a persona label
- Motivation must be an unmet need, not a feature description

**Anti-patterns — reject and rewrite:**

| Wrong | Why | Rewrite direction |
|---|---|---|
| "We believe users will like the dashboard" | "Like" is not measurable | What behavior indicates value? Retention? Return rate? |
| "We believe the feature will increase revenue" | Skips the causal chain | What does the user do differently that leads to revenue? |
| "We believe CTOs need better reporting" | "Need" is a solution frame | What decision are they failing to make without it? |
| "We will know success when X correlates with Y" | Correlation is observation, not test | What confounds must be controlled? Design an experiment, not a dashboard. |

**Stopping condition (required):**

Every hypothesis must define what would cause it to be abandoned. Standard Lean UX templates stop at "we will know we are successful when" — that's necessary but not sufficient.

Add: *"We will abandon this hypothesis when [falsification criteria]."*

Without this, you're running an observation labeled as a test.

**Output:** Prioritized hypothesis stack ordered by confidence rank from Phase 3.
Top hypothesis = the assumption most worth validating first.
Each hypothesis includes: statement, success metric, **stopping condition**.

---

## Phase 5: Artifact Routing

Route to the appropriate generator based on the user's context and requested output.
Read the relevant reference file before generating.

| Input / Output requested | Reference file |
|---|---|
| **Artifact intake (first step)** | `references/artifact-intake.md` — **always start here** |
| Digital strategy deck (PPTX/PDF) | `references/deck-intake.md` — **read first**, then route below |
| PRD that needs HDD intake/rewrite | `references/prd-rewrite.md` |
| GitHub issues, EPICs, or PRs | `references/github-output.md` |
| V&V hypothesis pre-registration | `references/vv-preregistration.md` |
| EPIC + vertical slice generation | `references/agile-output.md` |
| Progressive validation test plan | `references/test-plan.md` |

**PPTX ingestion:** If a `.pptx` file is uploaded, extract content before analysis:
```bash
python -m markitdown presentation.pptx
```
Read speaker notes — they contain the soft claims stated more candidly than slide copy.

---

## Artifact Danger Levels

Flag artifact danger **only when the artifact lacks a paired hypothesis.**

An artifact paired with a hypothesis — with a signal and a stopping condition — is a valid instrument.
An artifact not paired with a hypothesis is a narrative vehicle regardless of how it's labeled.

| Artifact type | Danger when unpaired | Failure mode |
|---|---|---|
| Digital strategy deck | **CRITICAL** | Persuasion structure designed to make conclusions feel like findings; see `deck-intake.md` |
| Journey map | HIGH | Narrative arc presented as research; no stopping condition possible |
| Persona | HIGH | Unfalsifiable by design; functions as identity, not hypothesis |
| Competitive analysis | HIGH | Selection bias makes this a brief for a conclusion already reached |
| User story | MEDIUM | Hidden assumption about the benefit; rarely tested |
| Brief / strategy doc | HIGH | Usually a narrative vehicle for a decision already made |
| PRD | MEDIUM-HIGH | Has the structure for rigor but rarely exercises it |
| A/B test spec | LOW | Signal and stopping condition built in; validate instrument quality |

When flagging: *"This [artifact] is not paired with a hypothesis. Without a stopping condition, it
cannot be falsified. Here is what a paired version would require..."*

---

## Artifact Epistemic Types

Classify artifacts by what they can tell you:

| Type | Definition | Examples | What it produces |
|------|------------|----------|------------------|
| **DETECTION** | Finds things; cannot tell you if they matter | Heuristic evaluation, expert review, user research synthesis, competitive analysis | Findings to test |
| **PREDICTION** | Tests things; tells you if they matter | A/B test, controlled experiment, pre-registered hypothesis with stopping condition | Evidence to decide |

**Detection artifacts** are valuable — they generate hypotheses to test. But they cannot validate themselves.
Three experts agreeing that a button placement violates "consistency and standards" doesn't predict user failure.
Inter-rater reliability validates agreement, not validity.

When the input artifact is DETECTION-type, flag explicitly:

*"This is a detection artifact. It produces findings, not evidence. The findings are:**
- [list findings]

**To convert to actionable evidence, test with:**
- [hypothesis for each finding with stopping condition]"*

Do not treat detection findings as validated conclusions. They are hypotheses waiting for experiments.

---

## Input / Output Contracts

**Input contract — enforced before any output is generated:**

The skill will not produce hypotheses, GitHub artifacts, or pre-registrations unless all three are
resolvable from the input — either provided or extractable:

1. A describable **situation** (who is doing/being what)
2. A **motivation** (what unmet need exists)
3. An **outcome** (what observable change would indicate success)

If any are missing and cannot be inferred, the skill stops and asks explicitly. It does not guess.

**Thin input handling:**

If the submitted artifact is a single assertion or brief description (<100 words with no structure):

1. **Flag explicitly:** "Input is a single claim, not an artifact. Phase 1 cannot decompose — the input IS the narrative."
2. **Choose one path:**
   - **Request source:** Ask for the document this claim came from
   - **Synthesize:** Treat the claim as a HIGH-risk narrative and reconstruct the likely artifact it implies, then proceed with analysis on the synthesized version
3. **Log the decision:** Note in the intake record that synthesis was applied

This prevents the skill from running Phase 1 on content that has nothing to decompose.

**Linked artifact sequencing check:**

Before treating an artifact as independent, ask:

1. **Is this artifact part of a sequence?** (e.g., manifesto → outreach script → sales deck)
2. **Who is the named recipient?** If there's a specific person or organization named, this may be a downstream artifact in a positioning sequence.
3. **Does another artifact establish the worldview this one applies?**

If the answer to any is yes, log the relationship in the intake record and analyze artifacts together.
Linked artifacts share assumptions — testing one may validate or falsify claims in the other.

**Output contract — every generated artifact must contain:**

1. At least one canonical hypothesis statement in the correct format
2. A **stopping condition** — what would cause this hypothesis to be abandoned
3. A **signal** — what will be measured and how

Artifacts that cannot satisfy the output contract are returned with a gap report, not generated incomplete.

**Experiment design validity check:**

When a hypothesis includes a test method, challenge the design:

| Flag | Challenge |
|------|-----------|
| "Correlated" in success metric | *"Correlation without controlled design is observation, not experiment. What confounds exist? How will you isolate the variable under test?"* |
| No control group | *"Without a control, any change could be attributed to time, environment, or regression to mean. What's your baseline?"* |
| Multiple variables changing | *"If you change A and B and see improvement, which caused it? Test one variable per hypothesis."* |
| Observational study framed as test | *"Watching what happens is detection. Manipulating conditions is prediction. Which are you doing?"* |

A well-formed hypothesis with a poorly designed test method passes the output contract structurally but fails methodologically. Flag it.

**PII handling — enforced on all outputs:**

Evidence logs are often public or shared. Never use real names in intake records, observations, or
decision logs. Use role-based pseudonyms:

- `[DL-001]` — Design Leader
- `[PM-001]` — Product Manager
- `[ENG-001]` — Engineer
- `[ORG-001]` — External Organization

Increment numbers for additional individuals: `[PM-001]`, `[PM-002]`. Apply consistently across linked
artifacts. See `references/artifact-intake.md` for full redaction guidance.

---

## Design Decision Records (DDRs)

Every EPIC output includes a DDR stub — a log of the trade-offs considered in structuring the EPIC.

This is the inspectable audit trail for anyone reading the artifact who wants to understand the
reasoning behind scope and prioritization decisions. DDRs are not optional. They are part of the
output contract for EPIC-level artifacts.

DDR format:
```
DECISION: [what was decided]
ALTERNATIVES CONSIDERED: [what else was on the table]
TRADE-OFFS: [what was deprioritized and why]
VALUE HYPOTHESIS: [what validated this iteration's scope]
INVEST COMPLIANCE: [I / N / V / E / S / T — flag any failures]
```

---

## Hypothesis Danger Signals

Stop and challenge before proceeding when you encounter:

- **No stopping condition** → *"If you never know when to stop, you're not testing — you're fishing."*
- **Requirement disguised as hypothesis** → *"This is a solution framed as a bet. Rewrite for the outcome, not the feature."*
- **Activity metric as signal** → *"Page views are not validation. What decision does this data enable?"*
- **Hypothesis format without process change** → *"Format without stopping conditions is ceremony, not rigor."*
- **Correlation claimed as causation** → *"'Correlated' in a success metric without controlled design is an observation, not a test. What confounds are uncontrolled?"*
- **Assumption masked as requirement** → *"The author flagged uncertainty ('not sure if applicable', 'TBD') but included it in scope anyway. Resolve to YES with hypothesis or NO before proceeding."*

---

## Named Inquiry Modes

When analyzing an artifact, two distinct modes of inquiry apply. Name them explicitly so the team
knows which move is being made and why.

---

### Falsification Inquiry

**Definition:** Identifying a load-bearing claim and immediately asking whether it can be verified
by an outside party.

**The move:** Take the claim at face value. Then ask: *Is there any mechanism by which this could
be proven false? Can someone outside this room check it?*

**When to use it:** Phase 1 (Narrative Challenge) and whenever a claim is doing structural work —
supporting a financial projection, justifying a product direction, or establishing competitive
differentiation. If the claim cannot be checked, it is not evidence. It is a narrative.

**Example in practice:** A pitch deck cites an IRB number as proof of clinical validation.
Falsification inquiry asks: Is this trial registered publicly? Are the results indexed anywhere?
Can a funder or facility operator independently verify the outcomes? If none of those are true,
the IRB number is functioning as a credibility signal, not as evidence.

**What it surfaces:** Unpublished trials. Undated sources. Self-referential competitive grids.
Metrics without baselines. Any claim that is load-bearing but structurally shielded from
external verification.

---

### Abductive Inquiry from Absence

**Definition:** Reasoning from what is *not* in an artifact to identify strategic gaps, blind spots,
and unoccupied positions.

**The move:** Stop asking whether the claims are true. Start asking: *What would a complete strategy
include that this one doesn't? What does the absence of that thing reveal about the assumptions the
team is operating under?*

**When to use it:** After Phase 1, once the narrative risk register is built. When the surface-level
claims are accounted for, turn to the structural silences: What market position is undefended? What
user segment is unaddressed? What data asset is being generated but not leveraged? What feedback
loop is missing?

**Example in practice:** A dementia care platform deck accounts for its product features, its market
size, its competitive differentiation. It says nothing about research data participation or patient
consent pathways. Abductive inquiry asks: *What does the absence of a research participation
strategy reveal?* Answer: the team is operating under the assumption that their value is purely
operational. That assumption leaves the most defensible long-term position — a longitudinal
behavioral dataset, with consent, at scale — entirely unoccupied.

**What it surfaces:** Unoccupied competitive positions. Missing feedback loops. Latent data assets
being ignored. User segments with unmet demand who could become demand-side pressure rather than
supply-side recipients. Strategic vulnerabilities that no one in the room named because they were
too close to the artifact to see what it wasn't saying.

---

### How the Two Modes Work Together

Falsification inquiry audits what is present.
Abductive inquiry finds what is absent.

Run falsification first — it establishes what the artifact actually claims vs. what it can prove.
Run abductive inquiry second — it establishes what the artifact would need to say to be complete.

The gap between what a strategy claims and what it can prove is the narrative risk.
The gap between what a strategy says and what it doesn't say is the strategic opportunity.

Both gaps belong in the intake report.


---

## GitHub Integration

The Hypothesis-Driven Design Kit provides GitHub infrastructure that this skill outputs connect to directly.

### Issue Templates

| Template | ID Format | Purpose |
|----------|-----------|---------|
| 📥 Artifact Intake | `INK-XXX` | Log source artifacts before analysis |
| 🔬 Pre-register Hypothesis | `PRE-XXX` | Lock predictions before building |
| 🧪 Experiment | `EXP-XXX` | Define bounded work to test a hypothesis |
| 📦 Work Item | — | Deliverables that contribute to experiments |
| 🔍 Discovery | `DISC-XXX` | Research before forming hypotheses |
| 👁️ Observation | `OBS-XXX` | Log evidence as you learn |
| 📝 Decision | — | Record what you decided and why |

### Evidence Packet CSVs

| File | Records |
|------|---------|
| `intake_log.csv` | Source artifacts with danger levels and extracted hypotheses |
| `pre_registrations.csv` | Locked hypotheses with metrics, thresholds, falsification criteria |
| `design_outputs.csv` | What was built to satisfy each hypothesis |
| `observation_events.csv` | Structured observations during testing |
| `decision_log.csv` | Decisions with rationale and surprise flags |
| `trace_matrix.csv` | Links INK → PRE → DO → Evidence |

### Traceability Chain

```
INK-001 (artifact) → PRE-001 (hypothesis) → EXP-001 (experiment) → OBS-001 (evidence)
                  → PRE-002 (hypothesis) → EXP-002 (experiment) → Decision logged
```

Every artifact that enters the process can be traced forward to the evidence that validated
or invalidated the hypotheses extracted from it.

### Workflow Automation

GitHub Actions automate:
- ID assignment (INK-XXX, PRE-XXX, OBS-XXX)
- CSV logging (append-only audit trail)
- Issue updates with next steps
- PR blocking if hypothesis ID is missing

When generating outputs, reference these templates and CSVs by name. Users can copy the
generated content directly into the appropriate issue template.

---

## Distribution

This skill is distributed as a `.skill` file via the Hypothesis-Driven Design Kit GitHub repo.
Users install it via Copilot's skill import.

Versioned releases follow semver. Each release ships with:
- Updated `SKILL.md` and reference files
- A rendered V&V trace log on the project's GitHub Page (living evidence log, not docs)
- A changelog entry documenting what changed and why

The GitHub Page is not marketing. It is the public, human-readable V&V trace:
active hypotheses, their signals, stopping conditions, and validation status.
