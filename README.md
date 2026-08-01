# portail-hotel — Nhalabene AGENCIAS

Dossier **autonome** (tout est dedans — pas de dépendance à un `shared/` racine).

## Contenu
- `index.html` — application
- `shared/config.js` — API (ou `AGENCIAS_API_URL` en tête du HTML)
- `shared/i18n.js` — PT / EN / FR / ES
- `shared/nhb-theme.css` — thème + login
- `assets/` — logos Nhalabene
- `manifest.webmanifest` + `sw.js` — PWA

## Config API
1. Ouvrir `index.html`
2. Coller l'URL `/exec` dans `AGENCIAS_API_URL` en haut du fichier
   **ou** dans `shared/config.js` → `API_URL`

Hub : `../hub/index.html`  
Backend : `../backend/AGENCIAS_ERP.gs.txt`
