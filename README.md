# Grayce Medical Aesthetics

One-page marketing site for **Grayce Medical Aesthetic Clinic** — the physician-led aesthetics clinic of Dr. Mary Grace Braga in Parañaque City.

## Stack

- Next.js 14 (App Router, static export)
- TypeScript · Tailwind CSS · lucide-react
- pnpm

## Development

```bash
pnpm install
pnpm dev            # http://localhost:3000
pnpm build          # static export to ./out
```

## Booking

Set `NEXT_PUBLIC_FRESHA_BOOKING_URL` to the clinic's Fresha direct booking URL.
When it is not set, appointment CTAs fall back to the contact section.

## Deployment

Hosted on Vercel as project `grayce-aesthetics`. Pushes to `main` on
`github.com/sonnypgs/grayce-aesthetics` trigger automatic deploys.

```bash
vercel --prod       # manual production deploy
```
