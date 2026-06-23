// Données du portfolio Marion Ziebel — source unique de contenu

export const ASSETS = {
  heroEditorial: "https://d2xsxph8kpxj0f.cloudfront.net/310519663349845794/kw8Uk3RqEY5Pft8VN65Jcz/hero-editorial-7iygEzGGTYQe2UAhytnUei.webp",
  monogramGold: "https://d2xsxph8kpxj0f.cloudfront.net/310519663349845794/kw8Uk3RqEY5Pft8VN65Jcz/monogram-mz-gold-LjJ6ziVgBbkmWNXwKNxyVL.webp",
  monogramDark: "/manus-storage/monogram-mz-dark_3d34d136.png",
  portrait: "https://d2xsxph8kpxj0f.cloudfront.net/310519663349845794/kw8Uk3RqEY5Pft8VN65Jcz/portrait-editorial-dzEfmQZCgmXiCxgrLmugar.webp",
  ascuaCover: "https://d2xsxph8kpxj0f.cloudfront.net/310519663349845794/kw8Uk3RqEY5Pft8VN65Jcz/ascua-cover-WjK6Lxcd3gqtUGFq8fWFGp.webp",
  orelys: "https://d2xsxph8kpxj0f.cloudfront.net/310519663349845794/kw8Uk3RqEY5Pft8VN65Jcz/project-orelys-hzTUd4zWppyMHT9PCtcNQ7.webp",
  plume: "https://d2xsxph8kpxj0f.cloudfront.net/310519663349845794/kw8Uk3RqEY5Pft8VN65Jcz/project-plume-5dWFaVv9XNbeEK4JDrBgyq.webp",
  polytech: "https://d2xsxph8kpxj0f.cloudfront.net/310519663349845794/kw8Uk3RqEY5Pft8VN65Jcz/project-polytech-GbQGRyx4h3Ym2WvGLoJ2Lu.webp",
};

export const CONTACT = {
  email: "marionziebel@icloud.com",
  phone: "06 59 78 92 14",
  location: "Villejuif — 94800",
  availability: "Disponible dès octobre 2026",
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  tags: string[];
  image: string;
  accent: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "ascua",
    index: "01",
    title: "ASCUA",
    subtitle: "Identité visuelle d'un restaurant à vocation inclusive",
    year: "2026",
    role: "Branding · UI · Logo",
    tags: ["Branding", "UI Design", "Logo", "Art direction"],
    image: ASSETS.ascuaCover,
    accent: "#3E222D",
  },
  {
    slug: "chez-orelys",
    index: "02",
    title: "Chez Orély's",
    subtitle: "Refonte d'identité & site internet pour un traiteur",
    year: "2024",
    role: "Branding · Web design",
    tags: ["Branding", "Web", "Logotype"],
    image: ASSETS.orelys,
    accent: "#FF673B",
  },
  {
    slug: "plume",
    index: "03",
    title: "Plume",
    subtitle: "Jeu de société pour apprendre à écrire",
    year: "2023",
    role: "Print · Game design · Illustration",
    tags: ["Print", "Illustration", "Game design"],
    image: ASSETS.plume,
    accent: "#3E87A9",
  },
  {
    slug: "polytech-sorbonne",
    index: "04",
    title: "Polytech Sorbonne",
    subtitle: "Système de communication d'une école d'ingénieurs",
    year: "2024 →",
    role: "Identité · Print · Réseaux sociaux",
    tags: ["Identité", "Print", "Social media"],
    image: ASSETS.polytech,
    accent: "#3E87A9",
  },
];

export const STATS = [
  { value: 3, suffix: " ans", label: "d'expérience en alternance & stages" },
  { value: 40, suffix: " %", prefix: "+", label: "de taux d'ouverture newsletter (Greenscale)" },
  { value: 600, suffix: "", prefix: "→ ", label: "abonnés Instagram dès 100 (Euromed France)" },
  { value: 6, suffix: "+", label: "projets print & web livrés" },
];

export const SKILLS = [
  { group: "Design", items: ["UI Design", "UX Research", "Prototypage", "Wireframing", "Design system"] },
  { group: "Création", items: ["Identité visuelle", "Direction artistique", "Print & édition", "Illustration"] },
  { group: "Outils", items: ["Figma", "Photoshop", "Illustrator", "InDesign", "WordPress", "Notion"] },
  { group: "Savoir-être", items: ["Créative", "Adaptabilité", "Rigueur", "Sens du détail"] },
];

export const TIMELINE = [
  { period: "Sept. 2024 — 2026", title: "Master UX · UI Design", place: "EFREI Paris", detail: "Research UX, Figma, prototypage, challenges produit." },
  { period: "Sept. 2022 — 2024", title: "Bachelor Design Graphique", place: "ESDAC Istres", detail: "Multiples projets graphiques, web design, sémiologie." },
  { period: "Sept. 2021 — 2022", title: "Bachelor Communication", place: "ESG Aix", detail: "Design graphique, stratégie de communication, événementiel." },
  { period: "", title: "Baccalauréat STMG", place: "", detail: "Sciences et technologies du management et de la gestion." },
];

export const EXPERIENCE = [
  {
    period: "Sept. 2024 — Aujourd'hui",
    company: "Polytech Sorbonne",
    role: "Graphiste & Communication",
    points: "Modernisation de l'identité visuelle, création d'une nouvelle plaquette, identité des événements, étiquettes de miel, flyers, visuels pour le site web de l'école, bannières, templates de newsletters et publications réseaux sociaux.",
  },
  {
    period: "Sept. 2023 — Sept. 2024",
    company: "Euromed France",
    role: "Communication digitale",
    points: "Croissance Instagram de 100 à 600 abonnés grâce à des publications plus engageantes, création de 2 sites web, charte graphique et stratégie de communication.",
  },
  {
    period: "Sept. 2021 — Sept. 2022",
    company: "Greenscale",
    role: "Graphiste & chargée de communication",
    points: "Newsletter avec +40 % de taux d'ouverture, analyse stratégique, prototype de site web, rédaction et design d'outils PDF, identité visuelle, templates réseaux sociaux, brochures et présentations.",
  },
];

export const PROCESS = [
  { n: "01", title: "Découverte", text: "Comprendre le besoin, les utilisateurs et le contexte business." },
  { n: "02", title: "Recherche UX", text: "Personas, benchmark, entretiens et cartographie des parcours." },
  { n: "03", title: "Idéation", text: "Wireframes, architecture de l'information et premières pistes." },
  { n: "04", title: "UI Design", text: "Direction artistique, design system et interfaces soignées." },
  { n: "05", title: "Prototype", text: "Maquettes interactives sous Figma, prêtes à être testées." },
  { n: "06", title: "Test & itération", text: "Tests utilisateurs, ajustements et livraison finale." },
];
