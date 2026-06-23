# Portfolio Marion Ziebel — Brainstorm de direction artistique

## Contexte
Jeune diplômée du Master UX-UI Design de l'EFREI Paris (promo 2026), graphiste print & web spécialisée en UI design, en recherche d'un premier CDI. Le portfolio doit reprendre les codes graphiques de son CV (display serif à fort contraste « GRAPHISTE JUNIOR », badges arrondis, accents colorés sur mots-clés, sticker emojis, traits pointillés en arabesque) et de l'étude de cas ASCUA (palette beige/sauge/anthracite/doré, typographie Abril Display + grotesque, bandeaux colorés, ambiance restaurant premium).

## Trois approches stylistiques

### Approche A — « Atelier Éditorial »
**Intro :** Un parti pris magazine haut de gamme, typographie display serif géante en noir et blanc, accents de couleur ponctuels, grilles brisées et beaucoup d'air. Élégant, confiant, créatif.
**Probabilité :** 0.07

### Approche B — « Studio Galerie »
**Intro :** Une mise en scène façon galerie d'art : fond crème texturé, cartels, projets présentés comme des œuvres, navigation lente et contemplative. Sophistiqué mais peut paraître statique.
**Probabilité :** 0.04

### Approche C — « Néo-Brutalisme doux »
**Intro :** Blocs colorés affirmés, bordures marquées, stickers et badges du CV repris littéralement. Énergique et jeune mais risque de paraître trop chargé pour un jury exigeant.
**Probabilité :** 0.03

## Approche retenue : A — « Atelier Éditorial »

Ce parti pris prolonge directement le CV (le mot GRAPHISTE en display serif ultra-contrasté, les badges arrondis, les mots surlignés en couleur) et la rigueur premium de l'étude de cas ASCUA. Il met le travail en avant comme dans un magazine de design, ce que les recruteurs cherchent : lisibilité, hiérarchie, sens du détail.

- **Design Movement :** Swiss editorial typography rencontre le luxe contemporain (à la *Kinfolk* / *Gentlewoman*), avec une touche de « scrapbook designer » via les stickers du CV.
- **Core Principles :**
  1. Le type comme image : titres display serif énormes, contraste fort, interlettrage serré.
  2. Grille éditoriale asymétrique : colonnes décalées, numérotation des sections, marges généreuses.
  3. Couleur rare et intentionnelle : le crème domine, l'accent doré/bordeaux/sauge ponctue les mots-clés.
  4. Détails artisanaux : traits pointillés dessinés, badges « stickers », grain subtil, micro-animations.
- **Color Philosophy :** Le crème (#F7F3EE / beige rosé #F2E0D6 du CV) évoque le papier de qualité ; l'anthracite #1F1B1A pour le texte ; l'accent signature **bordeaux profond #3A232B** (le « Aa » de la typo Abril) pour l'émotion et la rareté ; le **doré #C9A24B** (logo ASCUA) pour le prestige ; le **vert sauge #9EA771** et le **bleu pétrole #0889AB** en accents secondaires repris de l'étude de cas.
- **Layout Paradigm :** Grille éditoriale asymétrique, sections numérotées (01, 02…), titres débordant en marge, alternance de pleines largeurs et de colonnes décalées. Pas de tout-centré.
- **Signature Elements :**
  1. Titres display serif géants à contraste élevé (mélange noir + un mot surligné en bordeaux/doré).
  2. Badges « stickers » arrondis pivotés (Créative, Adaptabilité, UI Design) repris du CV.
  3. Traits pointillés en arabesque dessinés qui guident le regard d'une section à l'autre.
- **Interaction Philosophy :** Le regard est guidé ; révélations au scroll douces, curseur soigné, hover qui souligne ou décale subtilement. Rien de gadget, tout sert la lecture du travail.
- **Animation :** Entrées par fondu + translation de 16-24px, easing `cubic-bezier(0.23,1,0.32,1)`, stagger de 40-70ms ; trait pointillé qui se dessine au scroll (stroke-dashoffset) ; compteurs animés pour les chiffres clés ; magnetic/underline sur les liens. Tout < 600ms, respect de prefers-reduced-motion.
- **Typography System :**
  - Display/Titres : **Fraunces** (serif à fort contraste, opsz, esprit Abril Display) — poids 600/900, italique pour les accents.
  - Texte courant & labels : **Inter Tight** ou **Archivo** (grotesque lisible, esprit Lexie) — 400/500, interlettrage des labels en majuscules.
  - Hiérarchie : titres énormes (clamp jusqu'à ~8rem), sur-titres en petites capitales lettrées, corps confortable 17-19px.
- **Brand Essence :** « Le portfolio d'une UI designer qui pense l'expérience avant l'esthétique. » Pour studios, agences et équipes produit. Différent car il marie rigueur UX et sensibilité éditoriale. Adjectifs : **créative, rigoureuse, attachante**.
- **Brand Voice :** Phrases courtes, confiantes, chaleureuses, à la première personne. CTA orientés action. Exemples : « Je conçois des interfaces qu'on a envie d'utiliser. » / « Disponible en octobre 2026 — parlons de votre prochain produit. » Bannir « Bienvenue sur mon site ».
- **Wordmark & Logo :** Monogramme **« MZ »** dessiné dans l'esprit du logo ASCUA (lettres entrelacées, sérif à empattements fins), version doré sur crème et anthracite. Jamais le nom en police par défaut.
- **Signature Brand Color :** Le **bordeaux profond #3A232B** comme couleur ownable (le « Aa » de l'étude de cas), rehaussé du doré #C9A24B.
