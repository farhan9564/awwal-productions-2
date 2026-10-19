# Awwal Productions — International Agency Portfolio V6

Responsive, multi-page static website for Awwal Productions.

## Run and deploy

- Start at `index.html` or deploy the **entire contents** of this directory to any static host.
- Keep the `assets/` directory beside the HTML pages.
- All 26 pages use regular `.html` URLs. For static hosting, enable HTTPS and ensure the root domain serves `index.html`.
- The SEO setup assumes the canonical domain **https://awwalproductions.com/**. Edit page canonicals, JSON-LD, `robots.txt`, and `sitemap.xml` if deployed elsewhere.

## Pages

Home, About, Services, Process, Contact, Portfolio, four separate service pages, 13 website portfolio project pages, Meta Ads portfolio and two campaign case studies.

## SEO/content changes in V6

See `CONTENT-AND-SEO-NOTES.md` for the changes and remaining launch tasks.

## Enquiries

The project form validates inputs, then opens the visitor's local email app or WhatsApp with a prefilled message. **No backend mail delivery or server-side submissions are configured.** Use a secure server function or verified form service if you require automated form submissions.

## Portfolio fidelity

All 13 provided website links are retained. Portfolio covers are styled illustrations rather than genuine live screenshots. Case-study metrics are attributed to submitted campaign reports and are not independently verified.

## Performance notes

Local WebP logos reduce transfer size; the original PNG remains available for sharing metadata. Animations respect reduced-motion preferences. The preloader is faster than before, while keeping the supplied A monogram. Actual Core Web Vitals should be measured after deployment on the real host.


## V7 — Live website previews

Every website project mockup now displays the first visible portion of the linked project's actual homepage using a remote screenshot image. This is a live third-party image service, NOT a screenshot file included in the ZIP. When online, Thum.io is tried first and WordPress.com mShots is used as a fallback. If both fail (e.g. a site is offline or the preview service is blocked), the original branded fallback layout remains visible and the link to the real project still works.

**Production recommendation:** Replace external image URLs with approved local `assets/previews/*.webp` screenshots before public launch. Remote screenshot availability, third-party limits, watermarks/caching, and project-site uptime are outside this static website's control. For local screenshots, edit the `src` of each `.site-preview-image` and remove its `data-backup` attribute. This also improves privacy, reliability, and page speed.


## V8 — Cloudflare / endless loading previews fixed

The previous third-party screenshot services have been **removed**. All portfolio visuals are now bundled under `assets/previews/`, and render offline without Cloudflare challenges, preview-service loading animations, watermarks or broken remote images. There are 13 WebP project covers. These are explicitly **project showcase graphics**, NOT copies of the live websites' actual homepages. No real homepage screenshots were obtainable from the current network environment; do not describe these covers as verified screenshots.

### Replace a cover with the client's actual homepage screenshot

1. Visit the project's actual website in your own browser, wait until it opens fully and clears Cloudflare.
2. Capture the homepage first fold with a full-width browser window (a screenshot at 1440 x 900 or larger is recommended).
3. Crop as desired to the first fold, then export it to WebP ideally 1200x780 pixels.
4. Replace the matching `assets/previews/[domain].webp`, e.g., `assets/previews/hbrindustries.co.webp` or `assets/previews/safeandsoundindustries.com.webp`.
5. In the corresponding HTML, you can change 'PROJECT SHOWCASE' to 'HOMEPAGE SCREENSHOT' only after replacing the placeholder image with the actual screenshot.

All 26 page files continue to use the same project cards. To update every occurrence, simply replace the one corresponding WebP file. Re-upload the assets to hosting, clear browser caches, and hard-refresh.
