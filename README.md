# DEK Cleaning Services Website Concept v1

This is a responsive, one-page visual concept for DEK Cleaning Services LLC. It uses the provisional DEK logo, the approved working palette, Montserrat headings, and Inter body copy.

## Site structure

1. Header with services, company, process, phone, and quote links
2. Outcome-focused hero with phone and quote calls to action
3. Four core service categories
4. Family-owned story, experience claim, and credential area
5. Three-step customer process
6. Quote form and direct contact information
7. Footer

## Files

- `dist/index.html` — page structure and copy
- `dist/assets/styles.css` — brand styling and responsive layouts
- `dist/assets/site.js` — navigation, prototype form response, and subtle motion
- `dist/assets/dek-logo.png` — provisional logo extracted from the supplied flyer
- `dist/assets/dek-source-flyer.png` — supplied source artwork used for the hero visual

## Review before public launch

- Confirm service area, hours, and expected response time.
- Verify the 15+ years, licensed, bonded, and insured claims.
- Replace the flyer-derived hero visual with an approved project or team photo.
- Approve the company story and service descriptions.
- Add testimonials only with written permission.
- Confirm the final lead-routing email and phone number.
- Add approved privacy policy language and connect analytics/search tools.
- Replace the provisional logo with the original vector logo when supplied.

## Netlify form handoff

The quote form already includes Netlify Forms markup. It is currently in prototype mode so reviewers can test the confirmation state without sending data.

Before the production Netlify deployment:

1. Change `<body data-prototype="true">` to `<body data-prototype="false">` in `dist/index.html`.
2. Deploy the `dist` folder or connect this project through GitHub with `dist` as the publish directory and no build command.
3. In Netlify, enable form detection and set the quote form notification address.
4. Submit a real test request and confirm delivery, spam filtering, reply-to behavior, and dashboard storage.

## Status

This version is a client-review concept, not launch-approved production content.
