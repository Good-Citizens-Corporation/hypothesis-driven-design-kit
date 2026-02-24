# A Complete Example

Follow along with a real-ish experiment from start to finish.

---

## The Scenario

You're building an AI chatbot agent. Users can ask questions, and the agent answers.

You notice a problem: **Users keep asking the same follow-up questions.** The agent answers their first question, but they seem confused and ask for clarification.

You have a hunch: **Maybe the agent's responses are too long and dense.** You want to test whether shorter, simpler responses would help.

---

## Step 1: Make Your Guess

Before you change anything, write down your prediction.

Go to **Issues → New Issue → 🔬 Pre-register Hypothesis**

### What you fill in:

**Hypothesis:**
> If I limit agent responses to 3 sentences max and use simpler vocabulary (8th grade reading level), users will need fewer follow-up messages to get their answer.

**Primary Metric:**
> messages_per_session

**Baseline / Current State:**
> Current average: 4.2 messages per session (measured last 7 days, n=150 sessions)

**Success Threshold:**
> ≤3.0 messages per session

**Falsification Criteria:**
> Hypothesis is falsified if:
> - Average messages per session stays above 3.5
> - OR satisfaction score drops below 3.5/5
> - OR "response too short" complaints increase

**Evaluation Timeline:**
> 2 weeks after launch (need ~200 sessions minimum)

### What happens next:

You submit. The system responds:

```
✅ Hypothesis registered as PRE-001

Your hypothesis is now part of the evidence packet.

What happens next:
1. Build your experiment (reference PRE-001 in your PR description)
2. Ship it and collect data
3. Log observations as you learn
4. Record your decision when you have enough evidence
```

---

## Step 2: Plan the Work

Go to **Issues → New Issue → 🧪 Experiment**

### What you fill in:

**Pre-Registration Reference:**
> PRE-001

**Description:**
> Test whether shorter, simpler agent responses reduce confusion.
> 
> Changes:
> - Add response length limiter (3 sentences max)
> - Add readability scorer (target: Grade 8)
> - Add "Learn more" button for users who want detail

**Verification Criteria (Build It Right):**
> - Responses never exceed 3 sentences
> - Readability scorer returns Grade ≤10
> - "Learn more" button appears on all responses
> - No performance regression (response time stays <1s)

**Validation Criteria (Build The Right Thing):**
> - Messages per session: ≤3.0 (from PRE-001)
> - Satisfaction score: ≥4.0/5
> - "Learn more" click rate tracked

---

## Step 3: Build It

You code the feature. Break it into work items:

- **Work Item 1:** Add sentence limiter to response generator
- **Work Item 2:** Integrate readability scorer  
- **Work Item 3:** Add "Learn more" button component
- **Work Item 4:** Add analytics tracking

When you open your Pull Request:

```markdown
## Changes

Implements shorter & simpler agent responses per experiment design.

- Response limiter caps at 3 sentences
- Flesch-Kincaid readability check targets Grade 8
- "Learn more" expands to full response

Hypothesis: PRE-001
```

The PR check passes because `PRE-001` exists.

---

## Step 4: Watch and Note

The feature ships. You start watching.

### Day 3: First observation

You notice something interesting while reviewing session logs.

Go to **Issues → New Issue → 👁️ Record Observation**

**What you fill in:**

**Related Hypothesis:** PRE-001

**Observation Type:** Analytics review

**Participants:** 47 sessions

**Key Findings:**
> Messages per session dropped from 4.2 to 3.1 in first 3 days.
> "Learn more" clicked in 23% of sessions.
> One user complaint: "Why so brief?"

**Supports Hypothesis?:** Mixed

**Implications:**
> Early signal is positive but need more data. The complaint might be an outlier or a real pattern.

---

### Day 7: Second observation

You run a user session.

**Related Hypothesis:** PRE-001

**Observation Type:** User session

**Participants:** 3 users

**Key Findings:**
> User 1: "Oh, this is clearer. I get it faster."
> User 2: Clicked "Learn more" twice, satisfied.
> User 3: "I feel like it's talking to me like I'm dumb."

**Supports Hypothesis?:** Mixed

**Quotes:**
> "This is clearer" — User 1
> "Talking to me like I'm dumb" — User 3

**Implications:**
> The simplification helps most users but might alienate power users. Consider: adaptive complexity based on user expertise signals?

---

## Step 5: Check Your Results

Two weeks pass. You have 230 sessions of data.

### The numbers:

| Metric | Before | After | Threshold | Verdict |
|--------|--------|-------|-----------|---------|
| Messages/session | 4.2 | 2.9 | ≤3.0 | ✅ Pass |
| Satisfaction | 4.1/5 | 4.3/5 | ≥4.0 | ✅ Pass |
| "Too short" complaints | 2 | 5 | "No increase" | ⚠️ Minor increase |

### The verdict:

Primary metrics hit threshold. The hypothesis is **validated**, but with a caveat.

---

## Step 6: Log Your Decision

Go to **Issues → New Issue → 📝 Log Decision**

### What you fill in:

**Decision:**
> Ship shorter responses as default. Add complexity toggle for power users.

**Related Hypothesis:** PRE-001

**Context:**
> Tested whether shorter responses reduce user confusion. Primary metric hit threshold.

**Evidence:**
> - Messages/session: 4.2 → 2.9 (target ≤3.0 ✅)
> - Satisfaction: 4.1 → 4.3 (target ≥4.0 ✅)
> - "Learn more" clicked 23% — validates the escape hatch approach
> - 5 "too brief" complaints vs 2 baseline — minor increase
> - User session quote: "Talking to me like I'm dumb" — signals segment that dislikes this

**Were you surprised?:**
> Yes — Didn't expect "dumbing down" pushback. Assumed simpler = universally better.

**What did you learn?:**
> Simplicity helps most users but alienates a vocal minority who want to be treated as experts. One-size-fits-none. Need adaptive approach.

**Next Steps:**
> 1. Ship shorter responses as default (validated)
> 2. Pre-register PRE-002: "Expert mode" toggle hypothesis
> 3. Track who clicks "Learn more" frequently → auto-enable expert mode?

---

## The Evidence Packet Now Contains:

### pre_registrations.csv

```csv
registration_id,registered_at,hypothesis,primary_metric,baseline,success_threshold,falsification_criteria,timeline,status,outcome_logged_at,outcome_notes
PRE-001,2026-02-01T10:00:00Z,"If I limit agent responses to 3 sentences max and use simpler vocabulary, users will need fewer follow-ups",messages_per_session,"4.2 messages/session (7 days, n=150)",≤3.0,">3.5 messages OR satisfaction <3.5 OR complaints increase",14 days,validated,2026-02-15T14:00:00Z,"2.9 messages/session achieved. Satisfaction up. Minor complaint uptick noted."
```

### observation_events.csv

```csv
session_id,timestamp,pre_reference,experiment_reference,observation_type,participants,key_findings,supports_hypothesis,quotes_artifacts,implications
OBS-001,2026-02-04T11:00:00Z,PRE-001,#23,Analytics review,47 sessions,"Messages/session: 4.2→3.1. Learn more clicked 23%. 1 complaint.",Mixed,,"Early positive signal. Continue monitoring."
OBS-002,2026-02-08T15:00:00Z,PRE-001,#23,User session,3 users,"2/3 users positive. 1 felt patronized.",Mixed,"'This is clearer' 'Talking to me like I'm dumb'","Simplification helps most but alienates power users."
```

### decision_log.csv

```csv
date,decision,pre_reference,context,evidence,surprised,learning,next_steps
2026-02-15,"Ship shorter responses as default; add expert mode",PRE-001,"Tested shorter responses to reduce confusion","Messages: 4.2→2.9 ✅; Satisfaction: 4.1→4.3 ✅; 5 complaints (up from 2)",Yes,"Simpler isn't universally better. Power users feel patronized.","Ship default; pre-register expert mode toggle (PRE-002)"
```

---

## What You Have Now

1. **A tested hypothesis** — not a guess, actual evidence
2. **An audit trail** — anyone can verify what you claimed
3. **Documented surprises** — you learned something unexpected
4. **Next steps grounded in data** — the expert mode idea came from observation, not speculation

---

## Common Variations

### "What if my hypothesis failed?"

Same process. Your decision would say:

> **Decision:** Do not ship. Shorter responses didn't help.
> **Learning:** Length isn't the problem. Need to investigate root cause of follow-ups.
> **Next Steps:** PRE-002 to test whether adding examples improves clarity instead.

Failure is data. Log it. Move on.

### "What if the results were inconclusive?"

Your decision would say:

> **Decision:** Extend experiment 2 more weeks.
> **Learning:** 150 sessions wasn't enough to reach statistical confidence.
> **Next Steps:** Continue collecting data. Re-evaluate at 300 sessions.

### "What if I learned something unrelated?"

Log it as an observation:

> **Key Findings:** While reviewing sessions, noticed 40% of users ask about pricing. We don't have pricing info in the agent.

This becomes input for a future hypothesis. The system captures serendipity too.

---

## You're Ready

You've seen the full loop:
1. Guess (pre-register)
2. Build
3. Watch (observations)
4. Check
5. Learn (decisions)

Now go run your own experiment.

Start here: **Issues → New Issue → 🔬 Pre-register Hypothesis**
