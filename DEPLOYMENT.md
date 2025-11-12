# Guide de déploiement sur GitHub Pages

Ce guide vous explique comment déployer le site RH Solutions sur GitHub Pages.

## Prérequis

- Un compte GitHub
- Git installé sur votre ordinateur
- Node.js et pnpm installés (pour les tests locaux)

## Étape 1 : Créer un dépôt GitHub

1. Connectez-vous à GitHub
2. Créez un nouveau dépôt (repository)
3. Nommez-le `rh-solutions` (ou le nom de votre choix)
4. Laissez-le public pour utiliser GitHub Pages gratuitement
5. Ne cochez pas "Initialize with README" (nous avons déjà les fichiers)

## Étape 2 : Préparer le code

1. Ouvrez un terminal dans le dossier du projet
2. Initialisez Git (si ce n'est pas déjà fait) :
   ```bash
   git init
   ```

3. Ajoutez tous les fichiers :
   ```bash
   git add .
   ```

4. Créez le premier commit :
   ```bash
   git commit -m "Initial commit - RH Solutions website"
   ```

## Étape 3 : Pousser le code vers GitHub

1. Liez votre dépôt local au dépôt GitHub :
   ```bash
   git remote add origin https://github.com/VOTRE-USERNAME/rh-solutions.git
   ```
   (Remplacez `VOTRE-USERNAME` par votre nom d'utilisateur GitHub)

2. Renommez la branche principale en `main` :
   ```bash
   git branch -M main
   ```

3. Poussez le code :
   ```bash
   git push -u origin main
   ```

## Étape 4 : Activer GitHub Pages

1. Allez sur votre dépôt GitHub
2. Cliquez sur "Settings" (Paramètres)
3. Dans le menu de gauche, cliquez sur "Pages"
4. Dans "Source", sélectionnez "GitHub Actions"
5. Le workflow `.github/workflows/deploy.yml` sera automatiquement détecté

## Étape 5 : Déploiement automatique

1. Le déploiement se lance automatiquement après le push
2. Allez dans l'onglet "Actions" de votre dépôt pour suivre le déploiement
3. Une fois terminé (coche verte), votre site est en ligne !
4. L'URL sera : `https://VOTRE-USERNAME.github.io/rh-solutions/`

## Étape 6 : Configuration du formulaire de contact

Le formulaire de contact utilise Formspree. Pour le configurer :

1. Créez un compte sur [Formspree](https://formspree.io/)
2. Créez un nouveau formulaire
3. Copiez l'URL du formulaire (format : `https://formspree.io/f/XXXXXXXX`)
4. Ouvrez le fichier `src/components/ContactForm.tsx`
5. Remplacez `YOUR_FORM_ID` par votre ID Formspree à la ligne 18 :
   ```typescript
   const response = await fetch('https://formspree.io/f/VOTRE_ID', {
   ```
6. Commitez et poussez les modifications :
   ```bash
   git add src/components/ContactForm.tsx
   git commit -m "Configure Formspree contact form"
   git push
   ```

## Étape 7 : Personnalisation

### Modifier les informations de contact

Éditez les fichiers suivants :
- `src/components/Footer.tsx` : coordonnées dans le footer
- `src/pages/Contact.tsx` : informations de contact complètes
- `src/pages/Legal.tsx` : informations légales de l'entreprise

### Modifier le logo

1. Remplacez le fichier `public/assets/logo-rh-solutions.png`
2. Gardez le même nom ou mettez à jour les références dans :
   - `src/components/Header.tsx`
   - `src/components/Footer.tsx`
   - `index.html`

### Ajouter Google Analytics (optionnel)

1. Créez un compte Google Analytics
2. Obtenez votre ID de suivi (format : G-XXXXXXXXXX)
3. Ajoutez le script dans `index.html` avant `</head>` :
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

## Étape 8 : Domaine personnalisé (optionnel)

Pour utiliser votre propre domaine (ex: www.rh-solutions.fr) :

1. Dans les paramètres GitHub Pages, section "Custom domain"
2. Entrez votre domaine
3. Chez votre registrar de domaine, créez un enregistrement CNAME :
   - Type : CNAME
   - Nom : www (ou @)
   - Valeur : VOTRE-USERNAME.github.io

## Tests en local

Avant de déployer, testez le site localement :

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm run dev

# Builder le site
pnpm run build

# Prévisualiser le build
pnpm run preview
```

## Maintenance et mises à jour

Pour mettre à jour le site :

1. Modifiez les fichiers nécessaires
2. Testez en local avec `pnpm run dev`
3. Commitez les modifications :
   ```bash
   git add .
   git commit -m "Description des modifications"
   git push
   ```
4. Le déploiement se fait automatiquement via GitHub Actions

## Résolution de problèmes

### Le site ne s'affiche pas correctement

- Vérifiez que `base: './'` est bien dans `vite.config.ts`
- Vérifiez que tous les chemins d'images commencent par `/assets/`
- Consultez les logs dans l'onglet "Actions" de GitHub

### Le formulaire ne fonctionne pas

- Vérifiez que vous avez bien configuré Formspree
- Vérifiez l'URL du formulaire dans `ContactForm.tsx`
- Testez le formulaire directement sur Formspree

### Erreurs de build

- Vérifiez les logs dans l'onglet "Actions"
- Assurez-vous que `pnpm run build` fonctionne en local
- Vérifiez qu'il n'y a pas d'erreurs TypeScript

## Support

Pour toute question ou problème :
- Consultez la [documentation GitHub Pages](https://docs.github.com/pages)
- Consultez la [documentation Vite](https://vitejs.dev/)
- Ouvrez une issue sur le dépôt GitHub

## Checklist de déploiement

- [ ] Code poussé sur GitHub
- [ ] GitHub Pages activé avec GitHub Actions
- [ ] Déploiement réussi (coche verte dans Actions)
- [ ] Site accessible via l'URL GitHub Pages
- [ ] Formulaire de contact configuré avec Formspree
- [ ] Informations de contact personnalisées
- [ ] Logo personnalisé (si nécessaire)
- [ ] Google Analytics configuré (optionnel)
- [ ] Domaine personnalisé configuré (optionnel)
- [ ] Tests de navigation sur mobile et desktop
- [ ] Tests de tous les formulaires
- [ ] Vérification des liens internes et externes

## Services externes recommandés

1. **Formspree** (formulaire de contact) : https://formspree.io/
   - Plan gratuit : 50 soumissions/mois
   - Facile à intégrer
   - Notifications par email

2. **Google Analytics** (analytics) : https://analytics.google.com/
   - Gratuit
   - Suivi détaillé des visiteurs
   - Rapports personnalisables

3. **Cloudflare** (CDN et sécurité) : https://www.cloudflare.com/
   - Plan gratuit disponible
   - Améliore la vitesse du site
   - Protection DDoS

4. **Hotjar** (heatmaps et enregistrements) : https://www.hotjar.com/
   - Plan gratuit limité
   - Comprendre le comportement des utilisateurs
   - Optimiser l'UX

## Prochaines étapes

Après le déploiement réussi :

1. Partagez le lien du site
2. Testez sur différents appareils et navigateurs
3. Configurez les outils d'analytics
4. Créez du contenu pour le blog
5. Optimisez le SEO (balises meta, sitemap)
6. Configurez un domaine personnalisé
7. Ajoutez des témoignages clients
8. Créez des landing pages spécifiques par service