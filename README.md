# Anand Singh Portfolio

A basic, clean, deploy-ready static portfolio website for **Anand Singh**.

## Project name

`anand-singh-portfolio`

## Files

- `index.html` — portfolio content
- `styles.css` — responsive minimalist visual system
- `script.js` — small interaction helpers
- `netlify.toml` — Netlify static hosting config
- `package.json` — project metadata and local preview script

## Local preview

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Push to GitHub manually

```bash
git init
git branch -M main
git add .
git commit -m "Create Anand Singh portfolio"
git remote add origin https://github.com/rides-alt/anand-singh-portfolio.git
git push -u origin main
```

## Netlify free deployment

1. Create or open a Netlify account.
2. Choose **Add new site** → **Import an existing project**.
3. Connect GitHub and select `rides-alt/anand-singh-portfolio`.
4. Use these settings:
   - Project/site name: `anand-singh-portfolio`
   - Build command: leave blank
   - Publish directory: `.`
5. Deploy.

The included `netlify.toml` already tells Netlify to publish the repository root.
