# Signal & Saw website

Static website prepared for GitHub Pages.

## Domain
The included `CNAME` file is already set to:

`signalandsaw.agurenbalkov.com`

## Contact email
All contact links and the form currently use:

`signalandsaw@agurenbalkov.com`

The contact form does not require a backend. It opens the visitor's default mail app with the form details pre-filled.

## Deploy to GitHub Pages
1. Create a new GitHub repository (for example `signal-and-saw`).
2. Upload **the contents of this folder** to the repository root. `index.html` should be at the root, not inside another folder.
3. In GitHub: **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**.
5. Choose your main branch and `/ (root)`.
6. Save.
7. In your DNS provider for `agurenbalkov.com`, create the subdomain record GitHub Pages requires. Typical setup:
   - Type: `CNAME`
   - Host/Name: `signalandsaw`
   - Target: `<your-github-username>.github.io`
8. In GitHub Pages settings, set the custom domain to `signalandsaw.agurenbalkov.com` if GitHub has not already read it from the included CNAME file.
9. Once DNS verifies, enable **Enforce HTTPS**.

## Important files
- `index.html` — all page content
- `styles.css` — design / colors / layout
- `script.js` — mobile navigation + email-form behavior
- `CNAME` — GitHub Pages custom-domain configuration
- `assets/` — Signal & Saw logo, social preview and service icons

## Easy edits
### Change the email
Search all files for:
`signalandsaw@agurenbalkov.com`

### Change service area
Search `index.html` for:
`Covina`

### Change pricing
Search `index.html` for:
`COMMON STARTING POINTS`

### Remove pricing
Delete the entire `<section class="section pricing-section" ...>` block from `index.html`.

## Future upgrades
When you have real project photos, add a portfolio / before-and-after section. Real work photos will make the biggest visual improvement to the next version of the site.


## v2 content updates
- Personalized owner story (Aguren)
- Changed brand voice from “we” to owner-operated “I” where appropriate
- Expanded service-area language for Covina, West Covina, Glendora, San Dimas, Azusa and nearby SGV
- Changed $25 custom-solution price card to “Get a quote”
- Added direct-email fallback beneath the contact form
- Added local business hours/service areas to structured data
- Added `project-gallery-snippet.html` and `/assets/projects/` so genuine project photos can be added without redesigning the site

The project gallery is intentionally not visible until real project photos are available.
