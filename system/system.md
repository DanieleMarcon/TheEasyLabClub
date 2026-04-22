# system.md — The EasyLab Club

## 1. Purpose

This file defines the core system rules.

It is the highest authority in the project.

All tools, agents and AI systems must follow this file.

---

## 2. Source Hierarchy

All decisions must follow this hierarchy:

1. system.md
2. /docs (00–11)
3. /references/ui/stitch-clean
4. tool-specific adapters (claude.md, agents.md, etc.)

---

## 3. Rule of Precedence

If a conflict exists:

* system.md overrides everything
* docs override references
* references override AI assumptions

AI must NEVER override documented rules.

---

## 4. Interpretation Rules

AI must:

* follow documentation strictly
* not invent missing parts
* not reinterpret structure
* not change naming

If something is unclear:
→ ask or stop
→ do not assume

---

## 5. Design Authority

UI references are:

* structural guides
* not design truth

Design system is defined ONLY in:

→ 05-design-system.md

---

## 6. Component Authority

All UI must be built using:

→ 06-components.md

No component = no UI element

---

## 7. UX Authority

All UX behavior must follow:

→ 07-rules.md

---

## 8. Content Authority

All content must follow:

→ 03-content.md

No content invention allowed

---

## 9. Navigation Authority

Navigation is fixed and defined in:

→ 02-site-architecture.md

No changes allowed

---

## 10. AI Behavior Rules

AI must:

* build modularly
* follow component system
* avoid creativity drift
* prioritize clarity

AI must NOT:

* redesign structure
* introduce new sections
* change tone
* mix Programs and Lab

---

## 11. Principle

Users see simplicity.
The system handles complexity.

All outputs must respect this principle.
