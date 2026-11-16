# Linky main website

Simple site that shows your real gift and invitation sites inside a phone.
Visitors tap a name (Wedding, Birthday...) and try it on the phone. Then they tap "Order" and message you on Instagram.

## Put it online (Netlify)
1. Upload this folder to a **private** GitHub repo.
2. On Netlify: Add new site > Import from GitHub > pick the repo. Nothing else to set. Deploy.
3. Add your own domain later in Site settings > Domain management.

## Change things
Everything you may want to change is in one file: `site.config.ts`.
- **Texts**: the words in `hero`, `work`, `steps`, `contact`.
- **Your sites**: the `projects` list. Each one has a short name (the button), a title, a one line note and the link. Add, remove or reorder as you like.
- **WhatsApp**: put your number in `whatsapp`, with country code and no plus, like `"96171123456"`. A WhatsApp button then appears. Empty = hidden.
- **Instagram**: `instagram` is your handle without the @.

The notes under each project are guesses. Please rewrite them.

## Good to know
- The phone shows your live sites. If a site is slow or blocks being shown inside another page, the phone stays empty. The "Open full screen" button always works.
- On a phone, visitors tap the screen once to start it, so scrolling the page does not get stuck inside the phone. A "Done" button gives the scroll back.
- Logo files are in `public/` (`logo.png`, `logo-cream.png`, share image `og.png`).

Run on your computer: `npm install` then `npm run dev`.
