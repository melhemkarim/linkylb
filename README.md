# Linky website

Next.js 14 (App Router) + TypeScript. A little link, a big feeling.

## Run it locally

Requires Node 18.18 or newer (Node 20 recommended, see `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build, run this before you push
npm run typecheck  # TypeScript check only
```

## Things to edit

All in `lib/projects.ts`:
- Each project's `url`: replace `"#"` with your live preview link.
- `contact.instagram`: replace `YOUR_HANDLE`.
- `contact.whatsapp`: replace `YOUR_NUMBER` (country code + number, no plus or spaces).

Other files:
- `app/page.tsx`: page sections and copy
- `components/Phone.tsx`: the animated phone screens
- `app/globals.css`: colors (top of file) and animations
- `public/logo.png`: your logo

## Deploy to Netlify

1. Push to GitHub. The repo root must contain `package.json`, `app/` and `public/` directly.
2. In Netlify: Add new site, Import from Git, choose the repo.
3. Settings are read from `netlify.toml` (build command `npm run build`, Node 20). Click Deploy.
4. Connect your domain under Domain management.

## If the build fails

- Run `npm run build` locally first. It shows the same error as Netlify.
- Open the first "Error" line in the Netlify log, not the last line (exit code 2 is only a summary).
- "Module not found": check file name capitalization. Linux is case-sensitive.
- Make sure `package-lock.json` is committed.
- Never commit `node_modules` or `.next`. They are already in `.gitignore`.
