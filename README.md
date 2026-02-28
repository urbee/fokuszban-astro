# FókuszBAN – Astro projekt (auto-generált váz)

Ez a projekt a Firecrawl-ból kimentett Markdown fájlokból készült. A cél: olcsón hostolható statikus site + könnyen szerkeszthető "Aktuális" (events) tartalom.

## Gyors indítás

1. Telepíts Node.js-t (LTS ajánlott).
2. A projekt mappájában futtasd:

```bash
npm install
npm run dev
```

Ezután a böngészőben megnyílik a helyi fejlesztői URL (általában http://localhost:4321).

## Tartalom szerkesztése (kezdőbarát)

- Statikus oldalak:
  - `src/pages/index.md`
  - `src/pages/melinda.md`
  - `src/pages/fokuszolas.md`
  - `src/pages/about-6*.md`

- Aktuális események:
  - `src/content/events/*.md`

Egy új eseményhez másolj egy meglévő `.md` fájlt, adj neki új fájlnevet és módosítsd a frontmatter mezőket.

## Netlify deploy (röviden)

- Töltsd fel GitHub-ra ezt a repót
- Netlify → Add new site → Import from Git
- Build command: `npm run build`
- Publish directory: `dist`

## Következő teendők

- A `projects` részletező oldalakhoz érdemes Firecrawl-lal kiscrape-elni a Wix detail oldalakat is, és a teljes tartalmat beilleszteni az adott `src/content/events/*.md` fájlba.
- Képek: első körben hotlinkelve maradtak (`static.wixstatic.com`). Hosszú távon javasolt letölteni és a `public/` alá áttenni.
