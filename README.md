# bidwellchurch.org

Static website for **Bidwell Presbyterian Church**, 1025 Liverpool Street, Manchester, Pittsburgh PA 15233.

Plain HTML and CSS with one small JavaScript file for the mobile menu. No build step, no
dependencies — edit a `.html` file, commit, and GitHub Pages publishes it.

## Structure

```
index.html          Home
about.html          Our Story (history + pastor timeline)
leadership.html     Rev. Dr. B. DeNeice Welch
ministries.html     Church ministries
outreach.html       Community partners and outreach
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

## Deploying to GitHub Pages

1. In the repo: **Settings → Pages → Source: Deploy from a branch → `main` / `root`**.
2. GitHub Pages on a **private** repo requires a paid plan. This repo is currently private —
   make it public (normal for a church website) or upgrade before Pages will serve it.
3. The site will first appear at `https://lexiribar.github.io/bidwell/`. Check it there before
   pointing the domain at it.

### Custom domain (bidwellchurch.org)

Do this only when the new site is ready to replace the current one — it takes the old site down.

1. At the DNS host for `bidwellchurch.org`, create four `A` records for the apex pointing to
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and a `CNAME`
   for `www` pointing to `lexiribar.github.io`.
2. Add a `CNAME` file to the repo root containing one line: `bidwellchurch.org`
3. In **Settings → Pages**, set the custom domain and enable **Enforce HTTPS** once the
   certificate is issued.
