# Portfolio — version 100 % frontend

Même site que [Site-Portfolio](https://github.com/yglsan2/Site-Portfolio), mais **sans backend** : toutes les données (profil, projets, compétences, extraits de code) sont dans le frontend. Déploiement possible sur **Netlify**, **Vercel** ou **GitHub Pages** sans API.

## Stack

- Vue 3, Vue Router, Vite 5, Tailwind CSS

## Prérequis

- Node.js 18+

## Installation et lancement

```bash
npm install
npm run dev
```

Ouvrir http://localhost:5173

## Données (extraits de code)

Par défaut, les **extraits de code** sont vides. Pour les remplir avec le même contenu que le site avec backend :

1. Cloner et lancer le backend du repo [Site-Portfolio](https://github.com/yglsan2/Site-Portfolio) (`cd backend && mvn spring-boot:run`).
2. Dans ce repo : `node scripts/export-from-api.js`
3. Le fichier `src/data/portfolio.js` est mis à jour avec tous les snippets. Refaire un build si besoin.

## Build et déploiement

```bash
npm run build
```

Le dossier `dist/` peut être déployé sur n’importe quel hébergeur de sites statiques (Netlify, Vercel, GitHub Pages, etc.).
