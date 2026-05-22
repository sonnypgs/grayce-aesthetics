# Project Notes

This project runs on the devbox Traefik setup at:

- https://grayce-aesthetics.sonnydev.com

Keep this host as the canonical public URL. The
`www.grayce-aesthetics.sonnydev.com` host should only redirect to the canonical
non-www URL.

## Devbox Runtime

The public Traefik route should serve a production/static build, not
`next dev`. Running the public route through the Next.js dev server can produce
volatile `/_next/static/...` asset URLs; after recompiles or restarts, stale
HTML may point at CSS/JS files that no longer exist, causing broken styling.

The expected container flow is:

```bash
pnpm build
pnpm start
```

`pnpm start` serves the exported `out/` directory. Keep the compose command
fail-fast with `set -e` so a failed build does not silently continue into a bad
or stale runtime state.

## Traefik

Do not expose public ports directly. Keep the app attached to the external
`traefik-network`, expose the internal container port, and use Traefik labels
for routing and TLS.
