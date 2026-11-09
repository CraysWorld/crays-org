# Explore the CRAYS Association page sources

This page corpus powers the retained CRAYS Association website: association and project information, translated pages, Nostr protocol research, an ecosystem directory and editorial articles. It connects those original documents to the retained Next.js renderer.

| Area | Source files | Role |
| --- | ---: | --- |
| Route registry | 1 | Selects each retained page by its original route |
| Nostr research and directory | 1,741 | Protocol guides, ecosystem projects and implementation research |
| CRAYS and translated pages | 87 | Association, team, technology, finance, hospitality, real estate, lifestyle, contact and project intake |
| Editorial blog | 5 | Retained editorial articles |
| Historical legal text | 4 | Source versions of imprint, terms, privacy and data-protection text |

The [route registry](data/routes.json) and 1,837 files under [data/pages](data/pages) are retained byte for byte. [data-source-inputs.json](data-source-inputs.json) identifies every original path, size and SHA-256. Each registry target exists, each page is referenced and its declared route matches its registry entry.

## Find the rendering code

Start with [src/org-pages.mjs](src/org-pages.mjs), then [src/OrgTree.jsx](src/OrgTree.jsx), [src/OrgImage.jsx](src/OrgImage.jsx) and [src/OrgScripts.jsx](src/OrgScripts.jsx). The loader selects the original document; the tree, image and script adapters preserve its page structure and resources. The separate [technical inputs](TECHNICAL_PUBLIC_INPUTS.md) retain selected stylesheets and browser helpers.

A focused first contribution can use a synthetic page fixture to check metadata rendering, image fallback or an accessible form. Synthetic scripts can exercise loading order, cleanup and failure handling. Preserve route/document relationships and original author notices when proposing a change; use synthetic data for tests involving forms, signers or external services.

## Content origin and reuse

The owner directly confirmed that all retained article, directory and translation content was fully self-created and authorized public source preservation. This is recorded as the owner's statement. Original copyright notices and content remain unchanged.

The [dated AGPL-3.0-only grant](LICENSING.md) covers the exact CRAYS-owned integration code listed in its scope manifest. It does not declare an additional reuse license for articles, translations, images, fonts or other assets. Apply the relevant existing terms before reusing those materials.

## Version and recovery boundaries

These are the original Org05 route/page inputs corresponding to the release and build identifiers in the exact source manifest. Their structural consistency and scoped privacy review do not establish adoption by a current runtime. The four legal documents are historical source text and are not certified here as the current applicable policies.

This addition supplies 1,838 original JSON inputs alongside the previously retained 38 source/technical inputs. Complete media and font bodies, the separate search index, the root application's complete dependency lock and remaining notices/recovery evidence still require their own records. This source publication executes no retained script, SQL, product test or runtime program.

## Browse recorded page routes

Use the [page source index](PAGE_INDEX.md) to find each of the 1,837 recorded Org page routes in ten sections. Nostr sections document the wider ecosystem; route counts do not describe CRAYS-operated applications. Links retain the original immutable page JSON sources.
