# Wedding Invitation · Հովհաննես և Մարիա

Mobile-first wedding invitation landing page built with **Next.js 14**, **TypeScript** and **Tailwind CSS**. All content is in Armenian. Each guest gets their own clean path-based URL (`/:id`) backed by a single `data/guests.json` file - no backend, no rebuild between guests beyond updating the JSON.

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

## Per-guest links

Guests are stored in [`data/guests.json`](data/guests.json) as an array of `{ id, name, table }` entries:

```json
[
  { "id": "Ara_5", "name": "Արա", "table": "5" },
  { "id": "Ani_Tigran_4", "name": "Անի և Տիգրան", "table": "4" }
]
```

Each entry is reachable at `https://your-domain.com/<id>`, for example:

- `https://your-domain.com/Ara_5` → `Հարգելի Արա`, table `5`
- `https://your-domain.com/Ani_Tigran_4` → `Հարգելի Անի և Տիգրան`, table `4`

### URL behavior

| URL              | Result                                                     |
| ---------------- | ---------------------------------------------------------- |
| `/Ara_5`         | Renders the invitation for that guest                      |
| `/Ani_Tigran_4`  | Renders the invitation for that guest                      |
| `/Unknown_9`     | Unknown id → redirected to `/` → 404                       |
| `/`              | 404 (no shared landing page)                               |

### Id conventions

- Ids should be ASCII with underscores (e.g. `Ara_5`, `Ani_Tigran_4`) so links stay clean and do not need percent-encoding.
- Typically the id combines a transliterated name with the table number.
- Uniqueness is the editor's responsibility; a dev-only console warning flags duplicates on import.

### Generating link list

A tiny one-liner to print every guest link once you have a domain:

```js
const guests = require("./data/guests.json");
const base = "https://your-domain.com";
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
