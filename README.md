# DEK Cleaning Services — website concept, revision 2

An editorial redesign using the existing DEK logo and palette (#062E51 navy, #0C6DB2 blue, #FFFFFF white, #F2F5F7 off-white), Montserrat headings, and Inter body text.

## Design

Large, unembellished type; one real interior photograph; open service rows; a family-owned company story; and a short quote form. No decorative icon set, statistics, badges, gradients, card grids, stock cleaning graphics, or scroll reveals. Licensing, bond, insurance, and experience claims have been removed from the concept pending verification.

## Open and edit

Open `dist/index.html` in a browser. No build or installation is required. Google Fonts need an internet connection; system-font fallbacks work offline.

- `dist/index.html`: page content and form
- `dist/assets/styles.css`: brand and responsive design
- `dist/assets/site.js`: mobile menu, service selection, prototype form
- `dist/assets/dek-logo.png`: existing provisional raster logo
- `dist/assets/interior.jpg`: illustrative stock photo, not a DEK project
- `dist/thank-you.html`: Netlify submission destination
- `netlify.toml`: publish directory and response headers
- `ASSET_CREDITS.md`: photo provenance and license

## Form behavior

The concept is in preview mode (`data-prototype="true"`). It validates required fields and demonstrates a confirmation state. Nothing is transmitted, saved, or sent to Laura. Reset and service links allow another preview. Phone and email links open the visitor's own calling or email app.

The form remains disabled if JavaScript is unavailable, preventing an accidental native POST during review. A direct call/email alternative is provided.

## Netlify handoff

Upload this source to GitHub and import the repository in Netlify. The publish directory is `dist`; leave the build command blank. For manual Netlify Drop, upload the `dist` folder.

Before accepting real leads:

1. Approve service descriptions, process, contact details, and coverage with Laura. No location or response-time promise has been invented.
2. Supply the final logo and approve the photo or replace it with a licensed company photograph.
3. Complete privacy language for the actual data collection and providers.
4. Enable Netlify Forms detection; set notification delivery to the owner-approved address. The field named `email` supports a reply-to address.
5. Change `data-prototype="true"` to `data-prototype="false"` only on the Netlify deployment. Remove the concept footer and `noindex, nofollow` from the homepage when public indexing is intended.
6. Submit a test on the live Netlify domain. Confirm detection, message storage, email delivery, reply-to behavior, spam handling, and the thank-you destination. Test required fields and mobile navigation.

Netlify Forms is a hosting feature; merely opening these files, using GitHub Pages, or hosting the concept on Sites does not activate it. No production form connection has been claimed or made.

## Known review items

Company facts are based on the supplied flyer. Service area, hours, timing, detailed inclusions, and final business policies remain to be confirmed. Photography is illustrative, not a testimonial or example of completed DEK work. No invented reviews, projects, or credentials appear on the page.

The live concept remains private. The ZIP can be opened locally and used for the final GitHub/Netlify handoff.
