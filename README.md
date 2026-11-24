# CRAYS Org

**Current operating environment — 24 November 2026:** CRAYS development, builds, testing, previews and server operation use AWS. Vercel, Neon and XXL references in older captures describe historical environments. This hosting status does not claim completion of every product flow. [Current AWS and source guidance](https://github.com/CraysWorld/.github/blob/main/docs/aws-operating-status.md).

Source repository for the CRAYS Association website at [crays.org](https://crays.org). The root preserves the original static website/mirror source; this is separate from the exact later AWS release composition.

## Source navigation

- `public/`: retained public website files.
- `api/`, `lib/`: original API and supporting source.
- `scripts/`, `tools/`, `mirror-crays.mjs`: retained development and capture tools.
- `package.json` and `package-lock.json`: original package and dependency declarations.
- [Recorded page/source index](https://github.com/CraysWorld/crays-org/blob/org-page-reader-index-20261109/source-archives/org-web/org05-20261107/PAGE_INDEX.md): the qualified historical page capture.

## Development and publication

Use the existing authorised AWS development/build environment and the current release owner's exact source/artifact records. Do not deploy this historical mirror to Vercel or treat a recovered Windows path as the current working source. Retained `.vercelignore` and Vercel-era source/configuration document the original capture and are not current deployment instructions.

`npm start` starts the original local source server. `npm run mirror:live` is an original capture operation that writes website files; do not use it as a source-of-truth update or overwrite newer work with a live mirror. This documentation pass ran neither command and changed no application source or runtime.
