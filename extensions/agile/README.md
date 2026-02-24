# Agile Extension

Optional templates for teams using Scrum, Kanban, or similar Agile methodologies.

---

## What's Included

| Template | Replaces Core | Adds |
|----------|---------------|------|
| EPIC | Experiment | INVEST criteria, JTBD format |
| SLICE | Work Item | Time estimates, parent tracing |
| SPIKE | Discovery | Timeboxing, output requirements |

---

## Installation

Copy the templates from this directory to your repo's `.github/ISSUE_TEMPLATE/`:

```bash
cp extensions/agile/ISSUE_TEMPLATE/*.yml .github/ISSUE_TEMPLATE/
```

---

## EPIC vs Experiment

| Core: Experiment | Agile: EPIC |
|------------------|-------------|
| Generic hypothesis test | Agile-flavored with INVEST |
| Any team structure | Sprint/iteration-based |
| Minimal fields | Full JTBD, acceptance criteria |

## SLICE vs Work Item

| Core: Work Item | Agile: SLICE |
|-----------------|--------------|
| Generic deliverable | Time-estimated (<8h) |
| Links to experiment | Links to EPIC |
| Flexible | INVEST-enforced |

## SPIKE vs Discovery

| Core: Discovery | Agile: SPIKE |
|-----------------|--------------|
| Generic research | Timeboxed strictly |
| Output: recommendation | Output: clear next steps |
| Flexible | Defined completion criteria |

---

## INVEST Criteria

EPICs and SLICEs use INVEST:

| Letter | Criterion | Meaning |
|--------|-----------|---------|
| **I** | Independent | Ships without external dependencies |
| **N** | Negotiable | Scope is flexible within bounds |
| **V** | Valuable | Delivers user-facing value |
| **E** | Estimable | Can be time-boxed |
| **S** | Small | Fits in sprint/iteration |
| **T** | Testable | Has clear acceptance criteria |

---

## When to Use This Extension

✅ **Use if:**
- Your team does sprints/iterations
- You estimate in story points or hours
- You use EPIC/Story terminology
- You want velocity tracking

❌ **Skip if:**
- You're research-focused (no sprints)
- You prefer minimal process
- Your team doesn't use Agile terms
- You want to start simple

---

## Combining with Core

You can use both:
- Core templates for research/discovery
- Agile templates for delivery

The pre-registration and decision logging flows work the same either way.
