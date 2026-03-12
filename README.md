# Hypothesis-Driven Design Kit

> Stop shipping features. Start learning.

---

## New Here?

| You want to... | Start here |
|----------------|------------|
| **Understand the concepts** (5 min) | [The Primer](docs/PRIMER.md) |
| **Get set up and running** (10 min) | [Quick Start](docs/QUICK_START.md) |
| **See a complete example** (15 min) | [Worked Example](docs/EXAMPLE.md) |
| **Read the full process** | [How This Works](docs/GOVERNANCE.md) |

No prior experience with behavioral design or experimentation required.

---

## What Is This?

A GitHub template that helps you practice **hypothesis-driven design** (HDD). 

Instead of building what you *think* is right, you:

1. **Predict** what will happen (write it down before you build)
2. **Define failure** (what would prove you wrong?)
3. **Build** the smallest thing to test it
4. **Measure** actual outcomes
5. **Compare** to your prediction
6. **Learn** — especially when you're wrong

## Why?

Traditional product development rewards shipping. HDD rewards learning.

| Traditional | Hypothesis-Driven |
|-------------|-------------------|
| "We shipped the feature" | "We learned X doesn't work" |
| Success = delivery | Success = insight |
| Being wrong = failure | Being wrong = data |
| Gut feelings guide decisions | Evidence guides decisions |

**The uncomfortable truth:** If you're not surprised by your data, you're not experimenting — you're confirming what you already believe.

---

## Quick Start (The Short Version)

### 1. Use This Template

Click **"Use this template"** → Create your own repository.

### 2. Pre-register Your First Hypothesis

Go to **Issues → New Issue → 🔬 Pre-register Hypothesis**

Fill out:
- What you believe will happen
- How you'll measure it
- What result would prove you wrong

The workflow assigns a `PRE-001` ID and logs it to CSV.

### 3. Create an Experiment

Go to **Issues → New Issue → 🧪 Experiment**

Reference your `PRE-001` and define:
- What you'll build/change
- Success criteria
- Measurement plan

### 4. Do the Work

Create **📦 Work Items** as needed to implement the experiment.

### 5. Collect Evidence

As you learn, log:
- **👁️ Observations** — user sessions, test results, data pulls
- **📝 Decisions** — what you decided and why (especially surprises)

### 6. Close the Loop

Update your pre-registration with the outcome:
- Validated ✅
- Falsified ❌ (this is valuable!)
- Abandoned 🚫
- Inconclusive ❓

---

## What's Included

### Issue Templates

| Template | Purpose |
|----------|---------|
| 🔬 Pre-register Hypothesis | Lock your prediction before building |
| 📝 Log Decision | Record decisions, especially surprises |
| 👁️ Record Observation | Log evidence from sessions/tests |
| 🧪 Experiment | A testable hypothesis with outcomes |
| 📦 Work Item | A deliverable that contributes to an experiment |
| 🔍 Discovery | Research to establish baseline or explore |

### Workflows

| Workflow | What It Does |
|----------|--------------|
| `process-preregistration.yml` | Assigns PRE-XXX ID, appends to CSV |
| `process-decision.yml` | Appends decision to CSV |
| `process-observation.yml` | Assigns OBS-XXX ID, appends to CSV |
| `require-preregistration.yml` | Blocks PRs without hypothesis reference |

### Evidence Packet

| File | Purpose |
|------|---------|
| `pre_registrations.csv` | Your locked hypotheses |
| `decision_log.csv` | Your design decisions |
| `observation_events.csv` | Your collected evidence |

---

## The Rules

### Pre-registration Is Not Optional

If you're testing a hypothesis, you must pre-register it **before** you see results. This prevents:
- Cherry-picking metrics that happened to improve
- Post-hoc rationalization ("we always knew that")
- Confirmation bias

### Falsification Is Required

Every hypothesis must define what would prove it wrong. If nothing can falsify your hypothesis, it's not testable — it's a belief.

**Bad:** "Users will like the new design"  
**Good:** "Task completion rate will increase from 60% to 80%"

### Being Wrong Is Valuable

A falsified hypothesis is not a failure. It's data. You now know something you didn't know before.

**Log your surprises.** They're the most valuable part.

---

## Adapting This Kit

### Different Terminology?

The templates use neutral terms (Experiment, Work Item, Discovery). If your team prefers:

| This Kit | Scrum | Kanban | Research |
|----------|-------|--------|----------|
| Experiment | Epic | Initiative | Study |
| Work Item | Story/Task | Card | Task |
| Discovery | Spike | Research | Baseline |

Fork and rename.

### Need Agile Integration?

See `extensions/agile/` for EPIC/SLICE/SPIKE templates with INVEST criteria and velocity tracking.

### Different Tools?

The workflows use GitHub Actions and CSVs. Adapt as needed:
- CSV → Airtable/Notion database
- GitHub Issues → Jira/Linear
- GitHub Actions → Zapier/n8n

The *methodology* is what matters, not the tooling.

---

## Share Your Results

We're collecting community outcomes to validate whether HDD actually works.

**[Submit your results →](https://github.com/Good-Citizens-Corporation/hypothesis-driven-design-kit/issues/new/choose)**

What we want to know:
- Did you discover something surprising?
- Would you recommend this process?
- What would you change?

---

## Resources

- [Quick Start Guide](docs/QUICK_START.md)
- [Governance & Process](docs/GOVERNANCE.md)
- [Agile Extension](extensions/agile/README.md)

---

## License

MIT — Use it, fork it, adapt it.

---

*If you already know what you'll learn, you're not experimenting. You're documenting.*
