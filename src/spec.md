# Specification

## Summary
**Goal:** Show two phone numbers consistently across all homepage contact areas and keep call-to-action phone links working.

**Planned changes:**
- Update the central contact configuration (`frontend/src/config/contact.ts`) to store both phone numbers in a structured form, including exact display strings and correct `tel:` links (`tel:+917734920728`, `tel:+917297963005`).
- Update homepage sections that currently render a single phone number (top bar, footer contact area, contact section contact-info block) to render both numbers as clickable `tel:` links.
- Ensure existing call-to-action elements that trigger a phone call (e.g., “Call Now” in header/navigation and contact section) still work deterministically by linking to the primary/first number.

**User-visible outcome:** Visitors see two clickable phone numbers across the homepage contact sections, and “Call Now” actions continue to place a call successfully (using the primary number).
