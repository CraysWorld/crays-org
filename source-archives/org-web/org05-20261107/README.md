# CRAYS Org: captured Next.js website source

CRAYS Org provides the association website, multilingual pages, account entry and Nostr-facing event/moderation API. This directory preserves the 28 selected editable source/configuration files from the recorded Org05 website composition. It supplements the older static website retained on the repository main branch.

## Read the implementation

- app/(website)/[[...slug]]/: Next.js page/layout entry points for the captured website routes.
- app/(account)/account/ and src/account-entry/: anonymous account-entry interface, its localized messages and styles, and handoff links to the Member experience.
- src/org-pages.mjs, OrgTree.jsx, OrgImage.jsx and OrgScripts.jsx: route/data loading and page-tree, asset and browser-script adapters.
- pages/api/nostr/: Next API wrappers. The retained original handlers and Nostr helper are under src/original/.
- package.json, next.config.mjs and tsconfig.json: captured build/type configuration. src/original/package-lock.json belongs to the original Nostr service, not the complete Next.js application.

The account entry does not contain user accounts, sessions or credentials. Relay and moderator settings combine public defaults with environment configuration. API publish/moderation handlers can write signed events to external relays; reading this archive does not require executing them.

## Source and version

[source-capture.json](source-capture.json) records every original path, size and SHA-256, the recorded release-manifest digest and framework versions. The captured build ID is 26alHqUImOYdSd1toc_ez. It is historical source authority, not evidence of the latest running AWS release.

This source-only tag descends from the retained static repository commit 5f89b020c87182e4a4cfe8f197e33832d0a54c4d. The default branch is not advanced. A tag-local Vercel configuration disables automatic Git deployments for this capture; it does not change the existing project, domain or runtime configuration.

## Development and recovery prerequisites

This is a partial input capture. The loader requires data/routes.json and data/pages; the recorded 1,837-route document composition, route data, images/media, styles and separate search index are not included in these 28 files. A complete Org05 source composition and its assets are still required for a working site.

The root package records Next.js 16.2.10, React/React DOM 19.2.4, lucide-react 1.23.0 and nostr-tools 2.23.5. The root application lock was not present among the pinned input files. The nested original service lock preserves eight non-root dependency records and does not replace that missing application lock. No install, build, original test, API handler or provider program was run for this source capture.

## Original notices and contribution

The selected application files do not establish a root application license grant. Dependency license metadata is preserved in the original lock, but complete version-specific original notices, incorporated-source relationships and any applicable source offers remain open. This capture adds no blanket license and does not claim full legal or recovery closure.

Useful work starts with reconstructing the missing page/data/media and root-lock relationships from exact source authority, documenting the route loader, and testing Nostr validation with synthetic signed-event fixtures in an isolated environment. Keep private keys, account records and live relay credentials out of issues and commits. The [CRAYS developer guide](https://github.com/CraysCircle/crays-platform/blob/main/CONTRIBUTING.md) explains how to propose a focused contribution.

## Additional styling, browser helpers and discovery inputs

The [technical input guide](TECHNICAL_PUBLIC_INPUTS.md) and [exact input manifest](technical-public-inputs.json) add four original stylesheets, three browser JavaScript helpers and three crawler/navigation files. These ten unchanged inputs total 1,963,991 bytes and supplement the 28 source/configuration files above. Browser signer/provider globals, the complete page-data composition, media, fonts, search index and full runtime/recovery/notices remain separately required. No browser helper, signer, stylesheet or provider program was executed for preservation.

## Reuse the CRAYS integration code

CRAYS AG grants **AGPL-3.0-only** for [21 exact own integration source files](LICENSING.md), dated 9 November 2026. The [scope manifest](license-scope.json) identifies the covered revisions; the original source bodies remain unchanged. Articles, translations, media, fonts, dependencies and the explicitly unqualified shared inputs retain their separate status. Earlier no-grant statements record the capture before this dated grant.
