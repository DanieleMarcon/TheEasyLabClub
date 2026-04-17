# Design System Strategy: The Clinical Atelier

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Clinical Atelier."** 

We are moving away from the "disposable" aesthetic of modern SaaS startups and toward a feeling of permanent, quiet authority. This system balances the precision of a laboratory with the sophisticated layout of a high-end editorial journal. It is structured but never rigid; minimal but never empty. 

To achieve this, we rely on **intentional asymmetry** and **tonal depth**. Instead of centering everything, use generous, uneven white space to guide the eye. Overlap elements—such as a title slightly bleeding into a high-utility data card—to break the "boxed-in" feeling of standard web templates. The result should feel results-oriented, serious, and bespoke.

---

## 2. Colors & The Surface Logic
The palette is rooted in a sophisticated range of cool grays and deep charcoals, punctuated by a single professional accent: **Primary (#455f88)**.

### The "No-Line" Rule
Explicitly, **do not use 1px solid borders for sectioning.** Traditional borders clutter the interface and create a "grid-locked" appearance. Instead, define boundaries through:
*   **Background Shifts:** Use `surface-container-low` (#eff4f7) sections sitting on a `surface` (#f7fafc) background.
*   **Tonal Transitions:** A clean break between `surface` and `surface-container-highest` (#d7e5eb) provides all the structural integrity a modern layout needs without the visual noise of a line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers, like stacked sheets of fine, heavy-weight paper.
1.  **Base:** `surface` (#f7fafc)
2.  **Sections:** `surface-container-low` (#eff4f7)
3.  **Interactive Elements/Cards:** `surface-container-lowest` (#ffffff) to provide a "lifted" feel.
4.  **Floating Modals:** Use `surface-bright` (#f7fafc) with a backdrop blur.

### Signature Textures & Glass
To provide "soul," utilize **Glassmorphism** for navigation bars and floating action menus. Combine `surface` colors at 80% opacity with a `20px` backdrop-blur. 

For high-impact CTAs, avoid flat color. Use a subtle linear gradient from `primary` (#455f88) to `primary_dim` (#39537c) at a 135-degree angle. This adds a "milled" metallic quality that feels premium.

---

## 3. Typography
We use a dual-font system to balance approachability with clinical precision.

*   **The Authority (Manrope):** Reserved for `display` and `headline` scales. Manrope’s geometric but open structure conveys a results-oriented seriousness. Use `headline-lg` for impactful statements, ensuring letter-spacing is set to `-0.02em` for a tighter, more "editorial" feel.
*   **The Utility (Inter):** Used for `title`, `body`, and `label` scales. Inter is the workhorse of legibility. 
*   **Hierarchy as Navigation:** Contrast is your primary tool. Pair a `display-md` (Manrope) headline with a `body-sm` (Inter) description. The drastic jump in scale signals importance and creates a sophisticated, asymmetric rhythm on the page.

---

## 4. Elevation & Depth
In this design system, depth is organic, not artificial.

### The Layering Principle
Forget shadows for standard cards. Achieve elevation by placing a `surface-container-lowest` (#ffffff) element on a `surface-container` (#e7eff3) background. This creates a soft, natural "pop" that mimics real-world lighting.

### Ambient Shadows
When an element must "float" (like a dropdown or a modal), use an **Ambient Shadow**:
*   **Color:** Use a tinted version of `on-surface` at 6% opacity.
*   **Blur:** High diffusion (30px–50px).
*   **Offset:** Slight Y-offset (8px–12px).
This simulates soft overhead lighting rather than a harsh, artificial drop shadow.

### The "Ghost Border" Fallback
If a border is required for accessibility (e.g., in high-density data tables), use a **Ghost Border**. Apply `outline-variant` (#a7b4ba) at **15% opacity**. It should be felt rather than seen. Never use 100% opaque borders.

---

## 5. Components

### Buttons
*   **Primary:** A subtle gradient of `primary` to `primary_dim`. Roundedness: `md` (0.375rem). Text: `label-md` (Inter) in `on_primary` (#f6f7ff).
*   **Secondary:** No background, no border. Use `primary` text with a `surface-container-high` hover state.
*   **Tertiary:** `surface-container-lowest` background with a `Ghost Border`.

### Input Fields
*   **Structure:** Forgo the 4-sided box. Use a `surface-container-low` background with a 2px bottom-stroke of `outline` (#707d82). 
*   **Focus:** Transition the bottom-stroke to `primary` (#455f88). This maintains a "minimalist lab" aesthetic.

### Cards & Lists
*   **The Divider Ban:** Strictly forbid the use of horizontal divider lines between list items or card sections. Use **vertical white space** (e.g., 24px or 32px) or a subtle change in background color (`surface-container-low` vs `surface-container-high`) to separate content.
*   **Asymmetric Cards:** Experiment with placing the image or key metric "breaking the bounds" of the card container to create a custom, high-end feel.

### Analytical Chips
*   Use `secondary_container` (#d4e4fc) with `on_secondary_container` (#445367) text. Keep corners at `full` (9999px) for a soft, approachable counter-balance to the structured grid.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use extreme scale differences between headlines and body text.
*   **Do** leverage "The Ghost Border" only when tonal shifts aren't enough.
*   **Do** use `surface_container_highest` for "active" states in navigation.
*   **Do** allow elements to overlap slightly to create a layered, editorial depth.

### Don't:
*   **Don't** use 1px solid, opaque borders (ever).
*   **Don't** use standard "drop shadows" with high-opacity blacks.
*   **Don't** use corporate-blue. Use our specific `primary` (#455f88) which has a sophisticated slate undertone.
*   **Don't** center-align long blocks of text. Stick to a structured, left-aligned "Clinical" grid.
*   **Don't** use icons as purely decorative elements; they must always serve a functional purpose in the hierarchy.