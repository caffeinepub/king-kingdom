# Specification

## Summary
**Goal:** Add the newly uploaded logo to the site header branding and ensure it displays crisply and responsively alongside the existing brand text.

**Planned changes:**
- Create a clean, square, centered static logo asset derived from `download-1.webp` and place it under `frontend/public/assets/generated`.
- Update `frontend/src/components/king-kingdom/HeaderNav.tsx` to render the new logo next to the existing header brand text (“King Kingdom” and “Complete Construction Solutions”), keeping correct aspect ratio and alignment across breakpoints.

**User-visible outcome:** The sticky header shows the new King Kingdom logo next to the brand text on mobile and desktop without stretching/cropping, while navigation and existing CTAs continue to work as before.
