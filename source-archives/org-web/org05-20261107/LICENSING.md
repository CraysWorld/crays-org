# Licensing of selected CRAYS Org integration code

Copyright (c) CRAYS AG.

CRAYS AG licenses its own integration code in the exact 25 file revisions listed below under the GNU Affero General Public License, version 3 only (SPDX: **AGPL-3.0-only**). No option to use a later version is granted by this notice. This grant is dated 9 November 2026.

The complete, unchanged GNU text is in [LICENSE](LICENSE). Its appendix contains examples for applying the license; those examples do not replace this version-3-only grant. [license-scope.json](license-scope.json) records the exact scope and exclusions.

## Covered source revisions

The listed files are preserved from the Org05 source composition at commit [991df245b48bfd924541059ae09b8c2a64deeaea](https://github.com/CraysCircle/crays-org/tree/991df245b48bfd924541059ae09b8c2a64deeaea/source-archives/org-web/org05-20261107). They implement Next route/account framing, original-document data/image/script adapters, the CRAYS Nostr API integration and project package/build configuration. The five retained original Nostr handlers/helper match their historical Git source bytes at commit 5f89b020c87182e4a4cfe8f197e33832d0a54c4d; conversion adapters retain their recorded Org05 release/conversion provenance.

| File relative to this archive | SHA-256 |
| --- | --- |
| `app/(account)/account/layout.jsx` | 0525f82feff846c22d55fdcaa8cf58d39118408981b45ee9f902f944f2592028 |
| `app/(account)/account/org-account-frame.module.css` | 2e880dd1f496af8c320c0fd725639d659e1bd6cd9b7f7504cbe963bd029b4dfe |
| `app/(account)/account/page.jsx` | 1d8a3f7a8b338cb1c8ccafaae7eacb264f68083b587b28988d666d872c0f613f |
| `app/(website)/[[...slug]]/layout.jsx` | 0b9ac7820fb1f0ac09cf31fb97a7378ab0567fc044e052a66aca62ee0ea53e13 |
| `app/(website)/[[...slug]]/page.jsx` | 398ed180cbe2deb4b99632bd3f8b734275c5667928d457d44c354a94fba9779c |
| `next.config.mjs` | d735922a6e399ab021ba68149245ba4a9877060e2c5b1fa6ed04d21b338ce48e |
| `package.json` | 6caad7728d2437c308afd8128b0252d9cb578e8a61574f7a2e896f1bc665214c |
| `pages/api/nostr/config.js` | eb4cfe36db874b4a6e7af841bec839f3092f47195ae2c7987fec411c04824ca9 |
| `pages/api/nostr/events.js` | 56b0efc54a6d80d58f9d5165392c207ac2bcb7c582c5303d40a994ebd530832e |
| `pages/api/nostr/moderation.js` | f9d96f7721fe4cc39f3bfc585689afcd44fe08768a9f9419ec0070a9266f2157 |
| `pages/api/nostr/publish.js` | 9c2b6e57ff2fb195b5fc25d85f89f49782f60d17804cc82dd2bc376c0925a980 |
| `src/OrgImage.jsx` | 02b92981bbd7973c3197cfc7e3decf77e3ff3837e126f5599ecc486bbaf4acc4 |
| `src/OrgScripts.jsx` | b50e9b866d55c16d0a40a637b799ee017951e017162f078d3ce0354907063366 |
| `src/OrgTree.jsx` | a69cfcad07b046a896b3b368757b8b41707891a5ddb36e705003519cde3da3b0 |
| `src/org-pages.mjs` | a3586afc7f40b3d4cd347267eef1567613c4bf7380849fb0f1cec9a0175dceea |
| `src/original/api/nostr/config.mjs` | 3765da5d6b803f293057da057153c3968916b9e4e763c663f9576c3cf440b718 |
| `src/original/api/nostr/events.mjs` | 3a443f0bba4c95f35b2f26d14df153ef430631db7b9f8eaf1b9db0fc50112408 |
| `src/original/api/nostr/moderation.mjs` | ad98b042f88bb575dcb555bd79dfd19fe34b8e7d5ac7d37e7cf08132f918b336 |
| `src/original/api/nostr/publish.mjs` | 153c8e29d5e868d52c6c2965ead35f0194a79b22baf50e4b3e8fc5f5c8c317b8 |
| `src/original/lib/nostr-server.mjs` | 14489d8fe8dd976e3edc40ce939fcb86a228120968e453e8a50ccd14d1dbf573 |
| `src/original/package.json` | 055ae23985846bb70b98f36e3472f64dd14b7bb666a48f3f9db62ba2108efca7 |

These hashes identify the CRAYS-authored revisions covered by this initial grant. They do not restrict recipients’ rights to modify or redistribute covered code under AGPL version 3. All 25 original source bodies and package metadata remain unchanged.

## Scope extension dated 9 November 2026

The established 21-file AGPL-3.0-only grant remains in effect. This extension adds the following four exact CRAYS shared-account source revisions, bringing the scope to 25 files and 80,413 source bytes. Each Org file is byte-identical to the existing shared-web original and the immutable platform source linked below. The license remains AGPL-3.0-only, with CRAYS AG as copyright holder; no later-version option or directory-wide grant is introduced.

| Org file relative to this archive | SHA-256 | Identical published platform source |
| --- | --- | --- |
| `src/account-entry/AccountEntry.tsx` | ec6bb7a3c6f3633ef0e88e1c1c8dcba7150ed218905c2d33f20170f2a998fb91 | [AccountEntry.tsx](https://github.com/CraysCircle/crays-platform/blob/2d6b7d12104b28058a519cc6d8852aec1b44e78c/apps/web/src/components/crays-clubs/public/aws-shared-account/AccountEntry.tsx) |
| `src/account-entry/account-access-messages.ts` | 196527fcbce918d054e5dbb6c977deb04e13aaf326b373d9b5ee0af08036478a | [account-access-messages.ts](https://github.com/CraysCircle/crays-platform/blob/2d6b7d12104b28058a519cc6d8852aec1b44e78c/apps/web/src/components/crays-clubs/public/aws-shared-account/account-access-messages.ts) |
| `src/account-entry/clubs-member-account.module.css` | 48b721ff2dcc499d93c867846d95583f193db8cad504a9e3ae7ffd3ddb9f1825 | [clubs-member-account.module.css](https://github.com/CraysCircle/crays-platform/blob/2d6b7d12104b28058a519cc6d8852aec1b44e78c/apps/web/src/components/crays-clubs/public/aws-shared-account/clubs-member-account.module.css) |
| `src/account-entry/clubs-public-design-tokens.module.css` | 6afcc3191064339c5fa11e8960901feeaafe97cd1eb2da2c78c3f2628cb58ed2 | [clubs-public-design-tokens.module.css](https://github.com/CraysCircle/crays-platform/blob/2d6b7d12104b28058a519cc6d8852aec1b44e78c/apps/web/src/components/crays-clubs/public/aws-shared-account/clubs-public-design-tokens.module.css) |

The corresponding original shared-project paths are `src/components/crays-clubs/public/aws-shared-account/` followed by the same filenames. The exact platform paths and original capture relationships are recorded in [license-scope.json](license-scope.json). Similarly named Member component variants outside that path are not part of this extension. CSS font URLs refer to external font resources; the font binaries are excluded and receive no license grant here. Images, icons, framework implementations, articles, translations, datasets and all other unlisted material remain outside this grant.

## Excluded material and archive boundaries

This notice applies only to the listed CRAYS-owned file revisions; it is not a license for the entire archive or repository. The seven CSS/JavaScript files under `public/assets/` remain outside this grant while their exact modification relationships are resolved. Their presence in this archive is not an AGPL license declaration.

The generated `next-env.d.ts`, nested `src/original/package-lock.json`, generic `tsconfig.json` and crawler/discovery inputs `public/llms.txt`, `public/robots.txt` and `public/sitemap.xml` are also outside this initial scope. This exclusion does not assign those files to any third party or change an existing applicable license.

Page/article datasets, translations and embedded page content, images, fonts, logos, other media, dependencies and external scripts are excluded. Framework and library imports, Nostr protocol calls, loaded documents and external resources do not transfer ownership of those implementations or materials to CRAYS AG. Existing third-party license texts, notices and source records remain applicable and unchanged.

This file-specific grant establishes the license designation for the 25 listed own integration inputs. It does not establish complete website recovery, dependency notices, corresponding-source obligations for an actual deployment, article/media rights or production acceptance. See the existing [source capture](source-capture.json) and [archive guide](README.md) for the preserved composition and its historical limits. Earlier records stating that no application license grant had yet been established describe the capture before this dated grant; unlisted material remains outside its scope.
