# Kalon Partners Design System — Token Reference

> Always read this file first. For component specs see [design-components.md](design-components.md). For accessibility and do's/don'ts see [design-guidelines.md](design-guidelines.md).

Kalon Partners uses a bold, professional design language built on a deep navy foundation with emerald green as primary accent — conveying trust, ambition, and proximity to amateur sport. The system uses an 8px base spacing unit, Barlow Condensed for display headings and Inter for body copy, and covers web (desktop + mobile responsive).

> **Note de refonte** : La palette actuelle de 4 accents (vert, teal, bleu, violet) est fonctionnelle mais risque de créer de la dispersion visuelle. Ce système recommande de les cantonner aux contextes d'identification de gamme/verticale métier uniquement, et de s'appuyer sur navy + emerald pour tout le reste.

---

## Colors

### Brand Core

| Role | Token | Light Hex | Dark Hex | Usage |
|------|-------|-----------|----------|-------|
| Primary | `color.navy` | `#1C3557` | `#4A7AB5` | Titres, éléments de marque, fond header |
| Primary Deep | `color.navy-deep` | `#0F1F35` | — | Fonds sombres, hero dark mode |
| Primary Light | `color.navy-light` | `#EBF1F8` | — | Fonds de section alternés, hover états |
| On-Primary | `color.on-navy` | `#FFFFFF` | `#FFFFFF` | Texte/icônes sur navy |

### Accent — Principal (CTA & Associations)

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| Emerald (brand) | `color.accent-green` | `#1E7A52` | Accent logo, CTA secondaire sur fond clair |
| Emerald Vibrant | `color.accent-green-vivid` | `#2ecc9b` | CTA principal sur fond sombre, highlights |
| On-Accent | `color.on-accent` | `#FFFFFF` | Texte/icônes sur vert |

> **Recommandation** : `#2ecc9b` est le vert CTA principal sur fond sombre (hero, dark sections) ; `#1E7A52` est l'ancre logo et CTA sur fond clair. Ne pas les mélanger sur la même surface.

### Accent — Verticales Métier

Ces couleurs identifient chaque ligne de service. Réserver à la signalétique de gamme uniquement (badges, onglets, tags, icônes de section).

| Verticale | Token | Light | Dark | Usage |
|-----------|-------|-------|------|-------|
| Associations | `color.vert` | `#2ecc9b` | `#1E7A52` | Tag, badge, section Associations |
| Formations | `color.teal` | `#0ea5a0` | `#0a8a86` | Tag, badge, section Formations |
| Entreprises | `color.bleu` | `#4DA3FF` | `#2f85dc` | Tag, badge, section Entreprises |
| Innovation | `color.violet` | `#7C3AED` | `#6D28D9` | Tag, badge, section Innovation |

> **Recommandation** : Éviter d'utiliser `color.bleu` (#4DA3FF) pour des éléments interactifs génériques — il entre en compétition visuelle avec navy. Réserver strictement aux composants de la gamme Entreprises.

### Surface & Neutral

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| Surface White | `color.surface` | `#FFFFFF` | Fond principal, cartes |
| Surface Soft | `color.surface-soft` | `#F4F7FA` | Sections alternées, inputs |
| Border | `color.border` | `#D9E3EE` | Séparateurs, contours de carte |
| Text Primary | `color.text` | `#0F1F35` | Corps de texte principal |
| Text Secondary | `color.text-muted` | `#4A637E` | Texte secondaire, metadata |
| Text Disabled | `color.text-disabled` | `#94A3B8` | Éléments inopérants |

### Semantic / Status

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| Success | `color.success` | `#1E7A52` | Validation, confirmation |
| Warning | `color.warning` | `#D97706` | Alertes, attention (inferred) |
| Error | `color.error` | `#DC2626` | Erreurs, champs invalides (inferred) |
| Info | `color.info` | `#2f85dc` | Informations contextuelles (inferred) |

---

## Typography

Police principale : **Barlow Condensed** (display, titres), **Inter** (corps, UI). Fallback : `system-ui, -apple-system, sans-serif`.

> **Recommandation** : Barlow Condensed correspond à l'esprit du logotype KALON — condensé, puissant, sportif. Inter assure la lisibilité optimale pour le corps de texte B2B.

```
font-family-display: 'Barlow Condensed', system-ui, sans-serif;
font-family-body:    'Inter', system-ui, sans-serif;
```

### Échelle typographique

| Style | Famille | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|---------|------|--------|-------------|----------------|-------|
| Display XL | Barlow Condensed | 72px | 700 | 76px | -1px | Hero, accroche principale |
| Display L | Barlow Condensed | 56px | 700 | 60px | -0.5px | Titres de section hero |
| Headline L | Barlow Condensed | 40px | 600 | 48px | -0.25px | Titres H1 de page |
| Headline M | Barlow Condensed | 32px | 600 | 40px | 0 | Titres H2 de section |
| Headline S | Barlow Condensed | 24px | 600 | 32px | 0 | Titres H3 / cartes |
| Title L | Inter | 20px | 600 | 28px | 0 | Titres de composants |
| Title M | Inter | 16px | 600 | 24px | 0 | Labels de section |
| Body L | Inter | 18px | 400 | 28px | 0 | Corps de texte long |
| Body M | Inter | 16px | 400 | 24px | 0 | Corps de texte standard |
| Body S | Inter | 14px | 400 | 20px | 0.1px | Texte secondaire |
| Label L | Inter | 14px | 500 | 20px | 0.5px | Boutons, tags |
| Label M | Inter | 12px | 500 | 16px | 0.5px | Badges, metadata |
| Label S | Inter | 11px | 600 | 14px | 0.8px | Surtitre, eyebrow text |

### Surtitre (Eyebrow)

Style récurrent dans la communication Kalon : texte en petites majuscules, espacement large, couleur accent.

```css
font: 600 11px/14px 'Inter', sans-serif;
letter-spacing: 1.5px;
text-transform: uppercase;
color: var(--color-accent-green-vivid);
```

---

## Shape

| Token | Radius | Composants |
|-------|--------|------------|
| `radius.none` | 0 | Dividers, images plein-bleed |
| `radius.sm` | 4px | Badges, labels, tags inline |
| `radius.md` | 8px | Inputs, boutons secondaires |
| `radius.lg` | 12px | Cartes, modals, panels |
| `radius.xl` | 16px | Cartes hero, feature blocks |
| `radius.badge` | 6px | Badge "partners" du logo (inferred) |
| `radius.full` | 9999px | Boutons pill (CTA principal), chips |

---

## Elevation

| Level | Token | CSS Shadow | Usage |
|-------|-------|-----------|-------|
| 0 | `elevation.0` | `none` | Surfaces plates |
| 1 | `elevation.1` | `0 1px 3px rgb(15 31 53 / .08), 0 1px 2px rgb(15 31 53 / .06)` | Cartes au repos |
| 2 | `elevation.2` | `0 4px 8px rgb(15 31 53 / .10), 0 2px 4px rgb(15 31 53 / .06)` | Cartes hover, dropdowns |
| 3 | `elevation.3` | `0 8px 24px rgb(15 31 53 / .12), 0 4px 8px rgb(15 31 53 / .08)` | Modals, popovers |
| 4 | `elevation.4` | `0 16px 40px rgb(15 31 53 / .16), 0 8px 16px rgb(15 31 53 / .10)` | Drawers, toasts |

---

## Interaction States

| State | Overlay Opacity | Notes |
|-------|----------------|-------|
| Enabled | 0% | État repos |
| Hover | 8% overlay navy | Élévation +1 sur cartes |
| Focus | 10% + outline 2px accent | Ring visible obligatoire pour accessibilité |
| Pressed | 12% overlay | Scale légère 0.98 |
| Disabled | Contenu 38%, container 12% | Curseur `not-allowed` |

---

## Layout

| Breakpoint | Token | Width | Colonnes | Gouttière | Navigation |
|------------|-------|-------|----------|-----------|------------|
| Mobile | `bp.sm` | < 640px | 4 | 16px | Hamburger menu |
| Tablet | `bp.md` | 640–1023px | 8 | 24px | Nav condensée |
| Desktop | `bp.lg` | 1024–1279px | 12 | 32px | Nav complète |
| Wide | `bp.xl` | ≥ 1280px | 12 | 32px | Nav complète, max-width 1280px |

**Container max-width** : `1280px`, padding horizontal : `24px` (mobile) / `48px` (desktop).

**Spacing scale** (base 8px) :

| Token | Value | Usage |
|-------|-------|-------|
| `space.1` | 4px | Gap interne minimal |
| `space.2` | 8px | Gap interne standard |
| `space.3` | 12px | Padding inline compact |
| `space.4` | 16px | Padding composant standard |
| `space.5` | 24px | Gap de grille mobile |
| `space.6` | 32px | Section gap interne |
| `space.8` | 48px | Section gap externe |
| `space.10` | 64px | Espacement section large |
| `space.12` | 80px | Espacement hero |
| `space.16` | 128px | Espacement section XL |

---

## Motion

| Token | Courbe | Durée | Usage |
|-------|--------|-------|-------|
| `motion.ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | 300ms | Transitions générales |
| `motion.ease-enter` | `cubic-bezier(0, 0, 0.2, 1)` | 250ms | Entrée d'éléments |
| `motion.ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | 200ms | Sortie d'éléments |
| `motion.ease-hover` | `cubic-bezier(0.2, 0, 0, 1)` | 150ms | Hover états |

**Propriétés animées en priorité** : `opacity`, `transform`, `box-shadow`, `background-color`. Ne jamais animer `width` ou `height` directement.

---

## Icons

Système recommandé : **Lucide Icons** (stroke, 24px grid, stroke-width 1.5).

| Token | Taille | Usage |
|-------|--------|-------|
| `icon.sm` | 16px | Labels, boutons inline |
| `icon.md` | 20px | Navigation, actions |
| `icon.lg` | 24px | Feature icons, section |
| `icon.xl` | 32px | Illustrations légères |
| `icon.hero` | 48–64px | Icônes de rubrique |

Style : outline/stroke uniquement, pas de fill. Stroke navy ou blanc selon le fond.

---

## Design Tokens — Convention de nommage

Format : `kalon.[catégorie].[rôle].[variante]`

```
kalon.color.navy
kalon.color.accent-green
kalon.color.vert.light
kalon.color.vert.dark
kalon.typography.display-xl.size
kalon.space.4
kalon.radius.lg
kalon.elevation.2
kalon.motion.ease-standard
```
