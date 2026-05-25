# Preview Access

This project supports a lightweight password gate for public preview builds.
It is intended for client review links such as:

- `https://preview.grayce-aesthetics.com`

Production can remain disabled with maintenance mode while the preview branch
shows the full site behind the password screen.

## Environment Variables

Set these on the preview deployment only:

```bash
PREVIEW_GATE=on
PREVIEW_PASSWORD_SHA256=<sha256-password-hash>
```

`PREVIEW_GATE=on` also adds `noindex,nofollow` robots metadata so search
engines should not list the preview page.

Accepted enabled values are `1`, `true`, `yes`, and `on`.

Optional:

```bash
PREVIEW_NOINDEX=on
```

Use `PREVIEW_NOINDEX=on` only when a build should be noindexed without showing
the password gate.

Production can stay disabled with:

```bash
MAINTENANCE_MODE=on
```

## Generating the Password Hash

Do not store the plain preview password in Vercel or the repository. Generate a
SHA-256 hash and store only the hash:

```bash
read -rsp "Preview password: " PREVIEW_PASSWORD; echo
PREVIEW_PASSWORD="$PREVIEW_PASSWORD" node -e "const { createHash } = require('crypto'); console.log(createHash('sha256').update(process.env.PREVIEW_PASSWORD || '').digest('hex'))"
unset PREVIEW_PASSWORD
```

Paste the printed hash into `PREVIEW_PASSWORD_SHA256`.

## Expected Hosting Setup

- `grayce-aesthetics.com`: production deployment with `MAINTENANCE_MODE=on`
- `preview.grayce-aesthetics.com`: Vercel preview or preview branch deployment
  with `PREVIEW_GATE=on` and `PREVIEW_PASSWORD_SHA256` set
- `grayce-aesthetics.sonnydev.com`: internal devbox preview with no public
  password gate unless explicitly enabled

The gate is build-time controlled. Changing any of these env vars requires a
new deployment or rebuild.

## Limitations

This is a client-side preview gate, not strong access control. It prevents
casual visitors from seeing the page and adds noindex metadata for search
engines, but the static site assets are still public to anyone who inspects the
deployment. Use server-side Basic Auth or Vercel Deployment Protection if the
preview must be private in a security sense.
