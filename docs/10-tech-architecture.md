# 10-tech-architecture.md — The EasyLab Club

## 1. Purpose

Define the technical structure of the project.

This includes:

* data model
* page structure
* future integrations

The goal is to build a scalable system without over-engineering V1.

---

## 2. Architecture Approach

V1 is:

* frontend-first
* static or semi-static
* no complex backend

BUT:

The system must be ready for:

* payments
* user accounts
* content expansion

---

## 3. Core Entities

The system is built around these entities:

### Programs

* id
* name
* description
* target (teams)
* outcomes

---

### Lab Modules

* id
* title
* description
* price
* category
* level

---

### Users (Future)

* id
* name
* email
* company
* role

---

### Orders (Future)

* id
* user_id
* product_id
* type (lab/program)
* status

---

## 4. Page Structure

### Static Pages (V1)

* Home
* Programs
* Lab
* Network
* About

---

### Dynamic Pages (Future)

* Lab module detail
* User dashboard
* Checkout

---

## 5. Routing Structure

Example:

* /
* /programs
* /lab
* /lab/[module]
* /network
* /about

---

## 6. Content Structure

Content must be separated from UI:

* data stored in structured format
* components render content

No hardcoded content in UI logic.

---

## 7. Payments (Future)

Prepare for:

* Stripe
* PayPal
* Revolut

V1:

* no real checkout
* placeholder or external link

---

## 8. User System (Future)

Prepare for:

* login
* access control
* content unlocking

V1:

* no authentication
* no user dashboard

---

## 9. Backend (Future)

Will handle:

* users
* orders
* payments
* access rules

Must be:

* modular
* scalable
* API-based

---

## 10. CMS / Content Handling

Future options:

* headless CMS
* structured files
* database

V1:

* static content
* markdown or JSON

---

## 11. Performance

Must ensure:

* fast load time
* optimized assets
* minimal dependencies

---

## 12. SEO / Rendering

Prefer:

* server-side rendering OR static generation

Avoid:

* client-only rendering for core pages

---

## 13. Security (Baseline)

* HTTPS
* input validation
* no exposed keys

---

## 14. Multi-language (Future)

Prepare structure for:

* /en
* /it

Content must be:

* separable
* translatable

---

## 15. Integration Readiness

Prepare for:

* CRM
* email tools
* analytics

---

## 16. Critical Rule

Do not overbuild V1.

But:

Never build something that blocks future expansion.
