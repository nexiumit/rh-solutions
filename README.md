# RH Solutions - Site Web Professionnel

Site web moderne et responsive pour RH Solutions, spécialisée dans l'externalisation des services RH pour les TPE/PME et startups en croissance.

## 🚀 Fonctionnalités

- ✅ Design moderne et professionnel avec palette bleu/gris
- ✅ 100% responsive (mobile-first)
- ✅ 5 pages principales : Accueil, Services, Ressources, Contact, Mentions légales
- ✅ Formulaire de contact avancé avec Formspree
- ✅ Blog/Ressources avec système de tags et recherche
- ✅ Optimisé pour GitHub Pages (site statique)
- ✅ SEO optimisé avec balises meta complètes
- ✅ Animations et transitions fluides
- ✅ Accessible (WCAG)
- ✅ Déploiement automatique via GitHub Actions

## 🛠️ Stack Technique

- **Framework** : React 18 avec TypeScript
- **Build Tool** : Vite
- **UI Components** : shadcn/ui
- **Styling** : Tailwind CSS
- **Routing** : React Router
- **Formulaires** : Formspree
- **Hébergement** : GitHub Pages
- **CI/CD** : GitHub Actions

## 📦 Installation

### Prérequis

- Node.js 18+ 
- pnpm (recommandé) ou npm

### Installation des dépendances

```bash
pnpm install
```

## 🏃 Développement

### Lancer le serveur de développement

```bash
pnpm run dev
```

Le site sera accessible sur `http://localhost:8080`

### Build de production

```bash
pnpm run build
```

### Prévisualiser le build

```bash
pnpm run preview
```

### Linter

```bash
pnpm run lint
```

## 📁 Structure du projet

```
shadcn-ui/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions pour déploiement
├── public/
│   └── assets/                 # Images et ressources statiques
│       ├── logo-rh-solutions.png
│       ├── hero-team-collaboration.jpg
│       ├── service-*.jpg
│       └── contact-illustration.jpg
├── src/
│   ├── components/
│   │   ├── ui/                 # Composants shadcn/ui
│   │   ├── Header.tsx          # Navigation principale
│   │   ├── Footer.tsx          # Footer avec liens
│   │   ├── ServiceCard.tsx     # Carte de service
│   │   ├── BlogCard.tsx        # Carte d'article
│   │   └── ContactForm.tsx     # Formulaire de contact
│   ├── pages/
│   │   ├── Index.tsx           # Page d'accueil
│   │   ├── Services.tsx        # Page services
│   │   ├── Blog.tsx            # Page blog/ressources
│   │   ├── Contact.tsx         # Page contact
│   │   ├── Legal.tsx           # Mentions légales
│   │   ├── Privacy.tsx         # Politique de confidentialité
│   │   └── NotFound.tsx        # Page 404
│   ├── App.tsx                 # Configuration des routes
│   ├── main.tsx                # Point d'entrée
│   └── index.css               # Styles globaux
├── index.html                  # HTML entry point
├── vite.config.ts              # Configuration Vite
├── tailwind.config.ts          # Configuration Tailwind
├── DEPLOYMENT.md               # Guide de déploiement détaillé
└── README.md                   # Ce fichier
```

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont définies dans `tailwind.config.ts` et utilisent la palette Tailwind :

- Bleu principal : `blue-600` (#2563eb)
- Bleu foncé : `blue-800` (#1e40af)
- Gris : `slate-500` (#64748b)
- Gris clair : `slate-100` (#f1f5f9)

### Logo

Remplacez `/public/assets/logo-rh-solutions.png` par votre propre logo.

### Contenu

- **Informations de contact** : `src/components/Footer.tsx` et `src/pages/Contact.tsx`
- **Services** : `src/pages/Services.tsx`
- **Articles de blog** : `src/pages/Blog.tsx`
- **Mentions légales** : `src/pages/Legal.tsx`

## 🚀 Déploiement sur GitHub Pages

Consultez le fichier `DEPLOYMENT.md` pour un guide complet de déploiement.

### Résumé rapide

1. Créez un dépôt GitHub
2. Poussez le code :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/USERNAME/REPO.git
   git push -u origin main
   ```
3. Activez GitHub Pages dans Settings > Pages
4. Sélectionnez "GitHub Actions" comme source
5. Le site sera déployé automatiquement !

## 🔧 Configuration du formulaire de contact

1. Créez un compte sur [Formspree](https://formspree.io/)
2. Créez un nouveau formulaire
3. Copiez l'URL du formulaire
4. Remplacez `YOUR_FORM_ID` dans `src/components/ContactForm.tsx` :
   ```typescript
   const response = await fetch('https://formspree.io/f/VOTRE_ID', {
   ```

## 📊 Services externes recommandés

### Formulaire de contact
- **Formspree** : https://formspree.io/ (50 soumissions/mois gratuit)

### Analytics
- **Google Analytics** : https://analytics.google.com/ (gratuit)
- **Plausible** : https://plausible.io/ (alternative respectueuse de la vie privée)

### SEO
- **Google Search Console** : https://search.google.com/search-console
- **Bing Webmaster Tools** : https://www.bing.com/webmasters

### Performance
- **Cloudflare** : https://www.cloudflare.com/ (CDN gratuit)

## 🎯 Optimisations SEO

Le site inclut :

- ✅ Balises meta complètes (title, description, keywords)
- ✅ Open Graph pour les réseaux sociaux
- ✅ Twitter Cards
- ✅ Balise canonical
- ✅ Structure sémantique HTML5
- ✅ Images optimisées avec alt text
- ✅ URLs propres et descriptives
- ✅ Sitemap (à générer après déploiement)

## ♿ Accessibilité

Le site respecte les standards WCAG :

- ✅ Navigation au clavier
- ✅ Contraste des couleurs suffisant
- ✅ Labels pour les formulaires
- ✅ Alt text pour les images
- ✅ Structure de titres logique
- ✅ ARIA labels où nécessaire

## 📱 Responsive Design

Le site est optimisé pour :

- 📱 Mobile (320px+)
- 📱 Tablette (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🔒 Sécurité

- ✅ HTTPS via GitHub Pages
- ✅ Protection CSRF sur les formulaires
- ✅ Validation des entrées utilisateur
- ✅ Pas de données sensibles côté client
- ✅ Headers de sécurité (via Cloudflare si configuré)

## 📈 Performance

Optimisations incluses :

- ✅ Code splitting automatique
- ✅ Lazy loading des images
- ✅ Minification CSS/JS
- ✅ Compression des assets
- ✅ Cache des ressources statiques
- ✅ Optimisation des images

## 🐛 Résolution de problèmes

### Le site ne s'affiche pas après déploiement

- Vérifiez que GitHub Pages est activé
- Vérifiez les logs dans l'onglet "Actions"
- Assurez-vous que `base: './'` est dans `vite.config.ts`

### Les images ne s'affichent pas

- Vérifiez que les chemins commencent par `/assets/`
- Vérifiez que les images sont dans `public/assets/`

### Le formulaire ne fonctionne pas

- Vérifiez la configuration Formspree
- Vérifiez l'URL dans `ContactForm.tsx`
- Testez le formulaire directement sur Formspree

## 📝 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, le modifier et le distribuer.

## 🤝 Support

Pour toute question ou problème :

- 📧 Email : contact@rh-solutions.fr
- 📞 Téléphone : +33 1 23 45 67 89
- 🌐 Site web : https://votre-domaine.github.io/

## 🎉 Crédits

- Design et développement : RH Solutions
- UI Components : [shadcn/ui](https://ui.shadcn.com/)
- Framework : [React](https://react.dev/)
- Build Tool : [Vite](https://vitejs.dev/)
- Styling : [Tailwind CSS](https://tailwindcss.com/)

---

Fait avec ❤️ par RH Solutions