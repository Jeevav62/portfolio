# Design Sync Notes

## Repo shape

- Next.js app with `output: "export"` and `distDir: "dist"` — NOT a component library
- Syncing only the 6 UI primitives under `app/components/ui/`; page sections excluded
- All components use `"use client"` directive — esbuild strips this fine
- No library dist entry — synth-entry mode (converter builds bundle from TypeScript source directly)

## CSS

- `cssEntry` points at compiled Next.js output: `dist/_next/static/chunks/c0760b29d04ff2f0.css`
- This file is build-hash-named — re-run `next build` (or `npm run build`) if the file no longer exists, then grep `dist/_next/static/chunks/*.css` for the new filename and update `cfg.cssEntry`
- Font woff2 files live in `dist/_next/static/media/` — resolved by esbuild relative to the CSS file

## Fonts

- Archivo, Space Grotesk, Geist Mono — defined via `@font-face` in the compiled CSS
- Variable CSS custom properties (`--font-archivo`, `--font-space-grotesk`, `--font-geist-mono`) set by Next.js's `next/font` at runtime in the live app, but defined as static values in the compiled CSS — available in the design bundle

## Re-sync risks

- `cssEntry` filename changes on every `next build` — update `cfg.cssEntry` when it does
- Font woff2 filenames in `dist/_next/static/media/` are also hash-named and change with rebuilds
- Components depend on `framer-motion` at runtime — animations work in design previews
- `"use client"` directive is stripped by esbuild — not a risk
