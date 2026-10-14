# Portfolio de Younes Elbouknify

Site personnel bilingue (anglais + français), hébergé sur GitHub Pages.

- Version anglaise : https://youneselbouknify.github.io/
- Version française : https://youneselbouknify.github.io/fr/

## Contenu du dossier

```
index.html                      Page en anglais
fr/index.html                   Page en français
assets/css/style.css            Styles (couleurs, polices, mise en page)
assets/img/portrait.webp|.jpg   Photo
assets/img/og.jpg               Image d'aperçu quand le lien est partagé (LinkedIn, WhatsApp…)
assets/cv/CV_Younes_Elbouknify.pdf   CV téléchargeable
favicon.svg                     Icône de l'onglet
robots.txt, sitemap.xml         Pour que Google trouve le site
.nojekyll                       Fichier technique (optionnel)
```

## Mettre le site en ligne

1. Connecte-toi à GitHub avec le compte **YOUNESELBOUKNIFY**.
2. Clique sur **New repository**.
   - Nom du dépôt, exactement : `YOUNESELBOUKNIFY.github.io`
   - Visibilité : **Public**
   - Clique sur **Create repository**.
3. Sur la page du dépôt vide, clique sur **uploading an existing file**.
4. Ouvre le dossier dézippé et glisse **tout son contenu** (pas le dossier lui-même) :
   `index.html`, `fr`, `assets`, `favicon.svg`, `robots.txt`, `sitemap.xml`, `README.md`.
   Utilise Chrome ou Edge pour que les sous-dossiers soient bien envoyés.
5. Clique sur **Commit changes**.
6. Va dans **Settings → Pages**.
   - Source : **Deploy from a branch**
   - Branch : **main**, dossier **/ (root)** → **Save**
7. Attends 1 à 3 minutes, puis ouvre https://youneselbouknify.github.io/

## Modifier le site

Directement sur GitHub : ouvre le fichier, clique sur l'icône crayon, modifie, puis **Commit changes**.
Le site se met à jour en une minute environ.

- Texte anglais : `index.html`
- Texte français : `fr/index.html`
- Nouveau CV : remplace `assets/cv/CV_Younes_Elbouknify.pdf` en gardant le même nom
- Nouvelle photo : remplace `assets/img/portrait.jpg` et `assets/img/portrait.webp` (format portrait, environ 660 × 900 px)

Pour ajouter un lien vers un dépôt dans un projet, ajoute une ligne comme celle-ci sous le texte du projet :

```html
<p class="stack"><a href="https://github.com/YOUNESELBOUKNIFY/nom-du-depot">Code sur GitHub</a></p>
```

Pour ajouter les liens de tes certificats, entoure le nom avec un lien :

```html
<li><a href="https://lien-du-certificat">Computer Vision</a><small>Kaggle</small></li>
```

## Être trouvé sur Google

1. Va sur https://search.google.com/search-console et ajoute la propriété `https://youneselbouknify.github.io/`.
2. Vérifie la propriété (méthode « balise HTML » : copie la balise `<meta>` fournie dans le `<head>` de `index.html`).
3. Dans **Sitemaps**, soumets `sitemap.xml`.
4. Ajoute le lien du site sur LinkedIn (Coordonnées → Site web) et dans ton profil GitHub.
