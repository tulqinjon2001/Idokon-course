## Quick context for AI coding agents

- Project: React (Vite) frontend + small Express backend (telegram notifier).
- Frontend entry: `src/main.jsx` → `src/App.jsx` (router). The single-route fallback is handled by `src/pages/AllInPages.jsx`.
- UI: Tailwind CSS (via `@tailwindcss/vite`) and many feature pages under `src/sections/` (organized by Uzbek-labeled folders like `admin panel`, `1-bolim`, `2-bolim`, ...).
- Backend: `idokon-course-backend/server.js` — Express app that exposes `/healthz`, `/api/telegram-notify` and `/api/telegram-webhook` and uses a Telegram bot (polling + webhook support).

## How to run (developer workflows)

- Frontend (in `Idokon-course/`):

  - Install deps: `npm install`
  - Dev server (HMR): `npm run dev` (Vite, default port 5173)
  - Build: `npm run build`
  - Preview built app: `npm run preview`

- Backend (in `idokon-course-backend/`):
  - Install deps: `npm install`
  - Dev (nodemon): `npm run dev` (restarts on change)
  - Start: `npm start` (node server.js)

Note: there is no root-level script to run both servers together; start each in its own terminal.

## Important environment variables

- Backend (`idokon-course-backend/.env`):

  - `TELEGRAM_BOT_TOKEN` — required for Telegram integration (the server falls back to a warning if missing).
  - `TELEGRAM_CHAT_ID` — target chat for notifications.
  - `FRONTEND_ORIGIN` — comma-separated allowed origins for CORS; defaults include `http://localhost:5173` and `https://idokon-course.vercel.app`.

- Frontend: add a Vite variable like `VITE_API_BASE` (recommended) to point to backend (e.g. `http://localhost:3001`). The repo currently lacks a centralized API client — `src/lib/api.js` exists but is empty and is the right place to add an axios/fetch wrapper.

## Key integration points & endpoints

- `POST /api/telegram-notify` — accepts JSON with { name, phone, score, total, percent, passed } and forwards a formatted HTML message to Telegram. Backend validates numeric `score` and `total` and returns 400/500 on error.
- `POST /api/telegram-webhook` — webhook receiver for Telegram updates (server responds 200 immediately and processes asynchronously).
- `GET /healthz` — simple health check JSON.

## Project-specific conventions and gotchas

- File organization: many UI features are grouped in `src/sections/` and nested Uzbek-labeled folders (e.g., `1-bolim`, `kassaPanel`). Expect non-English identifiers and comments — keep names intact.
- JSX files use `.jsx` extension across the repo (not `.tsx`). Frontend package.json sets `type: "module"` (ESM), while backend `package.json` is `commonjs` — don't change module types without checking both sides.
- Tailwind is wired through Vite plugin (`vite.config.js`). Styles are imported from `src/index.css`.
- Routing: `src/App.jsx` mounts a single catch-all route to `AllInPages.jsx`. Look there to find how internal route fragments are resolved.
- Empty API helper: `src/lib/api.js` is present but empty — recommended place to add an axios instance with baseURL = `import.meta.env.VITE_API_BASE || 'http://localhost:3001'`.
- Minor mismatch: `src/components/layouts/Layout.jsx` imports `../components/Sidebar` which may not match actual Sidebar path (`src/components/layouts/Sidebar.jsx`). Verify or prefer the working import used in `src/App.jsx`.

## Example patterns to follow (concrete examples from this repo)

- Centralized routing: `src/App.jsx` uses React Router and delegates all subpaths to `src/pages/AllInPages.jsx` (search inside `AllInPages.jsx` to find route-to-component mappings).
- Backend message formatting: `idokon-course-backend/server.js` builds an HTML Telegram message with escaped user input (`esc()` helper). Mirror its escaping when creating clients that format messages.

## Small suggestions useful for AI edits

- Implement `src/lib/api.js` as an axios/fetch wrapper that reads `import.meta.env.VITE_API_BASE` so UI components can call `/api/telegram-notify` without hardcoding host/port.
- When changing backend CORS behavior, update `FRONTEND_ORIGIN` handling in `server.js` (the code splits comma-separated origins).
- Keep Ukrainian/Uzbek transliterations in filenames and comments to preserve intent and avoid accidental renames.

## Where to look first when debugging or adding features

- Frontend behavior / routes: `src/pages/AllInPages.jsx`, `src/sections/` and `src/components/layouts/Sidebar.jsx`.
- API integration and network errors: `src/lib/api.js` (add client) and `idokon-course-backend/server.js` (server-side validation & CORS).
- Build / plugin config: `vite.config.js`, `package.json` (scripts & deps).

If anything above is unclear or you'd like me to make a small follow-up change (for example add a recommended `src/lib/api.js` implementation or add a root npm script to run both servers), tell me which item to iterate on.
