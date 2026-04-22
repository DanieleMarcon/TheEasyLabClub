# system.md — The EasyLab Club

## 1. Purpose

This file defines the global operating rules of the project.

It is the highest authority in the repository.

All AI tools, agents, adapters and workflows must follow this file before using any other project document.

---

## 2. Source Hierarchy

All decisions must follow this order of authority:

1. `system.md`
2. `/docs/00-project-overview.md`
3. `/docs/01-strategy.md`
4. `/docs/02-site-architecture.md`
5. `/docs/03-content.md`
6. `/docs/04-ui-audit.md`
7. `/docs/05-design-system.md`
8. `/docs/06-components.md`
9. `/docs/07-rules.md`
10. `/docs/08-seo-geo-aeo.md`
11. `/docs/09-accessibility-gdpr.md`
12. `/docs/10-tech-architecture.md`
13. `/docs/11-roadmap.md`
14. `/references/ui/stitch-clean/`
15. tool-specific adapters (`claude.md`, `agents.md`, future adapters)

---

## 3. Rule of Precedence

If a conflict exists:

- `system.md` overrides everything
- `/docs` override UI references
- UI references override AI assumptions
- adapters must never override the documented project rules

AI must never replace documented decisions with assumptions.

---

## 4. Project Identity

The EasyLab Club is an operational learning system designed to improve how people and teams work.

It is not:
- a generic e-learning platform
- an open community
- a random course marketplace

It is:
- a structured environment
- a modular learning system
- a practical improvement model

---

## 5. Strategic Structure

The product must always preserve this distinction:

### Programs
- for teams
- structured transformation paths
- consultation-based
- no direct purchase flow in V1

### Lab
- for individuals
- modular
- direct product logic
- fixed pricing

### Network
- continuity layer
- secondary and aspirational
- not a social platform

Programs and Lab must never be mixed in copy, CTA logic, pricing logic or page purpose.

---

## 6. Build Principle

Users see simplicity.  
The system handles complexity.

All outputs must respect this principle.

This means:
- simple navigation
- clear section purpose
- limited choices
- no unnecessary conceptual layering in UI

---

## 7. Documentation Usage Rules

AI must use the documentation as a system, not as disconnected notes.

Use the docs in this order:

1. understand the project
2. understand the strategy
3. understand the page architecture
4. understand the content
5. filter UI references through the audit
6. apply the design system
7. assemble components
8. obey rules and constraints
9. respect SEO, accessibility, tech and roadmap constraints

---

## 8. UI Reference Rules

`/references/ui/stitch-clean/` contains approved visual references.

These references are:
- structural guides
- layout references
- inspiration for composition

They are NOT:
- final branding truth
- final copy
- final product logic

If a reference conflicts with `/docs`, the `/docs` win.

---

## 9. Design System Authority

Visual decisions must be derived from:

- `05-design-system.md`
- `06-components.md`
- `07-rules.md`

AI must not invent new visual languages, stylistic directions or page patterns outside those constraints.

---

## 10. AI Behavior Rules

AI must:
- build modularly
- follow documentation strictly
- reuse components
- keep naming consistent
- prioritize clarity over originality

AI must not:
- invent missing features
- change navigation
- introduce new sections without justification
- alter the Programs / Lab distinction
- create brand drift from aesthetic prompts
- turn Network into a full social/community product

If something is undefined:
- pause
- ask
- or leave it unimplemented

Do not assume.

---

## 11. Naming Rules

Allowed naming:

- The EasyLab Club
- Programs
- Programs for Teams
- Lab
- Lab Modules
- Network

Avoid alternate naming such as:
- courses
- academy
- community
- for teams (as separate primary nav item)
- curriculum (unless explicitly scoped later)

---

## 12. Navigation Authority

Primary navigation is fixed:

- Home
- Programs
- Lab
- Network
- About
- Login

No additional primary items are allowed unless the architecture documents are updated first.

---

## 13. Content Rules

Copy must be:
- clear
- direct
- concrete
- modern
- non-corporate

Copy must not be:
- abstract
- buzzword-heavy
- too startup-like
- too luxury/editorial
- too aggressive/performance-cult

---

## 14. Technical Rules

V1 is:
- frontend-first
- static or semi-static
- no real backend
- no real checkout
- no account system

But the structure must stay ready for:
- payments
- user accounts
- dynamic content
- multilingual expansion
- chatbot / lead generation additions

---

## 15. Compliance Rules

All outputs must be compatible with:
- SEO / GEO / AEO rules
- accessibility rules
- GDPR principles
- future security requirements

No design or content choice should block compliance.

---

## 16. Roadmap Discipline

V1 must stay focused.

Do not introduce V2 or V3 features into V1 unless explicitly approved.

Execution over feature accumulation.

---

## 17. Final Rule

If something reduces clarity, increases drift, or creates ambiguity:

→ remove it  
→ simplify it  
→ or leave it out

## 18. System Layer

The project uses a system-first architecture.

Core file:

* `/system/system.md` → highest authority

Adapters:

* `/system/claude.md`
* `/system/agents.md`

All tools must follow:

system.md → docs → UI references → adapters

Adapters do not define rules.
They only execute them.
