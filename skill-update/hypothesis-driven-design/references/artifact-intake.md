# Artifact Intake

Intake is the entry point for HDD analysis. Every source artifact gets logged before hypotheses
are extracted. This creates the traceability chain from artifact to evidence.

---

## When to Use Intake

Use intake whenever a source artifact arrives:
- PRD (Product Requirements Document)
- Strategy deck (PPTX/PDF)
- Brief or strategy doc
- Research report
- Journey map or persona set
- Competitive analysis
- User story collection
- Roadmap

If someone hands you an artifact and says "let's build this" — that triggers intake.

---

## The Intake Flow

```
1. RECEIVE ARTIFACT      → Log it with INK-XXX ID
2. RUN HDD PHASES 1–4    → Narrative Challenge → Assumption Extraction → Confidence Ranking → Hypothesis Generation
3. PRE-REGISTER          → Create PRE-XXX for each extracted hypothesis
4. CLOSE INTAKE          → Update INK-XXX with generated hypotheses
```

The trace becomes:
```
INK-001 (artifact) → PRE-001, PRE-002 (hypotheses) → EXP-001 (experiment) → Evidence
```

---

## GitHub Integration

The kit provides a `📥 Artifact Intake` issue template and workflow:

**Creating an intake:**
1. Go to Issues → New Issue → 📥 Artifact Intake
2. Fill in artifact type, source reference, author, danger level
3. Paste artifact content or summary
4. Submit — workflow assigns `INK-XXX` ID and logs to `evidence-packet/intake_log.csv`

**After intake is created:**
1. Run HDD Phase 1 — update "Narrative Risk Register" section
2. Run HDD Phase 2 — update "Extracted Assumptions" section
3. Run HDD Phases 3–4 — generate hypotheses
4. For each hypothesis, create a `🔬 Pre-register Hypothesis` issue
5. Update "Generated Hypotheses" section with PRE-XXX references
6. Close the intake issue

---

## Intake Record Format

The skill can generate an intake record directly. Use this when not working in GitHub:

```markdown
---
intake_id: INK-XXX
intake_at: YYYY-MM-DD
artifact_type: [PRD | Strategy Deck | Brief | Research Report | Journey Map | Persona | Competitive Analysis | User Stories | Roadmap | Other]
source_reference: [URL or description]
author: [who created the artifact]
danger_level: [CRITICAL | HIGH | MEDIUM-HIGH | MEDIUM | LOW]
status: pending | analyzed | closed
---

## Artifact Summary

[Brief description of what the artifact contains and claims]

## Narrative Risk Register (Phase 1)

| Narrative | Load-Bearing | Provenance | Risk |
|-----------|--------------|------------|------|
| [quoted claim] | Yes/No | [source or NONE] | HIGH/MEDIUM/LOW |

## Extracted Assumptions (Phase 2)

| Assumption | Source Section | Validated |
|------------|---------------|-----------|
| [statement] | [section name] | Yes/No/Partially |

## Confidence Ranking (Phase 3)

| Assumption | Consequence if False | Rank |
|------------|---------------------|------|
| [statement] | [impact description] | CRITICAL/SIGNIFICANT/MANAGEABLE |

## Generated Hypotheses (Phase 4)

| # | Hypothesis | Pre-registration |
|---|-----------|-----------------|
| 1 | We believe [outcome] is achievable if [situation] can get [motivation]. | PRE-XXX |

## Strategic Gaps (Abductive Inquiry)

- [What's missing from this artifact that a complete version would include]
```

---

## Danger Level Quick Reference

| Artifact Type | Danger Level | Why |
|--------------|--------------|-----|
| Strategy deck | CRITICAL | Persuasion structure designed to make conclusions feel like findings |
| Journey map | HIGH | Narrative arc presented as research; no stopping condition possible |
| Persona | HIGH | Unfalsifiable by design; functions as identity, not hypothesis |
| Competitive analysis | HIGH | Selection bias makes this a brief for a conclusion already reached |
| Brief / strategy doc | HIGH | Usually a narrative vehicle for a decision already made |
| PRD | MEDIUM-HIGH | Has structure for rigor but rarely exercises it |
| User stories | MEDIUM | Hidden assumption about the benefit; rarely tested |
| A/B test spec | LOW | Signal and stopping condition built in |

---

## Output Contract

Every intake must result in one of:
1. **Hypotheses extracted** — at least one PRE-XXX created
2. **No-go decision** — documented reason why artifact doesn't warrant hypothesis work
3. **Research needed** — Discovery issue created to gather missing information

An intake that sits open without output is a stalled process. Flag and escalate.

---

## Required CSV Logging

Every intake MUST be logged to `evidence-packet/intake_log.csv`. This is not optional.

**Required fields:**

| Field | Description |
|-------|-------------|
| `intake_id` | INK-XXX (sequential) |
| `intake_at` | ISO timestamp |
| `artifact_type` | PRD, Strategy Deck, Brief, etc. |
| `source_reference` | URL or description of where artifact lives |
| `author` | Who created the artifact |
| `danger_level` | CRITICAL / HIGH / MEDIUM-HIGH / MEDIUM / LOW |
| `narrative_count_high` | Count of HIGH-risk narratives from Phase 1 |
| `assumption_count_critical` | Count of CRITICAL assumptions from Phase 3 |
| `hypotheses_generated` | Comma-separated PRE-XXX references |
| `status` | pending / analyzed / closed |
| `analysis_completed_at` | ISO timestamp when analysis finished |

**Why this matters:**

CSV logging creates the audit trail. Without it:
- You can't trace hypotheses back to their source artifacts
- You can't measure skill effectiveness (how many narratives flagged? how many hypotheses generated?)
- You can't identify patterns across intakes (which artifact types produce the most HIGH-risk narratives?)

The workflow automates initial logging. Phase 1–4 outputs update the record. Close the intake when hypotheses are pre-registered.

An intake that sits open without output is a stalled process. Flag and escalate.

---

## PII Handling

Evidence logs are often public or shared. Protect personally identifiable information.

**Rule:** Never use real names in evidence logs. Use role-based pseudonyms.

**Pseudonym convention:**

| Code | Role |
|------|------|
| `[DL-001]` | Design Leader |
| `[PM-001]` | Product Manager |
| `[ENG-001]` | Engineer |
| `[RES-001]` | Researcher |
| `[EXEC-001]` | Executive |
| `[ORG-001]` | External Organization |
| `[CLIENT-001]` | Client |

Increment the number for additional individuals in the same role: `[PM-001]`, `[PM-002]`, etc.

**What to redact:**
- Full names → pseudonym
- Email addresses → `[email-redacted]`
- Phone numbers → `[phone-redacted]`
- Addresses → `[address-redacted]`
- Organization names (if sensitive) → `[ORG-XXX]`
- File names containing names → `Speaker_Notes_[DL-001].docx`

**What to keep:**
- Role descriptions ("the product manager", "an engineer")
- Company names if public and non-sensitive
- Project names if internal-only repository

**Private mapping:** If you need to trace pseudonyms back to real identities, maintain a separate private mapping file that is NOT checked into the repository.

**Artifact sequencing note:** When artifacts reference individuals by name (e.g., "outreach to [DL-001]"), apply the same pseudonym consistently across linked artifacts (INK-002 and INK-003 should use the same codes).
