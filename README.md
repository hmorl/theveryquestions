# theveryquestions

[theveryquestions.icebeing.com](https://theveryquestions.icebeing.com) band website!

Plain HTML & CSS with a sprinkling of JS.

## Develop

The site lives in `src/` and is published to GitHub Pages via an action.

Serve locally from `src/` with a simple server: `python3 -m http.server -d src`

## Style guide

Use classes for layout, don't style individual paragraphs, images or links.

- `container`: centred, max reading width `37.5rem`, `1rem` side gutters
- `vstack`: vertical group with a gap between direct children
- `hstack`: centred column on narrow screens, centred row otherwise
- `text-center`
- `prose`: left-aligned reading content
- `ib`: Icebeing typeface
- `page-centered`: vertically centres `main`, short pages only
- `{colour}-1`: colour utilities, e.g. `pink-1`.

```html
<main>
  <div class="container vstack text-center">…</div>
  <article class="container prose">…</article>
</main>
```

### CSS consistency

- Keep CSS minimal and consistent
- Every margin, padding, gap, radius and other spacing should come from the shared tokens (e.g. `--space-2`) rather than hardcoded values
- Add new tokens only when needed
- Prefer layout classes (`vstack`, `hstack`) over individual margins
