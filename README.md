# Portfolio — base statique (GitHub Pages)

Site 100 % statique : aucun outil de build, aucune dépendance.

## Fichiers
- `index.html` : accueil (nom en grand, lettres flottantes, grille de projets avec filtres)
- `project.html` : modèle unique pour toutes les pages projet (`project.html?p=slug`)
- `about.html`, `contact.html` : pages texte (à éditer directement)
- `projects.js` : **ton nom, ton mail, tes horloges et la liste de tes projets**
- `style.css`, `script.js` : design et comportements
- `images/` : dépose tes visuels ici

## Ajouter un projet
1. Crée un dossier `images/mon-projet/` et mets-y tes images (idéalement en .jpg ou .webp, 2000 px max de large, moins de 500 Ko chacune).
2. Dans `projects.js`, copie un bloc existant et renseigne `slug`, `title`, `category`, `year`, `cover`, `description` et `images`.

Exemple :
```js
{ slug: "mon-projet", title: "mon projet", category: "photographie", year: 2026,
  cover: "images/mon-projet/cover.jpg",
  description: "Texte court.",
  images: [ { src: "images/mon-projet/01.jpg" }, { src: "images/mon-projet/02.jpg" } ] }
```

## Tester en local
Ouvre le dossier dans un terminal et lance `python3 -m http.server`, puis va sur http://localhost:8000.

## Mise en ligne (GitHub Pages)
1. Crée un dépôt GitHub et pousse tous ces fichiers à la racine.
2. Settings → Pages → Source : `Deploy from a branch`, branche `main`, dossier `/ (root)`.
3. Settings → Pages → Custom domain : saisis ton domaine, puis coche Enforce HTTPS.
4. Chez ton hébergeur, configure le DNS (4 enregistrements A vers les IP de GitHub Pages + CNAME `www` vers `tonpseudo.github.io`).

## Personnalisation rapide
- Couleur d'accent (lien actif, bouton) : `--blue` en haut de `style.css`.
- Polices : `Cutive Mono` (texte) et `Monsieur La Doulaise` (nom manuscrit), importées depuis Google Fonts. Remplace-les par tes propres polices si tu veux.
- Pense à remplacer « Ton Nom », le mail et l'Instagram dans `projects.js`, `about.html` et `contact.html`.
