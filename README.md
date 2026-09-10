# Portfolio

Personal portfolio and website for Pedro Monteiro, Software Engineer based in Porto, Portugal.

Live URL: https://pedroafmonteiro.com

## Overview

A minimal, performant portfolio built with React 19, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

### Framework & Language

- React 19
- TypeScript 5.8
- Vite 7

### Routing & UI

- React Router 7
- Tailwind CSS v4
- Lucide React (icons)

### Graphics & Rendering

- WebGPU / WebGL2 custom shaders

### Tooling & Quality

- ESLint 9 (Flat Config)
- Prettier 3
- TypeScript Project References (`tsconfig.app.json`, `tsconfig.node.json`)

### Hosting & Infrastructure

- Cloudflare Pages
- Cloudflare Wrangler CLI

## Project Structure

```
portfolio/
├── .github/              # GitHub Actions CI workflows (lint, format)
├── public/               # Static assets served at root
│   ├── favicon.ico       # Favicon
│   ├── og-image.png      # Social sharing preview card (1200x630)
│   ├── resume.html       # Standalone HTML resume viewer
│   ├── robots.txt        # Search engine crawler directives
│   ├── site.webmanifest  # Web application manifest
│   ├── sitemap.xml       # Search engine XML sitemap
│   └── Pedro_Monteiro_Resume.pdf
├── src/
│   ├── components/
│   │   ├── Background/   # WebGL2 and WebGPU canvas shaders
│   │   ├── Inputs/       # Form controls (Button, TextInput, TextArea)
│   │   ├── Layout/       # MainContent container and NavItem
│   │   └── ContentItem.tsx # Reusable card for experience and project entries
│   ├── pages/
│   │   ├── Home.tsx      # Overview, current roles, technical focus
│   │   ├── Experience.tsx# Professional experience timeline
│   │   ├── Projects.tsx  # Personal and academic projects
│   │   └── Contact.tsx   # Contact form and direct links
│   ├── index.css         # Tailwind imports, font definitions, utilities
│   └── index.tsx         # Application entry point and router configuration
├── index.html            # Main HTML document with SEO meta tags & JSON-LD
├── wrangler.jsonc        # Cloudflare Pages deployment configuration
└── package.json          # Project dependencies and npm scripts
```

## Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm (v10 or higher)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/pedroafmonteiro/portfolio.git
cd portfolio
npm install
```

### Available Scripts

| Command            | Description                                                                          |
| :----------------- | :----------------------------------------------------------------------------------- |
| `npm run dev`      | Starts the Vite development server with Hot Module Replacement (HMR).                |
| `npm run dev-host` | Starts the development server accessible from other devices on the local network.    |
| `npm run build`    | Runs TypeScript type checking (`tsc -b`) and bundles the application for production. |
| `npm run preview`  | Starts a local HTTP server to preview the production build in `./dist`.              |
| `npm run lint`     | Analyzes code for potential errors and style violations using ESLint.                |
| `npm run format`   | Formats all files across the repository using Prettier.                              |
| `npm run deploy`   | Builds the project and deploys the `./dist` folder to Cloudflare Pages via Wrangler. |

## Development Workflow

1. Start the local server:
   ```bash
   npm run dev
   ```
2. Make code edits in `src/`.
3. Verify formatting and linting prior to committing:
   ```bash
   npm run format
   npm run lint
   npm run build
   ```

## Deployment

Deployments are hosted on Cloudflare Pages.

To trigger a manual deployment:

```bash
npm run deploy
```

Continuous deployment can also be automated through Cloudflare Pages Git integration connected to the `main` branch.

## License & Author

Created and maintained by Pedro Monteiro.

- Website: https://pedroafmonteiro.com
- GitHub: https://github.com/pedroafmonteiro
- LinkedIn: https://linkedin.com/in/pedro10monteiro
- Email: me@pedroafmonteiro.com
