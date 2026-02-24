# The 5-Minute Primer

You're building something that changes how people behave. That's powerful.

This guide helps you do it honestly.

---

## What's the Problem?

When we build things, we naturally want them to work. So we:
- Notice evidence that supports us
- Ignore evidence that doesn't
- Remember "I knew it all along" (even when we didn't)

This isn't being dishonest. It's being human. Our brains are wired this way.

The problem? **You can't learn from experiments you've already decided worked.**

---

## The Fix: Commit Before You Ship

Write down what you expect to happen *before* you build it.

That's it. That's the whole method.

When you commit in advance:
- You can't move the goalposts later
- You'll notice when you're wrong (which is where learning lives)
- Others can verify your results

This is called **pre-registration**, and scientists use it to keep themselves honest.

---

## Core Concepts (Plain English)

### Hypothesis

A guess you can be wrong about.

**Bad:** "This will be better"  
**Good:** "Showing a progress bar will increase completion rate from 40% to 60%"

The difference? The good one can fail. It has numbers. You'll know.

### Baseline

Where things are *before* you change them.

If you don't measure before, you can't prove after. "It feels faster" isn't evidence. "Load time dropped from 3.2s to 1.1s" is.

### Success Threshold

The minimum result that counts as success.

Pick this number *before* you see the data. Otherwise you'll pick whatever you got.

### Falsification

What would prove you wrong?

If nothing could prove you wrong, you're not running an experiment. You're just hoping.

**Example:**  
- Hypothesis: "Users will complete onboarding faster"
- Falsification: "If completion rate stays below 50%, or time-to-complete doesn't drop by at least 30%, the hypothesis is falsified"

### Observation

Something you noticed. Write it down.

Observations are raw material. They're not conclusions. "User hesitated on step 3" is an observation. "Step 3 is confusing" is an interpretation.

Collect observations. Interpretations come later.

### Decision

What you decided, and why.

Every experiment ends with a decision: ship it, kill it, or iterate. The decision log captures:
- What you decided
- What evidence led to it
- Whether you were surprised

Future-you will thank present-you for this.

---

## The Loop

```
┌─────────────────────────────────────────────┐
│  1. WONDER                                  │
│     "I think [change] will cause [outcome]" │
└──────────────────┬──────────────────────────┘
                   ▼
┌─────────────────────────────────────────────┐
│  2. COMMIT                                  │
│     Pre-register: Write down your guess     │
│     Include: baseline, threshold, timeline  │
└──────────────────┬──────────────────────────┘
                   ▼
┌─────────────────────────────────────────────┐
│  3. BUILD                                   │
│     Make the change                         │
│     Reference your PRE-XXX in the PR        │
└──────────────────┬──────────────────────────┘
                   ▼
┌─────────────────────────────────────────────┐
│  4. OBSERVE                                 │
│     Watch what happens                      │
│     Log observations (don't interpret yet)  │
└──────────────────┬──────────────────────────┘
                   ▼
┌─────────────────────────────────────────────┐
│  5. DECIDE                                  │
│     Compare results to your threshold       │
│     Log the decision with evidence          │
│     Note: Were you surprised?               │
└──────────────────┬──────────────────────────┘
                   ▼
┌─────────────────────────────────────────────┐
│  6. REPEAT                                  │
│     New hypothesis? Back to step 1.         │
└─────────────────────────────────────────────┘
```

---

## Why Bother?

Because right now, most software is built on vibes.

"I think users want this" → build it → it ships → nobody checks if it worked.

That's fine for side projects. But if you're building something that matters—something that affects how people think, feel, or act—you should know whether it's working.

This kit gives you:
- **Confidence:** "I know this worked because I tested it honestly"
- **Credibility:** "Here's the evidence, judge for yourself"
- **Learning:** "I was wrong about X, which taught me Y"

---

## Glossary

| Term | Plain English |
|------|---------------|
| **Pre-registration** | Writing down your guess before seeing results |
| **Hypothesis** | A guess that can be proven wrong |
| **Baseline** | The "before" measurement |
| **Threshold** | The minimum "after" that counts as success |
| **Falsification** | What would prove you wrong |
| **Observation** | Something you noticed (raw data) |
| **Decision** | What you chose to do, and why |
| **Evidence packet** | The folder where all this gets recorded |
| **PRE-XXX** | The ID for a registered hypothesis |
| **OBS-XXX** | The ID for a recorded observation |

---

## Common Mistakes

### "I'll figure out what success looks like later"

No. Pick your threshold now. If you wait, you'll pick whatever you got.

### "The results were close enough"

If you said 60% and got 45%, that's a failure. That's okay! Failures teach more than wins.

### "Users seemed happy"

Seemed? Measure it. "4.2/5 satisfaction rating" beats "seemed happy."

### "We didn't have time to measure the baseline"

Then you can't prove anything changed. The baseline takes 10 minutes. Make time.

### "The hypothesis evolved during development"

Fine, but log the evolution. Otherwise you're retrofitting your predictions to match results.

---

## Next Steps

1. Read [QUICK_START.md](QUICK_START.md) for the 10-minute setup
2. Look at [EXAMPLE.md](EXAMPLE.md) for a worked example
3. Run your first experiment

You don't need to be a scientist. You just need to be honest with yourself.

---

*"The first principle is that you must not fool yourself—and you are the easiest person to fool."*  
— Richard Feynman
