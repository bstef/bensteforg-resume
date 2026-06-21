# bensteforg-resume

Ben Stef's resume site. Plain HTML, CSS, and a little vanilla JS — no framework, no build step.

## Local preview

Any static file server works, e.g.:

```
npx serve .
```

Then open the printed local URL.

## Deploy (Cloudflare Pages)

In the Cloudflare Pages project settings:

- Build command: *(leave empty)*
- Build output directory: `/`

That's it — every push to the connected branch is served as-is, no build pipeline to break.

## Structure

- `index.html` — the whole page
- `css/style.css` — all styles
- `js/main.js` — mobile menu, scroll-spy nav highlighting, contact form handler
- `images/` — hero background and profile photo
- `resume/` — downloadable resume PDF
