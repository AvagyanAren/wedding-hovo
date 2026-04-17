# Wedding Invitation · Անի և Հովո

Mobile-first wedding invitation landing page built with **Next.js 14**, **TypeScript** and **Tailwind CSS**. All content is in Armenian and every guest gets the same link with a per-guest query param.

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

The page reads query parameters, so you can send each guest the same URL with their personal data appended. No backend, no rebuild.

| Param   | Purpose                            | Example                  |
| ------- | ---------------------------------- | ------------------------ |
| `guest` | Guest name shown in the greeting   | `?guest=Նարեկ`           |
| `table` | Table number (hides section if missing) | `?table=6`          |
| `zone`  | Optional hall / zone label         | `?zone=Գլխավոր%20սրահ`   |

Full example:

```
http://localhost:3000/?guest=%D5%86%D5%A1%D6%80%D5%A5%D5%AF&table=6
```

Armenian characters in URLs must be URL-encoded. In JavaScript:

```js
const url = `https://your-domain.com/?guest=${encodeURIComponent("Նարեկ")}&table=6`;
```

If `guest` is missing, the greeting falls back to `հարգելի հյուր`. If `table` is missing, the whole table card is hidden.

## Editing the content

All editable text lives in one file: [`lib/invitation.ts`](lib/invitation.ts).

Update couple names, date, venue, address, schedule, dress code, RSVP details, etc. there - everything else derives from this config.

## Structure

```
app/
  layout.tsx      # fonts, metadata, <html lang="hy">
  page.tsx        # reads ?guest / ?table / ?zone and composes sections
  globals.css     # Tailwind + CSS vars + small animation
components/
  Hero.tsx
  Greeting.tsx
  Countdown.tsx   # client component
  Details.tsx
  Schedule.tsx
  TableCard.tsx
  DressCode.tsx
  Rsvp.tsx
  Footer.tsx
  Divider.tsx
lib/
  invitation.ts   # single source of truth for all copy
```

## Design

Elegant minimal: ivory background, warm beige accents, sage labels, subtle gold dividers. Serif display type (`Cormorant Garamond` + `Noto Serif Armenian`) paired with `Noto Sans Armenian` for body copy. Everything is mobile-first and scales up cleanly to desktop.
