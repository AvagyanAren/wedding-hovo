# Wedding Invitation · Հովհաննես և Մարիա

Mobile-first wedding invitation landing page built with **Next.js 14**, **TypeScript** and **Tailwind CSS**. All content is in Armenian. Each guest gets their own clean path-based URL (`/:id`) backed by a single `data/guests.json` file - no backend, no rebuild between guests beyond updating the JSON.

**Production:** [https://wedding-h-m.vercel.app/](https://wedding-h-m.vercel.app/)

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

- `npm run build` - production build
- `npm run start` - run the production build
- `npm run lint` - Next lint

## Deployment

### Vercel (or any host at the domain root)

Use the default build. **Do not** set `BASE_PATH` or `STATIC_EXPORT`. CSS and scripts load from `/_next/...` as usual.

This project is deployed at **[https://wedding-h-m.vercel.app/](https://wedding-h-m.vercel.app/)** (production on `main`).

### GitHub Pages (project site: `https://<user>.github.io/<repo>/`)

The site is served under `/<repo-name>/`, but a plain Next build links assets to `/_next/...`, so those files **404** and the page looks like **unstyled HTML** (default serif, no colors). Set **`BASE_PATH`** to your repo name so links become `/<repo>/_next/...`. Use a **static export** for hosting on Pages.

Example (replace `wedding-hovo` with your repository name):

**PowerShell**

```powershell
$env:BASE_PATH = "/wedding-hovo"
$env:STATIC_EXPORT = "true"
npm run build
```

**bash**

```bash
BASE_PATH=/wedding-hovo STATIC_EXPORT=true npm run build
```

Upload the generated `out/` directory to GitHub Pages. Guest URLs look like `https://<user>.github.io/wedding-hovo/Ara_5`.

### Troubleshooting: plain / unstyled page

That almost always means **CSS/JS did not load** (check the Network tab for 404s on `/_next/static/...`). For a subdirectory host, configure **`BASE_PATH`** as above. For a root domain (Vercel, etc.), keep **`BASE_PATH` unset**.

## Per-guest links

Guests are stored in [`data/guests.json`](data/guests.json) as an array of `{ id, name, table }` entries:

```json
[
  { "id": "narek_5", "name": "Նարեկ", "table": "5" },
  { "id": "arkadi_marine_1", "name": "Արկադի և Մարինե", "table": "1" }
]
```

Each entry is reachable at `https://wedding-h-m.vercel.app/<id>`, for example:

- `https://wedding-h-m.vercel.app/narek_5` → `Հարգելի Նարեկ`, table `5`
- `https://wedding-h-m.vercel.app/arkadi_marine_1` → `Հարգելի Արկադի և Մարինե`, table `1`

### URL behavior

| URL              | Result                                                     |
| ---------------- | ---------------------------------------------------------- |
| `/narek_5`       | Renders the invitation for that guest                      |
| `/arkadi_marine_1` | Renders the invitation for that guest                    |
| `/unknown_9`     | Unknown id → redirected to `/` → 404                       |
| `/`              | 404 (no shared landing page)                               |

### Id conventions

- Ids should be lowercase ASCII with underscores (e.g. `narek_5`, `arkadi_marine_1`) so links stay clean and do not need percent-encoding.
- Typically the id combines a transliterated name with the table number.
- Uniqueness is the editor's responsibility; a dev-only console warning flags duplicates on import.

### Generating link list

A tiny one-liner to print every guest link once you have a domain:

```js
const guests = require("./data/guests.json");
const base = "https://wedding-h-m.vercel.app";
for (const g of guests) console.log(`${g.name}\t${base}/${g.id}`);
```

## Editing the content

- **Guest list:** [`data/guests.json`](data/guests.json)
- **All other copy** (couple names, date, venue, events, labels): [`lib/invitation.ts`](lib/invitation.ts)

## Structure

```
app/
  layout.tsx       # fonts, metadata, <html lang="hy">
  page.tsx         # root "/" → notFound()
  not-found.tsx    # themed 404 screen
  [id]/page.tsx    # guest route: looks up id in guests.json
  globals.css      # Tailwind + CSS vars + small animation
components/
  InvitationView.tsx  # presentational invitation (name + table)
  TableCard.tsx       # guest + table ticket
data/
  guests.json         # source of truth for per-guest pages
lib/
  invitation.ts       # static copy (couple, date, venue, events)
  guests.ts           # typed loader + findGuest(id) helper
```

## Design

Elegant minimal with a soft sage watercolor feel: muted green background, stone neutrals, a touch of olive. Serif display type (`Cormorant Garamond` + `Noto Serif Armenian`) paired with `Noto Sans Armenian` for body copy, and `Great Vibes` for the script ampersand. The layout is a single non-scrolling screen on both mobile and desktop, centered on the guest's table number.
