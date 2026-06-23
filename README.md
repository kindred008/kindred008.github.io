# Kara Portfolio Website

A personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

This site showcases a collection of projects.

## Overview

- Responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS
- Project data driven from `app/data/project-data.tsx`
- Uses a statically rendered frontend with client-side UI enhancements
- Includes page redirection, responsive components, Font Awesome icons, and a lightbox for media

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Font Awesome
- yet-another-react-lightbox

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## GitHub Actions deployment

This repository deploys to GitHub Pages using the workflow at `.github/workflows/deploy.yml`.

- The workflow installs dependencies with `pnpm install`
- It runs `pnpm run build`
- It uploads the generated `./out` folder as the Pages artifact

## Project structure

- `app/` - Next.js application routes and components
- `app/data` - project and roles data
- `public/projects/` - project images and media assets
- `package.json` - dependencies and scripts
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow

## Notes

- The root `app/page.tsx` currently redirects to `/portfolio`
- The current portfolio includes both personal, university and professional projects
- Update `app/data/project-data.tsx` to add or edit project entries

## License

This repository is public and the site is intended as a personal portfolio showcase.
