# Kalon Partners — Component Specs

> Full specifications for all 28 components. Grouped by workflow.
> For tokens see [design.md](design.md). For rules & accessibility see [design-guidelines.md](design-guidelines.md).

---

## Actions

### Button

**Types** : Filled Primary > Filled Emerald > Outlined > Ghost > Text.

Height 48px (mobile) / 44px (desktop). Min-width 120px. Label : `Label L` (14px/500). Sentence case. Border-radius : `radius.full` (pill).

| Variante | Background | Texte | Bordure | Usage |
|----------|-----------|-------|---------|-------|
| Filled Navy | `#1C3557` | `#FFFFFF` | — | Action principale sur fond clair |
| Filled Emerald | `#1E7A52` | `#FFFFFF` | — | CTA principal sur fond clair (alternatif) |
| Filled Vivid | `#2ecc9b` | `#0F1F35` | — | CTA principal sur fond sombre uniquement |
| Outlined | transparent | `#1C3557` | `1.5px #1C3557` | Action secondaire |
| Ghost | transparent | `#1C3557` | — | Action tertiaire, navigation |
| Outlined White | transparent | `#FFFFFF` | `1.5px #FFFFFF` | Action secondaire sur fond sombre |

| Property | Value |
|----------|-------|
| Padding | 12px 24px |
| Gap icon+label | 8px |
| Icon size | 16px |
| Hover | Opacity overlay 8%, elevation +1 |
| Focus | ring 2px offset 2px |
| Disabled | 38% opacity, cursor not-allowed |
| Transition | 150ms ease-hover |

**Do:** Utiliser un seul Filled par zone visible.
**Don't:** Empiler Filled Navy et Filled Emerald côte à côte.

---

### Icon Button

Carré 44×44px, `radius.md`. Icône 20px centrée. Utilisé pour actions compactes (réseaux sociaux, partage, fermeture).

| Property | Value |
|----------|-------|
| Taille | 44×44px (touch 48×48px) |
| Icon | 20px Lucide, stroke 1.5 |
| Hover | Background `color.navy-light` |
| aria-label | Obligatoire |

---

### Link

Texte seulement, couleur `color.accent-green` (#1E7A52) sur fond clair. Underline au hover. Jamais de couleur arbitraire.

| Property | Value |
|----------|-------|
| Couleur repos | `#1E7A52` |
| Hover | underline |
| Visited | `#0a8a86` |
| Focus | ring 2px `#2ecc9b` |

---

### Floating Action Button (FAB)

Utilisé pour "Prendre rendez-vous" (Calendly). Position fixe bas-droite.

| Property | Value |
|----------|-------|
| Taille | 56×56px |
| Border-radius | `radius.full` |
| Background | `#2ecc9b` |
| Icône | 24px blanc |
| Shadow | `elevation.3` |
| Z-index | 1000 |

---

## Input

### Text Field

Height 48px. `radius.md` (8px). Label flottante (Material pattern) ou label fixe au-dessus (préféré pour clarté B2B).

| State | Border | Background |
|-------|--------|-----------|
| Default | `1.5px #D9E3EE` | `#F4F7FA` |
| Focus | `2px #1C3557` | `#FFFFFF` |
| Error | `2px #DC2626` | `#FFFFFF` |
| Disabled | `1.5px #D9E3EE` | `#F4F7FA` (38% opacity) |

| Property | Value |
|----------|-------|
| Label | `Label M` 12px/500, `#4A637E` |
| Input text | `Body M` 16px/400, `#0F1F35` |
| Helper text | `Body S` 14px, `#4A637E` |
| Error text | `Body S` 14px, `#DC2626` |
| Padding | 12px 16px |

---

### Textarea

Même specs que Text Field. Min-height 120px. Resize vertical uniquement.

---

### Checkbox

20×20px, `radius.sm` (4px). État coché : background `#1C3557`, checkmark blanc SVG.

| Property | Value |
|----------|-------|
| Taille | 20×20px |
| Radius | 4px |
| Checked bg | `#1C3557` |
| Focus ring | 2px `#2ecc9b` |
| Label gap | 12px |
| Touch target | 44×44px |

---

### Radio

20×20px, cercle. Sélectionné : bordure `#1C3557` 2px, point intérieur `#1C3557` 10px.

---

### Switch / Toggle

Height 24px, width 44px, `radius.full`. État on : background `#1C3557`. Thumb : cercle blanc 20px.

---

### Select / Dropdown

Même container que Text Field. Chevron-down 16px à droite. Menu : `radius.lg`, `elevation.2`, max-height 320px, scroll interne.

---

## Navigation

### App Bar / Header

Height 72px (desktop) / 64px (mobile). Background `#0F1F35` (dark) ou `#FFFFFF` (light). Sticky.

| Zone | Contenu |
|------|---------|
| Gauche | Logo Kalon Partners (SVG), height 36px |
| Centre | Liens nav principaux (desktop uniquement) |
| Droite | CTA "Prendre rendez-vous" + éventuel menu burger |

| Property | Value |
|----------|-------|
| Background dark | `#0F1F35` |
| Background light | `#FFFFFF` |
| Border-bottom light | `1px #D9E3EE` |
| Nav links | `Label L` 14px/500, `#FFFFFF` ou `#1C3557` |
| Nav links hover | `color.accent-green-vivid` (#2ecc9b) sur dark, `#1E7A52` sur light |

---

### Mobile Menu / Drawer

Full-width overlay depuis la droite. Background `#0F1F35`. Fermé par croix ou tap outside.

| Property | Value |
|----------|-------|
| Width | 100vw (mobile) / 360px (tablet) |
| Background | `#0F1F35` |
| Padding | 24px |
| Animation | slide-in 250ms ease-enter |
| Z-index | 1100 |

---

### Tabs

Utilisé pour les verticales métier (Associations / Entreprises / Formations / Innovation).

| Property | Value |
|----------|-------|
| Height | 44px |
| Indicateur actif | Bordure basse 2px, couleur de la verticale |
| Label | `Label L` 14px/500 |
| Background actif | teinté selon verticale (10% opacity) |

---

### Breadcrumb

`Body S` 14px. Séparateur `/` ou `›`. Dernier élément non-lien, couleur `#4A637E`.

---

## Containment

### Card

`radius.lg` (12px), `elevation.1` au repos, `elevation.2` au hover. Background `#FFFFFF`.

**Variantes** :

| Variante | Usage |
|----------|-------|
| Card Standard | Service, feature, article |
| Card Metric | Statistique clé avec chiffre large |
| Card Verticale | Identification gamme avec couleur accent |
| Card Partner | Logo partenaire, fond `#F4F7FA` |
| Card Dark | Sur section `#0F1F35`, fond `#1C3557` |

**Card Standard :**

| Property | Value |
|----------|-------|
| Padding | 24px |
| Radius | 12px |
| Shadow | `elevation.1` → `elevation.2` hover |
| Titre | `Headline S` 24px/600 Barlow Condensed |
| Body | `Body M` 16px/400 Inter |
| Gap sections | 16px |
| Transition | 150ms ease-hover |

**Card Metric :**

| Property | Value |
|----------|-------|
| Chiffre | `Display L` 56px/700 Barlow Condensed, couleur navy |
| Légende | `Body S` 14px/400 Inter, `#4A637E` |
| Source | `Label S` 11px, `#94A3B8` |
| Background | `#F4F7FA` |

---

### Glass Card

Carte translucide avec `backdrop-filter`. **Fond sombre uniquement** (sections `#0F1F35` ou `#1C3557`).

**Variantes** : `.glass-card-green`, `.glass-card-teal`, `.glass-card-blue`, `.glass-card-violet` — ligne 2px de couleur en haut + ombre colorée au hover.

| Property | Value |
|----------|-------|
| Background | `rgba(255 255 255 / .07)` → `.11` hover |
| Border | `1px solid rgba(255 255 255 / .14)` |
| Radius | `var(--radius-card)` — 16px |
| Backdrop | `blur(14px) saturate(150%)` |
| Shadow | `var(--shadow-base)` → `var(--shadow-strong)` hover |
| Hover transform | `translateY(-3px)` |
| Transition | 200ms `ease-out` |

**Icône glass** : `.glass-icon` 44×44px, `radius.lg`, fond `var(--*-soft)`, bordure `var(--*-border)`.

**Do:** Utiliser sur fond `#0F1F35` ou `#1C3557` uniquement.
**Don't:** Utiliser sur fond blanc — le blur est invisible et la carte semble plate.

---

### Dialog / Modal

`radius.xl` (16px), `elevation.3`. Backdrop `rgb(15 31 53 / .6)` blur 4px. Max-width 560px, centré.

| Property | Value |
|----------|-------|
| Padding | 32px |
| Titre | `Headline S` 24px |
| Focus trap | Obligatoire |
| Fermeture | Escape + bouton croix |
| Animation | fade + scale 0.95→1, 250ms |

---

### Accordion

Border-bottom `1px #D9E3EE`. Trigger : `Title M` 16px/600. Chevron animé 200ms. Contenu : `Body M` 16px/400, padding 16px 0 24px.

---

### Divider

`1px solid #D9E3EE`. Margin vertical `space.6` (32px). Largeur 100% ou custom.

---

## Data Display

### Tag / Badge de Verticale

`radius.sm` (4px), padding `4px 10px`. `Label M` 12px/500. Couleur selon verticale.

| Verticale | Background | Texte |
|-----------|-----------|-------|
| Associations | `#2ecc9b` à 15% | `#1E7A52` |
| Formations | `#0ea5a0` à 15% | `#0a8a86` |
| Entreprises | `#4DA3FF` à 15% | `#2f85dc` |
| Innovation | `#7C3AED` à 15% | `#6D28D9` |

---

### Stat Block

Composant affichant une métrique clé. Utilisé dans les sections "Le sport amateur change".

```
[Chiffre large — Display L Barlow Condensed navy]
[Description courte — Body S Inter text-muted]
[Source — Label S Inter text-disabled]
```

Grille 2 colonnes mobile / 4 colonnes desktop.

---

### Logo Carousel

Bande horizontale de logos partenaires en niveaux de gris, opacité 60% au repos → 100% hover.

| Property | Value |
|----------|-------|
| Height logos | 32–48px |
| Filtre | grayscale(100%) → grayscale(0%) hover |
| Animation | scroll infini, pause au hover |
| Background | `#F4F7FA` |
| Padding | 24px 0 |

---

### Avatar

Cercle, tailles : 32px (compact), 40px (standard), 56px (large). Initiales `Label M` sur fond `color.navy-light`. Photo en fallback.

---

### Tooltip

`radius.md` (8px), background `#0F1F35`, texte blanc `Body S` 14px. Apparaît au hover/focus, délai 400ms, 200ms fade.

---

### Skeleton Loader

Même dimensions que le contenu remplacé. Animation shimmer : gradient `#D9E3EE → #EBF1F8 → #D9E3EE`, 1.5s loop. `radius` identique au composant cible.

---

## Feedback

### Snackbar / Toast

Position fixe bas-centre (mobile) / bas-droite (desktop). `radius.lg`, `elevation.4`. Durée auto-dismiss : 4000ms.

| Variante | Background | Icône |
|----------|-----------|-------|
| Success | `#1E7A52` | check-circle blanc |
| Error | `#DC2626` | x-circle blanc |
| Info | `#1C3557` | info blanc |
| Warning | `#D97706` | alert-triangle blanc |

| Property | Value |
|----------|-------|
| Padding | 12px 20px |
| Max-width | 480px |
| Animation | slide-up 250ms ease-enter, fade-out 200ms |
| Action label | `Label L` 14px, blanc souligné |

---

### Progress Bar

Height 4px, `radius.full`. Track `#D9E3EE`, fill `#1E7A52`. Animation fill linéaire.

---

### Spinner

Cercle SVG stroke 2px, couleur `#1E7A52`. Rotation 700ms linear infinite. Tailles : 20px (inline), 32px (section), 48px (page).

---

### Message Bar (Banner)

Largeur pleine page, height 44px minimum. Pour alertes globales (maintenance, info importante).

| Property | Value |
|----------|-------|
| Background | selon type (success/error/info/warning) |
| Texte | `Body S` 14px blanc |
| Fermeture | Icône ×, `aria-label="Fermer"` |
| Z-index | 900 (sous app bar) |
