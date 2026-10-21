# eric031212.github.io

Personal academic homepage of Hongtao Xie. Plain HTML/CSS/JS, no build step.

- `index.html` — all page content (bio, research, publications, news, collaboration)
- `style.css` — neon / pixel theme
- `main.js` — Gaussian-splat background, typing tagline, strummable pixel guitar (Web Audio), poppable bubbles, Konami easter egg
- `assets/Hongtao_Xie_CV.pdf` — CV linked from the page

## Local preview

```bash
python3 -m http.server 8765
```

## Deploy (GitHub Pages)

1. Create a public repo named exactly `Eric031212.github.io`.
2. Push this folder to its `main` branch.
3. Settings → Pages → Source: "Deploy from a branch", `main` / root.
4. The site is served at `https://eric031212.github.io`.
