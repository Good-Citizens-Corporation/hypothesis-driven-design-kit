# Digital Strategy Deck Intake

Digital strategy decks are the highest-risk narrative artifact in the HDD intake pipeline.

They are not research outputs. They are **persuasion structures** — architecturally designed to
make conclusions feel like findings before the reader reaches the recommendation slide.
The format itself is the threat. Challenge the structure before challenging the content.

---

## Extracting Content from a PPTX File

Before applying HDD analysis, extract the deck's text content:

```bash
python -m markitdown presentation.pptx
```

This outputs all text, speaker notes, and slide titles in sequence. Speaker notes are high-value —
they often contain the claims the presenter knows are soft, stated more candidly than the slide copy.

If the deck is uploaded as a file, check `/mnt/user-data/uploads/` for the path.

---

## The Anatomy of a Digital Strategy Deck

Every section below has a structural role in the persuasion sequence. Identify which slides
map to which section before running Phase 1 narrative challenge.

| Section | What it claims to be | What it actually is |
|---|---|---|
| Executive Summary | A neutral overview | The conclusion, stated before the evidence |
| Market Context / Trends | Research-based situational analysis | Cherry-picked data points scaled to imply urgency |
| Audience Insights | User research findings | Persona assertions with sample sizes omitted |
| Competitive Landscape | Objective market mapping | A frame that makes the client look like they're losing |
| "The Opportunity" | A discovered gap | The recommendation, re-labeled as an observation |
| Strategic Pillars | A framework | Three to five abstract nouns that cannot be falsified |
| Roadmap | A plan | A delivery commitment with no validation milestones |
| Success Metrics | KPIs | Lagging indicators with no baseline and no stopping condition |

---

## Deck-Specific Narrative Patterns

These patterns appear in digital strategy decks at higher density than in any other artifact type.
Flag every instance in the Narrative Risk Register.

### The Scale Laundering Slide
**Pattern:** A large, round number — "3.2 billion users," "$4.7 trillion market" — presented without
a methodology footnote, used to justify why a category is important.
**Why it's a narrative:** Scale of a market does not imply accessible opportunity. The number is
real; the implication is fabricated.
**Challenge:** *What fraction of this market is addressable by this product, with what acquisition
mechanism, at what cost?*

### The Trend-as-Mandate Slide
**Pattern:** "AI is transforming [industry]." "Gen Z expects [behavior]." "The future of [X] is [Y]."
**Why it's a narrative:** Trend existence does not mandate a specific response. The strategic choice
is hidden inside the presentation of the trend as inevitable.
**Challenge:** *What happens to this strategy if the trend slows, reverses, or doesn't apply to
this audience at this price point?*

### The Insight That Is Actually a Recommendation
**Pattern:** A slide labeled "Insight" or "What we heard" that reads: "Users want a more seamless
experience" or "Customers expect personalization at scale."
**Why it's a narrative:** "Seamless" and "personalization" are not insights. They are solution
directions dressed as user verbatims. An insight has a source, a sample, and a specific behavior.
**Challenge:** *Who said this? How many? In what context? What specific friction did they describe?*

### The Three-Pillar Framework
**Pattern:** A strategy summarized as three abstract nouns on a slide — "Connect. Engage. Convert."
or "Awareness. Consideration. Action." — often with a Venn diagram or pyramid.
**Why it's a narrative:** Abstract frameworks cannot be falsified. There is no world in which
"Connect. Engage. Convert." could be proven wrong. It is a narrative containment structure.
**Challenge:** *What would it look like if this framework failed? What signal would indicate
that "Connect" is not working?*

### The Consensus Slide
**Pattern:** "Stakeholders aligned on the importance of [X]." "Workshop participants identified [Y]
as a top priority."
**Why it's a narrative:** Stakeholder agreement is not market validation. Workshops produce
prioritized opinions, not evidence. The loudest voice in the room becomes the strategy.
**Challenge:** *Who was in the room? Who wasn't? What would a dissenting user say?*

### The Roadmap Without Decision Gates
**Pattern:** A timeline of deliverables — Q1, Q2, Q3 — with no mention of what will be evaluated
at each stage or what would cause a change in direction.
**Why it's a narrative:** A roadmap without decision gates is a delivery plan for a conclusion
already reached. It cannot be falsified because there is no point at which the plan could be abandoned.
**Challenge:** *What would have to be true at the end of Q1 to proceed to Q2? What would cause a pivot?*

### The Metric Without a Baseline
**Pattern:** "Increase brand awareness by 20%." "Drive 30% improvement in engagement."
**Why it's a narrative:** A percentage improvement with no stated baseline is not a measurable goal.
It is a number shaped like accountability.
**Challenge:** *What is the current baseline? How is it measured? What instrument will track the delta?*

---

## Deck Intake Protocol

Run this before applying Phase 1–4 from SKILL.md.

**Step 1: Map the persuasion structure**
Label each slide section using the anatomy table above. Identify which slide is doing the job of
"The Opportunity" — this is almost always where the load-bearing narrative lives.

**Step 2: Isolate the recommendation**
Find the recommendation slide(s). Work backwards. Every slide before it is either:
- Evidence supporting the recommendation (check for provenance), or
- Narrative priming the reader to accept the recommendation (flag as HIGH risk)

**Step 3: Check for what's absent**
The most important content in a digital strategy deck is often what's missing:
- Is there a slide showing what *didn't* work? (If no, selection bias is active)
- Is there a slide with a dissenting view or counter-hypothesis? (If no, the analysis is advocacy)
- Is there a slide with sample sizes, methodologies, or data sources? (If no, "insights" are opinions)
- Is there any mention of what would cause the strategy to change? (If no, it has no stopping condition)

**Step 4: Generate the Narrative Risk Register**
Apply Phase 1 from SKILL.md using the deck-specific patterns above as detection guidance.
Every load-bearing narrative in the deck gets a risk entry.

**Step 5: Route to output**
After Phase 1–4:
- If the deck is being used as a strategy foundation → treat like a PRD, use `prd-rewrite.md`
- If the deck is being converted into a delivery plan → use `agile-output.md`
- If the deck is being used to justify a research plan → use `vv-preregistration.md`

---

## The Consultant's Incentive Problem

Digital strategy decks have a structural incentive problem that is worth naming explicitly,
because it shapes everything about how they're written.

The consultant is paid to deliver a strategy. A strategy that says "we don't know yet — here are
the hypotheses we should test" does not feel like strategy to the buyer. It feels like an incomplete
deliverable. So the deck is written to perform certainty, not to model uncertainty.

This is not a character failure. It is an incentive structure. The deck format rewards narrative
confidence and punishes epistemic honesty.

HDD intake does not blame the consultant. It corrects the artifact.
When flagging narratives, frame it as: *"This claim is load-bearing and currently unsupported.
Here is what would make it a testable hypothesis instead."*

Not: *"This is wrong."*
But: *"This isn't structured to be provable yet."*
