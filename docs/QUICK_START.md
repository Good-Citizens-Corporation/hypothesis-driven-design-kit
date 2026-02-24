# Quick Start Guide

Get running in 10 minutes. No prior experience needed.

> **New to this?** Read the [5-Minute Primer](PRIMER.md) first. It explains *why* we do this.

---

## Before You Start

You'll need:
- A GitHub account
- Something you want to build (and a guess about what will happen if you build it)

That's it. No special tools. No statistics degree.

---

## Step 1: Get Your Copy (2 min)

1. Go to the [template repo](https://github.com/Good-Citizens-Corporation/hypothesis-driven-design-kit)
2. Click the green **"Use this template"** button
3. Give your repo a name (like `my-agent-experiments`)
4. Click **Create repository from template**

✅ You now have your own experiment-tracking repo.

---

## Step 2: Write Down Your Guess (3 min)

This is the most important step. You're going to predict what will happen *before* you build it.

Go to **Issues → New Issue → 🔬 Pre-register Hypothesis**

### Fill in the form:

| What to write | Example |
|---------------|---------|
| **Your guess** | "If I add a progress bar, more users will finish onboarding" |
| **What you'll measure** | completion_rate |
| **Where it is now** | "Currently 40% of users finish onboarding" |
| **What counts as success** | "At least 60% finish" |
| **What proves you wrong** | "If it stays below 50%, or users complain, the guess was wrong" |
| **When you'll check** | "2 weeks after launch" |

Click Submit.

✅ The system assigns your hypothesis an ID (like `PRE-001`) and records it. You're committed now.

---

## Step 3: Plan the Work (2 min)

Go to **Issues → New Issue → 🧪 Experiment**

This is where you describe what you're actually going to build.

Put `PRE-001` in the form so your work is connected to your hypothesis.

✅ Now your code has a reason—and you'll know if that reason was right.

---

## Step 4: Build It (however long it takes)

Code your feature. If it's big, break it into **📦 Work Items**.

**Important:** When you open a Pull Request, put your hypothesis ID somewhere in the description:

```
## Changes
Added progress bar to onboarding

Hypothesis: PRE-001
```

The system checks for this. No ID = blocked PR. (This keeps us honest.)

---

## Step 5: Watch and Write (ongoing)

As you build and test, you'll notice things. Write them down:

- Someone gets confused? → Log an **👁️ Observation**
- Users do something unexpected? → Log an **👁️ Observation**
- You make a design choice based on what you learned? → Log a **📝 Decision**

These are raw notes. They build up into evidence.

---

## Step 6: Check Your Guess (5 min)

After your timeline is up (you said 2 weeks, remember?):

1. **Look at your pre-registration.** What did you predict?
2. **Look at your data.** What actually happened?
3. **Compare.** Did you hit your success threshold?
4. **Log a decision.** What did you learn? What will you do next?

Be honest. If you were wrong, say so. That's where learning lives.

---

## 🎉 You Did It

You just ran a real experiment. You:
- Made a falsifiable prediction
- Built something
- Measured the result
- Logged what you learned

Most people never do any of this. They just ship and hope.

---

## What's Next?

- [PRIMER.md](PRIMER.md) — Understand the concepts deeply
- [GOVERNANCE.md](GOVERNANCE.md) — Full process details
- [Agile extension](../extensions/agile/README.md) — If your team uses sprints
- [EXAMPLE.md](EXAMPLE.md) — A complete worked example

---

## FAQ (Plain Answers)

### "What if my guess was wrong?"

**That's good.** Seriously. You learned something real. Log it. Move on with new knowledge.

### "What if I don't know the 'before' number?"

Run a **🔍 Discovery** first. Spend an hour measuring where things are now. Then make your guess.

### "What if this feels like too much process?"

It's one extra form before you code. The rest is just writing down what you're already thinking. Try it once—if it's not useful, drop it.

### "Can I change the templates?"

Yes. Make them yours. Just don't delete the pre-registration step—that's the one thing that keeps the whole system honest.

Yes. Fork and adapt. The methodology matters more than the format.
