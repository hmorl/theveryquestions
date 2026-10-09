# theveryquestions

[theveryquestions.icebeing.com](https://theveryquestions.icebeing.com) band website!

Plain HTML & CSS with a sprinkling of JS.

This is just a small developer guide to make maintenance easier :)

## Develop

The site lives in `public/` and is published to GitHub Pages via GitHub Actions.

Serve locally from `public/` with a simple server: `python3 -m http.server -d public`

## Style guide

Use classes for layout, don't style individual paragraphs, images or links.

- `container`: centred, max reading width `37.5rem`, `1rem` side gutters
- `vstack`: vertical group with a gap between direct children
- `hstack`: centred column on narrow screens, centred row otherwise
- `text-center`
- `prose`: paragraph spacing for long text
- `link-button`: a button that looks like a link
- `ib`: Icebeing typeface
- `page-centered`: vertically centres `main`, short pages only
- `{colour}-1`: colour utilities, e.g. `pink-1`.

```html
<main>
  <div class="container vstack text-center">…</div>
  <article class="container prose">…</article>
</main>
```

Popups (see the monthly pages):

```html
<dialog class="dialog" id="…"><div class="container vstack text-center">…</div></dialog>
```

### CSS consistency

- Keep CSS minimal and consistent
- Every margin, padding, gap, radius and other spacing should come from the shared tokens (e.g. `--space-2`) rather than hardcoded values
- Add new tokens only when needed
- Prefer layout classes (`vstack`, `hstack`) over individual margins

## Trove (monthly, password protected)

- Readers go to `/trove/monthly/` and type the month's password
- Page lives at `public/trove/monthly/<password>/index.html`, so password is just the folder name
- It then checks the folder exists and shows password error if not. Keep only month folders in `public/trove/monthly/`, since any folder there works as a password.
- Keep the month's images in its folder
