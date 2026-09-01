# ALVEX — Plateforme de véhicules d'occasion

Site web d'**ALVEX SARL**, spécialiste des véhicules d'occasion certifiés à Abidjan.
Interface publique construite en **Next.js (App Router) + TypeScript + Tailwind CSS**,
au look inspiré du template **LUZURIO** (thème sombre, accents jaunes).

> Ce dépôt correspond au **front public** (étape 1). Le back-office d'administration,
> la base de données (PostgreSQL) et l'API des leads/reprises décrits dans le cahier
> des charges seront ajoutés dans des étapes suivantes.

## Stack

- [Next.js 14](https://nextjs.org/) — App Router, SSR/SSG (fiches véhicules indexables)
- TypeScript
- Tailwind CSS

## Démarrage

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm run start    # servir le build
npm run typecheck
```

## Structure

```
app/
├── layout.tsx              # layout racine (fonts, header, footer, SEO)
├── page.tsx                # accueil (hero, stats, sélection, valeurs, avis, CTA)
├── vehicules/
│   ├── page.tsx            # catalogue filtrable
│   └── [slug]/page.tsx     # fiche véhicule (SSG + metadata OpenGraph)
├── reprise/page.tsx        # estimation de reprise
├── a-propos/page.tsx       # présentation
├── contact/page.tsx        # contact + FAQ
└── not-found.tsx           # page 404
components/                 # Header, Footer, VehicleCard, galerie, formulaires, sections…
data/                       # vehicles.ts, testimonials.ts, faq.ts (remplacés par la BDD plus tard)
lib/                        # constantes marque, helpers de formatage (prix, km, WhatsApp)
```

## Back-office d'administration

Un tableau de bord d'administration est disponible sur **`/admin`**, adossé à **Supabase**
(PostgreSQL + Auth) :

- Accès protégé par mot de passe (Supabase Auth, compte admin unique).
- **CRUD véhicules** : ajouter, modifier, supprimer un véhicule (table `vehicles`).
- **Analytics** : nombre de véhicules, valeur du stock, prix moyen, répartition par
  marque / carburant / carrosserie.

Sécurité : la table `vehicles` est protégée par **RLS** (lecture publique, écriture
réservée à l'admin authentifié). Les clés Supabase présentes dans `lib/supabase.ts` sont
les clés **publiques** (URL + clé publishable) prévues pour le navigateur ; la clé secrète
`service_role` n'est jamais utilisée. Le mot de passe admin est stocké **hashé** dans
Supabase, jamais dans le code.

## Feuille de route (cahier des charges ALVEX)

- [x] Front public : accueil, catalogue filtrable, fiche véhicule, reprise, contact
- [x] Metadata SEO + OpenGraph dynamiques sur les fiches véhicules
- [x] Base PostgreSQL (Supabase) — table `vehicles` + RLS
- [x] Back-office d'administration `/admin` : CRUD stock + analytics + accès protégé
- [ ] Brancher le **site public** sur Supabase (catalogue/fiches lus depuis la base)
- [ ] Entité `Lead` + branchement des formulaires (contact, reprise) sur la base
- [ ] Pipeline images (WebP/AVIF), sitemap dynamique, JSON-LD Schema.org
- [ ] Conteneurisation Docker + CI/CD

## Données

Les véhicules, avis et FAQ sont pour l'instant statiques dans `data/`. Ils seront
remplacés par la base de données lors de l'ajout du backend.
