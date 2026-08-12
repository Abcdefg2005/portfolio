# Deploying to GitHub Pages

The site builds with Vite and deploys via GitHub Actions on every push to `main`. The workflow pushes the built `dist/` folder to the `gh-pages` branch.

## One-time setup (required)

### 1. Enable GitHub Pages

1. Open [Settings → Pages](https://github.com/Abcdefg2005/portfolio/settings/pages)
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Set **Branch** to `gh-pages` and folder to **`/ (root)`**
4. Save

The `gh-pages` branch is created automatically on the first successful workflow run. If you enable Pages before the first deploy, re-run the workflow or push a commit after the branch exists.

Without this step, the workflow may succeed but the site stays unavailable at the live URL.

### 2. Add the Web3Forms secret (for the contact form)

1. Create a free access key at [web3forms.com](https://web3forms.com) (use `kevinlogatiman4@gmail.com` as the notification email)
2. Open [Settings → Secrets and variables → Actions](https://github.com/Abcdefg2005/portfolio/settings/secrets/actions)
3. Add a repository secret:
   - **Name:** `VITE_WEB3FORMS_KEY`
   - **Value:** your Web3Forms access key

The site will deploy without this secret, but the contact form will show a configuration error until it is set.

### 3. Trigger a deploy

After enabling Pages, either:

- Re-run the workflow from the [Actions tab](https://github.com/Abcdefg2005/portfolio/actions), or
- Push any commit to `main`

## Live URL

https://abcdefg2005.github.io/portfolio/

## Local build

```bash
npm ci
npm run build
npm run preview
```

Copy `.env.example` to `.env` and set `VITE_WEB3FORMS_KEY` for local contact-form testing.
