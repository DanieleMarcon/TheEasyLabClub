# The EasyLab Club — Website Project

## Overview

This repository contains the structure, documentation and assets for building the EasyLab Club website.

The project follows a **system-first, AI-driven workflow**, where structured documentation is the source of truth and tools like Bolt generate the implementation.

---

## AI Entry Point (Critical)

Before doing anything, AI tools must:

1. Read `/system/system.md`
2. Follow `/docs` in order (00 → 11)
3. Use `/references/ui/stitch-clean/` as UI reference

If files are not immediately visible:
→ explore the project structure
→ do NOT assume missing documentation

This is a **documentation-driven system**.
All required files exist inside this repository.

---

## System Architecture

The project is structured as a layered system:

* `/system` → core rules (highest authority)
* `/docs` → project definition
* `/references` → UI and copy references
* `/content` → structured content
* `/src` → generated code

### Hierarchy

system → docs → references → adapters

Adapters (`claude.md`, `agents.md`) do NOT define rules.
They only execute them.

---

## Repository Structure

```text
.
├── content
│   ├── labs
│   ├── pages
│   └── programs
│
├── docs
│   ├── 00-project-overview.md
│   ├── 01-strategy.md
│   ├── 02-site-architecture.md
│   ├── 03-content.md
│   ├── 04-ui-audit.md
│   ├── 05-design-system.md
│   ├── 06-components.md
│   ├── 07-rules.md
│   ├── 08-seo-geo-aeo.md
│   ├── 09-accessibility-gdpr.md
│   ├── 10-tech-architecture.md
│   └── 11-roadmap.md
│
├── public
│   └── assets
│
├── references
│   ├── copy
│   └── ui
│       ├── stitch-clean
│       └── stitch-raw
│
├── src
│
├── system
│   ├── system.md
│   ├── claude.md
│   └── agents.md
│
└── README.md
```

---

## Core Documentation

All project logic is defined in `/docs`.

### Key Files

* `02-site-architecture.md` → page structure
* `03-content.md` → content definitions
* `05-design-system.md` → visual system
* `06-components.md` → UI components
* `07-rules.md` → UX and behavior rules

These files drive all AI-generated output.

---

## UI References

Approved UI references are in:

```text
/references/ui/stitch-clean/
```

These are:

* layout guides
* structural references

They are NOT:

* final design truth
* final content
* final product logic

---

## Workflow

1. Define strategy and content (`/docs`)
2. Create UI references (Stitch)
3. Audit and filter UI (`04-ui-audit.md`)
4. Generate UI using Bolt
5. Iterate modularly

---

## Principles

* clarity over complexity
* structure over decoration
* real content over placeholders
* modular system
* minimal token usage
* documentation-driven development

---

## Status

Phase: **System Ready (Docs + UI + Architecture)**
Next Step: **Build (Bolt)**

---

## Notes

The EasyLab Club is part of a broader ecosystem:

* Lavoro Sporco → consulting
* Idola → AI & automation
* Meraviglia → marketing

This project focuses on:
→ **operational learning and improvement**
