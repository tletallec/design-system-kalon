# Kalon Partners — Accessibility & Do's/Don'ts

> See [design.md](design.md) for token values. See [design-components.md](design-components.md) for component specs.

---

## Accessibility

### Contrast Requirements

| Requis WCAG | Ratio | Application |
|-------------|-------|-------------|
| AA texte normal (< 18px) | 4.5:1 | Corps de texte, labels |
| AA texte large (≥ 18px ou 14px bold) | 3:1 | Titres, boutons |
| AA composants UI & graphiques | 3:1 | Bordures inputs, icônes actives |
| AAA texte normal | 7:1 | Texte critique, légal |

**Vérifications clés sur la palette Kalon :**

| Combinaison | Ratio estimé | Statut |
|-------------|--------------|--------|
| `#FFFFFF` sur `#1C3557` (navy) | ~9.5:1 | AA/AAA ✓ |
| `#FFFFFF` sur `#0F1F35` (deep navy) | ~14:1 | AA/AAA ✓ |
| `#FFFFFF` sur `#1E7A52` (emerald) | ~5.2:1 | AA ✓ |
| `#FFFFFF` sur `#2ecc9b` (vivid green) | ~2.3:1 | ✗ — ne jamais mettre texte blanc sur ce vert |
| `#0F1F35` sur `#2ecc9b` (vivid green) | ~8.1:1 | AA/AAA ✓ |
| `#1C3557` sur `#F4F7FA` | ~8.2:1 | AA/AAA ✓ |
| `#FFFFFF` sur `#4DA3FF` (bleu accent) | ~3.0:1 | Limite AA — texte large uniquement |
| `#FFFFFF` sur `#7C3AED` (violet) | ~5.4:1 | AA ✓ |

> ⚠️ **Point critique** : `#2ecc9b` ne supporte pas le texte blanc. Toujours utiliser `#0F1F35` ou `#1C3557` comme couleur de texte sur ce fond.

### Touch Targets

| Règle | Valeur |
|-------|--------|
| Taille minimale interactive | 44×44px |
| Taille recommandée | 48×48px |
| Espacement minimum entre cibles | 8px |
| Densité mobile | Pas plus de 3 CTAs visibles simultanément |

### Keyboard Navigation

| Touche | Action |
|--------|--------|
| `Tab` | Focus élément suivant |
| `Shift + Tab` | Focus élément précédent |
| `Enter` / `Space` | Activer bouton, lien, checkbox |
| `Escape` | Fermer modal, dropdown, drawer |
| `Arrow Up/Down` | Navigation dans menu, liste |
| `Arrow Left/Right` | Navigation dans tabs, carousel |
| `Home` / `End` | Premier/dernier élément de liste |

Chaque élément interactif doit afficher un **focus ring visible** : `outline: 2px solid #2ecc9b; outline-offset: 2px;` sur fond clair ; `outline: 2px solid #FFFFFF; outline-offset: 2px;` sur fond sombre.

### Assistive Technology

- Tous les boutons icon-only doivent avoir `aria-label` explicite
- Les images décoratives : `alt=""` 
- Les images informatives : `alt` descriptif (max 125 caractères)
- Logotype : `alt="Kalon Partners"`
- Les cartes cliquables : `role="article"` + titre H3 accessible
- Le carousel logo partenaires : `aria-label="Nos partenaires"`, navigation `aria-label="Suivant/Précédent"`
- Les modals : `role="dialog"`, `aria-modal="true"`, focus trap obligatoire
- Les statistiques clés : wrapper avec `aria-label` décrivant la donnée (ex: `aria-label="82% des clubs sportifs en difficulté financière"`)
- Les accordéons : `aria-expanded`, `aria-controls`

---

## Gestures

| Geste | Utilisation |
|-------|-------------|
| Tap | Activation bouton, lien, checkbox, carte |
| Double tap | Non utilisé (éviter — conflits navigateur) |
| Long press | Non utilisé |
| Scroll vertical | Navigation dans la page |
| Swipe horizontal | Carousel de logos partenaires, cards mobiles |
| Drag | Non utilisé |
| Pinch | Zoom navigateur natif — ne pas bloquer |

---

## Content Design

### Ton de voix

Kalon Partners s'adresse à des dirigeants de clubs amateurs, des responsables RH/RSE d'entreprises, et des formateurs. Le ton doit être :

- **Direct et concret** — chiffres, bénéfices tangibles, pas de jargon vague
- **Engagé mais professionnel** — conviction sportive, sérieux du partenariat
- **Inclusif** — écriture claire, phrases courtes, niveau CM2 (Flesch-Kincaid)
- **Français** — interface entière en français, pas de franglais sauf termes établis

### Règles rédactionnelles

| Règle | Bonne pratique | À éviter |
|-------|---------------|----------|
| Capitalisation | Titre de section : majuscule initiale uniquement | TOUT EN MAJUSCULES (sauf logo) |
| CTAs | Verbe d'action + objet : "Découvrir nos offres" | "En savoir plus", "Cliquer ici" |
| Labels bouton | 2–4 mots max | Phrases longues |
| Longueur des phrases | 15–20 mots max dans le corps | Paragraphes > 4 lignes |
| Chiffres | Toujours sources citées entre parenthèses | Statistiques sans source |
| Ponctuation | Pas de point final sur les titres ni les CTAs | Point final sur bouton |

### Hiérarchie de contenu

1. **Accroche** — 1 phrase, bénéfice principal
2. **Preuve** — stat ou logo client
3. **CTA** — 1 action principale, 1 secondaire max

---

## Do's and Don'ts

### Color

- **Do** utiliser `color.navy` (#1C3557) pour tous les titres sur fond clair
- **Do** utiliser `color.accent-green-vivid` (#2ecc9b) uniquement pour les CTA sur fond sombre ou navy
- **Do** utiliser `color.accent-green` (#1E7A52) pour les CTA sur fond clair
- **Do** réserver les 4 couleurs de verticale (vert/teal/bleu/violet) aux badges et tags de gamme
- **Don't** mettre du texte blanc sur `#2ecc9b` — contraste insuffisant (2.3:1)
- **Don't** utiliser `color.bleu` (#4DA3FF) pour des éléments interactifs génériques — confusion avec navy
- **Don't** mélanger les 4 couleurs de verticale dans un même composant hors contexte de gamme
- **Don't** créer de nouvelles couleurs hors palette sans validation

### Shape

- **Do** utiliser `radius.full` (pill) pour le CTA principal
- **Do** utiliser `radius.lg` (12px) pour les cartes
- **Do** utiliser `radius.badge` (6px) pour les badges de verticale
- **Don't** mélanger les rayons dans un même groupe de composants (tous les boutons d'une section doivent partager le même rayon)
- **Don't** appliquer des rayons inférieurs à 4px sur des éléments interactifs (aspect trop rigide)

### Elevation

- **Do** utiliser `elevation.1` au repos sur les cartes, `elevation.2` au hover
- **Do** réserver `elevation.3+` aux modals et drawers
- **Don't** empiler deux surfaces avec `elevation.3+` l'une sur l'autre
- **Don't** utiliser des ombres colorées (toujours `rgb(15 31 53 / …)` navy-based)

### Interaction

- **Do** afficher un focus ring visible sur chaque élément interactif
- **Do** animer les transitions hover en 150ms max
- **Don't** supprimer l'outline au focus sans fournir d'alternative visible
- **Don't** déclencher des actions au hover sans confirmation au clic (mobile incompatible)

### Layout

- **Do** alterner sections blanches (`#FFFFFF`) et sections douces (`#F4F7FA`) pour créer un rythme visuel
- **Do** utiliser une section fond sombre (`#0F1F35`) pour le hero ou un seul bloc d'impact par page
- **Do** limiter la largeur du contenu texte à 680px pour la lisibilité
- **Don't** centrer les longs blocs de texte body (> 3 lignes) — alignement gauche uniquement
- **Don't** utiliser plus de 2 sections fond sombre par page

### Typography

- **Do** utiliser Barlow Condensed uniquement pour Display et Headline (H1, H2)
- **Do** utiliser Inter pour tous les niveaux Body, Label, UI
- **Do** maintenir un ratio de taille minimum 1:1.25 entre niveaux adjacents
- **Don't** utiliser Barlow Condensed en dessous de 20px
- **Don't** mettre du texte body en italic (réservé aux citations et au mot "partners" du logotype)
- **Don't** dépasser 3 niveaux de hiérarchie typographique dans un composant

### Motion

- **Do** limiter les animations à `opacity` et `transform` pour les performances
- **Do** respecter `prefers-reduced-motion` — désactiver toutes les transitions si activé
- **Don't** animer plus de 3 éléments simultanément dans une section
- **Don't** utiliser des durées > 400ms pour les interactions UI (hover, focus)

### Components

- **Do** utiliser un seul CTA filled par section visible
- **Do** accompagner chaque CTA filled d'un CTA outlined ou text comme option secondaire
- **Don't** utiliser le bouton filled navy et le bouton filled emerald côte à côte (conflits visuels)
- **Don't** créer des cartes sans titre accessible H3
- **Don't** utiliser des badges de verticale sans icône ou contexte de gamme associé
