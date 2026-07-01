# Behredin Eshetu — Portfolio

Premium freelance software engineering portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- **Next.js 15** — App Router, static generation
- **TypeScript** — Full type safety
- **Tailwind CSS v4** — Utility-first styling
- **shadcn/ui** — Accessible UI primitives
- **Framer Motion** — Subtle scroll animations

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deployment

Configured for [Vercel](https://vercel.com) with the Next.js framework preset.

## Project Structure

```
app/                  # Next.js App Router pages
components/
  layout/             # Header, footer
  sections/           # Page sections (hero, projects, etc.)
  ui/                 # shadcn/ui primitives
  motion/             # Framer Motion wrappers
lib/
  data/               # Site content and project data
  types.ts            # Shared TypeScript types
public/assets/        # Images and static assets
```

## Content

Edit project data in `lib/data/projects.ts` and site configuration in `lib/data/site.ts`.
