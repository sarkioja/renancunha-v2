# renancunha.com

Personal site built with Next.js App Router. It is styled as a plain text
README: system monospace, one narrow column, markdown marks left visible.

## Stack

- Next.js
- TypeScript
- Plain CSS, no web fonts
- Vercel-ready

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Editing content

Each language has its own folder under `content/`, one file per section:

```
content/
  index.ts          loader (getContent)
  en/
    site.json       header, footer and section order
    about.md
    now.md
    previously.md
    how-i-work.md
    stack.md
    off-the-clock.md
    contact.md
```

To add or reorder a section, create the `.md` file and list it in
`site.json`. A new language is a new folder with the same files, plus its
code in `locales` in `content/index.ts`.

Supported marks in the `.md` files (rendered by `app/readme.tsx`):

- `# Heading`, `## Section`, `### Entry`
- `> line` for a grey secondary line (dates, location)
- `[label](url)` for links

Line breaks are kept as written.

## Deploy to Vercel

1. Import the repository in Vercel.
2. Vercel detects Next.js automatically.
3. Add the custom domain `renancunha.com` in the project settings.
