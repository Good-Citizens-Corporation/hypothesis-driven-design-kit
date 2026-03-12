# How This Works

The full details of the hypothesis-driven design process.

> **New here?** Start with the [5-Minute Primer](PRIMER.md) and [Quick Start](QUICK_START.md) first.

---

## The Basic Idea

You're going to:
1. **Write down what you think will happen** (before you build)
2. **Build the thing**
3. **Check if you were right**
4. **Write down what you learned**

That's the whole process. Everything else is just making sure we actually do it.

---

## The Loop (Visual)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   GUESS → BUILD → WATCH → CHECK → LEARN → REPEAT           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Traceability (V&V)

For rigorous evidence, we maintain full traceability from inputs through outputs to evidence:

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  DESIGN INPUT   │────▶│  DESIGN OUTPUT  │────▶│    EVIDENCE     │
│    (PRE-###)    │     │    (DO-###)     │     │  (OBS-###, etc) │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                       │                       │
        │                       │                       │
        ▼                       ▼                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                        TRACE MATRIX                             │
│         Links every input to its output and evidence            │
└─────────────────────────────────────────────────────────────────┘
```

| Artifact | Purpose | ID Format |
|----------|---------|------------|
| Design Input | Acceptance criteria defined before building | PRE-### |
| Design Output | What was built to satisfy each input | DO-### |
| Trace Matrix | Links Input → Output → Evidence | TRC-### |
| Decision Log | Timestamped choices with rationale | — |

### Step 1: Guess (Pre-registration)

Before you build anything, answer:
- What do you think will happen?
- How will you measure it?
- What would prove you wrong?

**Why?** If you don't commit in advance, you'll unconsciously shift your goals to match whatever happened. This is human nature, not character flaw.

### Step 2: Build

Build the smallest thing that tests your guess. Don't over-engineer.

**Why?** The sooner you test, the sooner you learn. A quick test beats a perfect build you never finished.

### Step 3: Watch

Collect evidence while it runs:
- Watch users
- Check analytics
- Note what surprises you

**Why?** "I think it's working" isn't evidence. Numbers and observations are.

### Step 4: Check

Compare your prediction to reality:
- ✅ **You were right** — Great, now you know it works
- ❌ **You were wrong** — Great, now you learned something
- ❓ **It's unclear** — The test wasn't good enough; try again

**Why?** This is the moment of truth. Did your guess match reality?

### Step 5: Learn

Write down what happened and what you'll do about it.

**Why?** In six months, you'll forget. Your teammates don't know what's in your head. The log is institutional memory.

---

## Where Everything Gets Saved

All your evidence goes into CSV files in the `evidence-packet/` folder. Why CSV? Because:
- Any tool can read them (Excel, Python, even Notepad)
- They're version-controlled (you can see who changed what)
- They're human-readable (no special software needed)

### Pre-registrations (`pre_registrations.csv`)

Every guess you make gets saved here.

| Column | What it means |
|--------|---------------|
| `registration_id` | The ID (PRE-001, PRE-002...) |
| `registered_at` | When you made the guess |
| `hypothesis` | What you predicted |
| `primary_metric` | What you're measuring |
| `baseline` | Where things are now (before your change) |
| `success_threshold` | The number that means "success" |
| `falsification_criteria` | What would prove you wrong |
| `timeline` | When you'll check the results |
| `status` | registered → validated / falsified / abandoned |
| `outcome_logged_at` | When you checked the results |
| `outcome_notes` | What actually happened |

### Design Outputs (`design_outputs.csv`)

What you actually built to satisfy each design input.

| Column | What it means |
|--------|---------------|
| `output_id` | The ID (DO-001, DO-002...) |
| `created_at` | When this output was created |
| `pre_reference` | Which design input (PRE-###) this satisfies |
| `specification` | What was built (functional description) |
| `artifact_type` | Type of artifact (code, config, protocol, etc.) |
| `artifact_ref` | Link to the artifact (PR, file path, doc link) |
| `verification_method` | How correctness was verified |
| `verified_at` | When verification occurred |
| `verified_by` | Who verified it |

### Trace Matrix (`trace_matrix.csv`)

Maps every design input to its output and supporting evidence.

| Column | What it means |
|--------|---------------|
| `trace_id` | The ID (TRC-001, TRC-002...) |
| `design_input` | The PRE-### being traced |
| `design_output` | The DO-### that satisfies the input |
| `evidence_refs` | Comma-separated OBS-###, decision log entries |
| `verification_status` | pass / fail / pending |
| `validation_status` | validated / falsified / inconclusive / pending |
| `notes` | Additional context |

### Decisions (`decision_log.csv`)

Every important choice you make gets saved here.

| Column | What it means |
|--------|---------------|
| `date` | When you decided |
| `decision` | What you decided |
| `pre_reference` | Which hypothesis it relates to (if any) |
| `context` | Why this came up |
| `evidence` | What data informed your decision |
| `surprised` | Were you surprised by the results? |
| `learning` | What you know now that you didn't before |
| `next_steps` | What you'll do next |

### Observations (`observation_events.csv`)

Everything you notice gets saved here.

| Column | What it means |
|--------|---------------|
| `session_id` | The ID (OBS-001, OBS-002...) |
| `timestamp` | When you noticed it |
| `pre_reference` | Which hypothesis it relates to |
| `experiment_reference` | Which experiment it relates to |
| `observation_type` | What kind (user session, analytics, etc.) |
| `participants` | How many people/samples |
| `key_findings` | What you saw |
| `supports_hypothesis` | Does this support your guess? |
| `quotes_artifacts` | Notable quotes, screenshots, links |
| `implications` | What to do about it |

---

## How the Automation Works

You don't have to edit the CSV files by hand. When you fill out a form, automation handles it.

### When you submit a pre-registration:

1. The system reads your form
2. Assigns the next available ID (PRE-001, PRE-002...)
3. Adds your row to `pre_registrations.csv`
4. Comments on the issue with your ID
5. Closes the issue (it's saved now)

### When you log an observation:

1. The system reads your form
2. Assigns the next available ID (OBS-001, OBS-002...)
3. Adds your row to `observation_events.csv`
4. Comments and closes

### When you log a decision:

1. The system reads your form
2. Adds your row to `decision_log.csv`
3. Comments and closes

### When you open a Pull Request:

1. The system checks: Is this a feature PR? (not `chore:`, `docs:`, etc.)
2. If yes: Look for `PRE-XXX` in the PR description
3. Verify that PRE-XXX actually exists in the CSV
4. If missing or invalid: Block the PR with a friendly error explaining how to fix it

---

## The Rules

These aren't arbitrary. Each one prevents a specific failure mode.

### 1. Always pre-register before building

**What:** If you're testing a hypothesis, write it down first.

**Why:** Prevents "I totally predicted that" hindsight bias.

### 2. Every hypothesis must be falsifiable

**What:** You must define what failure looks like.

**Why:** "Users will like it" isn't a hypothesis. There's no way to fail. "At least 60% will complete onboarding" can fail.

### 3. Never edit old evidence

**What:** Only add new rows. Never change old ones.

**Why:** The audit trail needs to be trustworthy. If you can edit history, the evidence means nothing.

### 4. Log surprises immediately

**What:** When something unexpected happens, write it down *right now*.

**Why:** You'll forget. Surprises are the most valuable data—they're where your mental model was wrong.

### 5. Always close the loop

**What:** Every pre-registration should eventually have an outcome.

**Why:** Abandoned experiments are wasted experiments. Even "we stopped caring" is an outcome worth logging.

---

## Who Does What (Optional)

You can use this solo or with a team. If you have a team:

| Role | What they do |
|------|--------------|
| **Hypothesis Owner** | Writes the pre-registration, decides if it succeeded |
| **Builder** | Codes the experiment |
| **Reviewer** | Checks that PRs have valid PRE references |

---

## Making This Your Own

This is a template. Change it.

**Want more rigor?** Add approval requirements, mandatory peer review of hypotheses.

**Want less?** Remove the PR check. Use the templates manually instead of workflows.

**Using different tools?** Swap GitHub for Notion, Linear, whatever. The *method* is what matters.

The core is just:
1. Predict before building
2. Define failure
3. Measure what happens
4. Write down what you learn

Everything else is scaffolding.
