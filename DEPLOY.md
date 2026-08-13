# Deploying to GitHub Pages

Live URL: **https://kevinl1004.github.io/portfolio/**

The site builds with Vite and deploys via GitHub Actions on every push to `main`. The workflow pushes the built `dist/` folder to the `gh-pages` branch.

## One-time setup (required)

### 1. Allow workflow write access

1. Open [Settings → Actions → General](https://github.com/kevinL1004/portfolio/settings/actions)
2. Under **Workflow permissions**, select **Read and write permissions**
3. Save

Without this, the deploy step cannot create or update the `gh-pages` branch.

### 2. Enable GitHub Pages

1. Open [Settings → Pages](https://github.com/kevinL1004/portfolio/settings/pages)
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Set **Branch** to `gh-pages` and folder to **`/ (root)`**
4. Save

The `gh-pages` branch is created by the deploy workflow. If Pages is enabled before the first deploy, re-run the workflow or push a commit after the branch exists.

### 3. Add the Web3Forms secret (for the contact form)

1. Create a free access key at [web3forms.com](https://web3forms.com) (use `kevinlogatiman4@gmail.com` as the notification email)
2. Open [Settings → Secrets and variables → Actions](https://github.com/kevinL1004/portfolio/settings/secrets/actions)
3. Add a repository secret:
   - **Name:** `VITE_WEB3FORMS_KEY`
   - **Value:** your Web3Forms access key

The site will deploy without this secret, but the contact form will show a configuration error until it is set.

### 4. Trigger a deploy

After the steps above, either:

- Re-run the workflow from the [Actions tab](https://github.com/kevinL1004/portfolio/actions), or
- Push any commit to `main`

## Local development

```bash
npm ci
npm run dev
```

Copy `.env.example` to `.env` and set `VITE_WEB3FORMS_KEY` for local contact-form testing.

```bash
npm run build
npm run preview
```

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Deploy workflow succeeds but no `gh-pages` branch | Enable **Read and write permissions** for workflows (step 1) |
| Site returns 404 | Enable Pages and select the `gh-pages` branch (step 2) |
| Contact form error | Add `VITE_WEB3FORMS_KEY` secret and re-run deploy (step 3) |
| Old URL `abcdefg2005.github.io` | GitHub username changed — use `kevinl1004.github.io/portfolio/` |
