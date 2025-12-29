# NextJS Final Exercise

Quick guide to install, develop, and run this Next.js project on your machine.

## Requirements
- Node.js 18+ (recommended)
- npm (bundled with Node) or `yarn`

## Installation
Install project dependencies:

```bash
npm install
# or with yarn
yarn
```

## Development
Start the development server:

```bash
npm run dev
# Open http://localhost:3000
```

Available scripts in `package.json`:

- `dev`: run Next.js in development mode (`next dev`)
- `build`: build the production app (`next build`)
- `start`: start the production server after build (`next start`)
- `lint`: run ESLint (`next lint`)
- `typecheck`: run TypeScript checks (`tsc --noEmit`)

## Build & Production

1. Run the app:

```bash
npm run dev
```

## Environment variables
This project does not require any mandatory environment variables by default. If needed, create a `.env.local` file in the project root and add variables in the `KEY=value` format.


## Key source locations
- App entry (app route): `src/app/page.tsx`
- Main components: `src/components`

