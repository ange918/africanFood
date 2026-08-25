# Africanfood

Site vitrine du restaurant **Africanfood**, réécrit en **React + TypeScript** avec [Vite](https://vite.dev/).

## Stack

- React 18
- TypeScript 5
- Vite 5

## Démarrage

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production (dist/)
npm run preview  # prévisualiser le build
npm run typecheck
```

## Structure

```
src/
├── main.tsx            # point d'entrée
├── App.tsx             # composition des sections
├── constants.ts        # constantes partagées (numéro de téléphone…)
├── components/         # une section = un composant
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Dishes.tsx
│   ├── Faq.tsx
│   ├── Testimonials.tsx
│   ├── Cta.tsx
│   └── Footer.tsx
├── data/               # données (plats, FAQ, témoignages)
│   ├── dishes.ts
│   ├── faq.ts
│   └── testimonials.ts
└── styles/
    └── global.css      # feuille de style globale
```

Le site présente le restaurant : accueil (hero), présentation, spécialités,
questions fréquentes (accordéon), avis clients (carrousel auto‑défilant) et
pied de page avec les coordonnées.
