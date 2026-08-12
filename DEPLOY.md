# Deploying to GitHub Pages

The site builds with Vite and deploys via GitHub Actions on every push to `main`.

## One-time setup (required)

### 1. Enable GitHub Pages

1. Open [Settings → Pages](https://github.com/Abcdefg2005/portfolio/settings/pages)
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Save — no branch or folder selection is needed when using Actions

Without this step, the deploy job fails with:

> Failed to create deployment (status: 404) … Ensure GitHub Pages has been enabled

### 2. Add the Web3Forms secret (for the contact form)

1. Create a free access key at [web3forms.com](https://web3forms.com) (use `kevinlogatiman4@gmail.com` as the notification email)
2. Open [Settings → Secrets and variables → Actions](https://github.com/Abcdefg2005/portfolio/settings/secrets/actions)
3. Add a repository secret:
   - **Name:** `VITE_WEB3FORMS_KEY`
   - **Value:** your Web3Forms access key

The site will deploy without this secret, but the contact form will show a configuration error until it is set.

### 3. Trigger a deploy

After enabling Pages, either:

- Re-run the failed workflow from the [Actions tab](https://github.com/Abcdefg2005/portfolio/actions), or
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
