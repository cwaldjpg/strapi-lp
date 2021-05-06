# The Universal Next.js Template

A NextJS template preconfigured with Typescript, ESLint, Prettier, TailwindCSS, DotEnv, Next SEO and Google Tag Manager support.

## What's included

- Nextjs v9.5+ with CSS module built-in
- Typescript
- ESLint with Semistandard coding style and Typescript support
- Prettier
- Tailwindcss with PurgeCSS enabled and other PostCSS plugins
- Next SEO
- React GTM module for Google Tag Manager
- DotEnv support

## Other setup

- Custom `_app` page to dynamically fetch global metadata both at build time (for pages with `getStaticProps`)
and at runtime (for pages without `getStaticProps`)
- Also initialize Google Tag Manager in `_app`
- Custom `_document` page to specify `lang` attribute for SEO purpose
- Placeholder apis in `api` folder to fetch global metadata. This should be replaced by actual call to external CMS (if any) where the metadata is stored for maximum flexibility
- Placeholder `utils` to demonstrate how to organize fetch functions in a clean and lightweight manner
- Example `Card` component to demonstrate how to organize view, css and file naming properly. Using `index.ts` to export component so that we don't need to specify long import statement. Also useful when grouping similar components

```ts
// DON'T
import Card from '../components/Card/card.component.tsx';

// DO
import { Card } from '../components/Card';
```

- Preconfigure `paths` for module alias. Must be done in both `tsconfig.json` and `next.config.js`

```ts
// DON'T
import { Card } from '../components/Card';

// DO
import { Card } from '@components/Card';
```

- Included npm script to run linter

```bash
npm run lint
# OR
npm run lint:fix
```

## Local development

1. Copy `.env.example` to `.env` and edit variables accordingly

```bash
cp .env.example .env
```

2. Install node modules and start development server

```bash
npm install
npm run dev
```

3. To start server in production mode, run:

```bash
npm run build
npm run start
```

## Deployment

This template does not include custom server.
Vercel.com is the best way to deploy it with almost no configuration.
