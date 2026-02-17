# Specification

## Summary
**Goal:** Update site-wide contact details, business hours, and social links to match the provided King Kingdom business information.

**Planned changes:**
- Update the centralized frontend contact configuration (`frontend/src/config/contact.ts`) with the new address, email, WhatsApp number/link (wa.me using `917734920728`), business hours, and both phone numbers while keeping a primary phone for single-phone CTAs.
- Adjust contact-related UI areas (TopBar, Contact section, Footer) to display both phone numbers as clickable `tel:` links and show business hours with consistent English formatting, without breaking mobile layout.
- Set Facebook, Instagram, and YouTube links to the provided URLs, render them in an appropriate UI location (e.g., Footer), open in a new tab with `rel="noopener noreferrer"`, and include accessible aria-labels.
- Update backend contact details returned by `getContactDetails()` in `backend/main.mo` to match the new address, phones array, WhatsApp, email, and business hours.

**User-visible outcome:** Visitors see the correct address, email, WhatsApp link, business hours, and both phone numbers across the site and can click updated social links (Facebook/Instagram/YouTube) from the UI.
