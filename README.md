# bidwellchurchpgh.org

Static website for **Bidwell Presbyterian Church**, 1025 Liverpool Street, Manchester, Pittsburgh PA 15233.

Plain HTML and CSS with one small JavaScript file for the mobile menu. No build step, no
dependencies — edit a `.html` file, commit, and GitHub Pages publishes it.

## Structure

```
index.html          Home
about.html          Our Story (church history)
leadership.html     Pastoral succession + the current search
ministries.html     Church ministries and community outreach
events.html         Weekly schedule + upcoming events
visit.html          Plan a Visit — times, address, map
404.html            Not-found page (GitHub Pages serves this automatically)

assets/css/site.css All styling. The `:root` block at the top holds every color,
                    font, and layout dimension — the whole site can be re-skinned
                    from there.
assets/js/nav.js    Mobile menu toggle.
assets/img/         Web-ready images.
Photos/             Source media staging (git-ignored — lives in Dropbox).
```

## Content status

Everything on the site was carried over from the previous GoDaddy site, which had not been
updated since **February 2018**. Anything uncertain is marked `needs confirming` in the page
text, and a yellow **draft preview** banner appears at the top of every page.

Before launch:

1. Verify current pastor, staff, service times, and phone/email.
2. Replace the placeholder event on `events.html` with real listings.
3. Add photos (portrait of the pastor, congregation, building interior).
4. Delete the draft banner: remove the `<div class="draft-note">…</div>` block from each
   `.html` file and the `.draft-note` rule from `assets/css/site.css`.

## Local preview

```
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Hosting

Live at **<https://bidwellchurchpgh.org>**, served by GitHub Pages from the `main` branch. Every
push to `main` republishes within a minute or two. The `CNAME` file in the repo root tells GitHub
which domain to answer on — don't delete it.

The repository is public, which is required for Pages on a free GitHub account. Commits use the
GitHub no-reply address for privacy, set in this repo's local git config — keep it that way.

### DNS (GoDaddy)

The domain is registered at GoDaddy, which also hosts its DNS:

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | lexiribar.github.io    |

`www.bidwellchurchpgh.org` redirects to the bare domain automatically. HTTPS is enforced in the
repo's Settings → Pages.

### Icons, previews, and search

- `favicon.ico` and `assets/img/favicon-96.png` — browser tab; the seal's centre medallion only,
  because the full seal is illegible at 16 px.
- `assets/img/apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` —
  phone home screens; the full seal. Listed in `site.webmanifest`.
- `assets/img/share-card.jpg` (1200×630) — the preview image for Facebook, texts, and email.
  Each page carries Open Graph and Twitter tags pointing to it.
- `index.html` has schema.org `Church` structured data (address, phone, coordinates).
- `404.html` uses root-absolute links (`/assets/...`) so it renders on any missing URL.

To re-check a share preview after changing it, paste the page URL into Facebook's Sharing
Debugger (<https://developers.facebook.com/tools/debug/>) and click "Scrape Again".

### Cache-busting

GitHub Pages tells browsers to cache files for 10 minutes, so every page links the stylesheet
and script with a version tag (`site.css?v=1a2b3c4d`). **After changing `site.css` or `nav.js`,
update the tag** so visitors get the new file immediately — it is the first 8 characters of the
file's SHA-1:

```
shasum assets/css/site.css | cut -c1-8
```
