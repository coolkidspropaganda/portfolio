/* ============================================================
   CONFIGURATION DU SITE  —  c'est ici que tu modifies ton contenu
   ============================================================ */
window.SITE = {
  name: "Cool Kids Propaganda",                       // affiché en grand sur l'accueil
  tagline: "direction artistique, photographie, productions éditoriales",
  email: "hello@tondomaine.fr",
  instagram: "https://instagram.com/tonpseudo",
  // deux horloges en bas de page (label + fuseau horaire)
  clocks: [
    { label: "PAR", tz: "Europe/Paris" },
    { label: "NYC", tz: "America/New_York" }
  ]
};

/* ============================================================
   PROJETS
   - slug      : identifiant unique (sans espaces ni accents)
   - category  : sert aux filtres de l'accueil
   - cover     : image de la vignette, ex. "images/projet-01/cover.jpg"
                 (laisse "" pour afficher un bloc gris provisoire)
   - ratio     : proportions de la vignette si pas d'image (ex. "4/5")
   - images    : liste des visuels de la page projet
   ============================================================ */
window.PROJECTS = [
  { slug: "pantheism", title: "projet 01", category: "photographie", year: 2026, cover: "", ratio: "4/5",
    description: "Août 2026Courte description du projet : contexte, rôle, collaborateurs.",
    images: [ { src: "coolkidspropaganda/portfolio/images/Novice (01)/Panthism/Adobe Scan 16 Aug 2026_page-0001.jpg", ratio: "3/2" }, { src: "", ratio: "4/5" }, { src: "", ratio: "3/2" } ] },

  { slug: "projet-02", title: "projet 02", category: "direction artistique", year: 2026, cover: "", ratio: "3/4",
    description: "Courte description du projet.",
    images: [ { src: "", ratio: "3/2" }, { src: "", ratio: "3/2" } ] },

  { slug: "projet-03", title: "projet 03", category: "éditorial", year: 2025, cover: "", ratio: "1/1",
    description: "Courte description du projet.",
    images: [ { src: "", ratio: "4/5" }, { src: "", ratio: "3/2" } ] },

  { slug: "projet-04", title: "projet 04", category: "photographie", year: 2025, cover: "", ratio: "3/2",
    description: "Courte description du projet.",
    images: [ { src: "", ratio: "3/2" } ] },

  { slug: "projet-05", title: "projet 05", category: "direction artistique", year: 2025, cover: "", ratio: "4/5",
    description: "Courte description du projet.",
    images: [ { src: "", ratio: "3/2" } ] },

  { slug: "projet-06", title: "projet 06", category: "éditorial", year: 2025, cover: "", ratio: "2/3",
    description: "Courte description du projet.",
    images: [ { src: "", ratio: "3/2" } ] },

  { slug: "projet-07", title: "projet 07", category: "photographie", year: 2024, cover: "", ratio: "1/1",
    description: "Courte description du projet.",
    images: [ { src: "", ratio: "3/2" } ] },

  { slug: "projet-08", title: "projet 08", category: "éditorial", year: 2024, cover: "", ratio: "4/5",
    description: "Courte description du projet.",
    images: [ { src: "", ratio: "3/2" } ] },

  { slug: "projet-09", title: "projet 09", category: "direction artistique", year: 2024, cover: "", ratio: "3/2",
    description: "Courte description du projet.",
    images: [ { src: "", ratio: "3/2" } ] },

  { slug: "projet-10", title: "projet 10", category: "photographie", year: 2024, cover: "", ratio: "3/4",
    description: "Courte description du projet.",
    images: [ { src: "", ratio: "3/2" } ] }
];
