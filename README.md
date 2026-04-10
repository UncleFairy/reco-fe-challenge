# Reco AI Challenge

A beginner-friendly React + TypeScript app built with Vite.

This project includes:

- A routed app shell with a sidebar layout
- An **Apps Discovery** page
- An **Apps Inventory** page
- A **Settings** page
- API requests through Axios

## Tech stack

- **React 19**
- **TypeScript**
- **Vite**
- **React Router**
- **Axios**
- **Tailwind CSS 4** + **daisyUI**

## Requirements

Before you start, install:

- **Node.js 18+**
- **npm** (comes with Node.js)

You can check your versions with:

```bash
node -v
npm -v
```

## Project setup

Follow these steps if you are starting from scratch:

1. **Open the project folder** in your code editor.
2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Open the app** in your browser.
   Vite will show a local address such as `http://localhost:5173`.

## Available scripts

Use these commands in the terminal:

```bash
npm run dev      # Start the development server
npm run build    # Build the app for production
npm run lint     # Check code quality with ESLint
npm run preview  # Preview the production build locally
```

## App pages

The app uses these routes:

- `/` — **Apps Discovery**
- `/inventory` — **Apps Inventory**
- `/settings` — **Settings**

## API connection

The app currently sends requests to:

```ts
https://recotest.pythonanywhere.com/
```

If you need to change the backend URL, update:

```ts
src/api/client.ts
```

## Project structure

- `src/main.tsx` — App entry point
- `src/router.tsx` — Route setup
- `src/layouts/` — Shared layout components
- `src/pages/` — Page components
- `src/api/` — API client and endpoints
- `src/consts.ts` — Shared route constants

## Common problems

- **`npm install` fails**

  Make sure Node.js is installed and your internet connection is working.

- **App does not open**

  Check the terminal output from `npm run dev` and open the local URL it shows.

- **API requests fail**

  Confirm the backend URL in `src/api/client.ts` is correct and reachable.

## Next steps for beginners

If you are learning this codebase, start by reading these files:

1. `src/main.tsx`
2. `src/router.tsx`
3. `src/layouts/root.tsx`
4. `src/pages/index.ts`

That will help you understand how the app starts, routes, and renders pages.
