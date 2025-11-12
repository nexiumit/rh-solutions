import { useState } from 'react';
import BlogCard from '@/components/BlogCard';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const articles = [
    {
      title: 'Comment externaliser sa paie en toute sérénité ?',
      excerpt: 'Découvrez les étapes clés et les bonnes pratiques pour réussir l\'externalisation de votre gestion de paie.',
      date: '15 Jan 2025',
      readTime: '5 min',
      tags: ['Paie', 'Externalisation', 'Guide'],
    },
    {
      title: 'Les 5 erreurs à éviter en recrutement',
      excerpt: 'Identifiez les pièges courants du processus de recrutement et apprenez à les éviter pour attirer les meilleurs talents.',
      date: '10 Jan 2025',
      readTime: '7 min',
      tags: ['Recrutement', 'Conseils', 'Bonnes pratiques'],
    },
    {
      title: 'Digitalisation RH : par où commencer ?',
      excerpt: 'Un guide pratique pour entamer votre transformation digitale RH avec les bons outils et la bonne méthodologie.',
      date: '5 Jan 2025',
      readTime: '6 min',
      tags: ['Digital', 'Transformation', 'SIRH'],
    },
    {
      title: 'Le droit du travail pour les TPE/PME : l\'essentiel',
      excerpt: 'Comprendre les obligations légales essentielles en matière de droit du travail pour les petites et moyennes entreprises.',
      date: '28 Déc 2024',
      readTime: '8 min',
      tags: ['Juridique', 'Conformité', 'Guide'],
    },
    {
      title: 'Former ses managers : pourquoi et comment ?',
      excerpt: 'L\'importance de la formation managériale et les meilleures approches pour développer les compétences de vos équipes.',
      date: '20 Déc 2024',
      readTime: '6 min',
      tags: ['Formation', 'Management', 'Développement'],
    },
    {
      title: 'Onboarding réussi : les clés d\'une intégration efficace',
      excerpt: 'Les étapes essentielles pour accueillir et intégrer vos nouveaux collaborateurs dans les meilleures conditions.',
      date: '15 Déc 2024',
      readTime: '5 min',
      tags: ['Recrutement', 'Intégration', 'Bonnes pratiques'],
    },
  ];

  const allTags = Array.from(new Set(articles.flatMap(article => article.tags)));

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || article.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Ressources RH
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Guides, conseils et bonnes pratiques pour optimiser votre gestion des ressources humaines
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Rechercher un article..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge
              variant={selectedTag === null ? 'default' : 'outline'}
              className={`cursor-pointer ${selectedTag === null ? 'bg-blue-600' : ''}`}
              onClick={() => setSelectedTag(null)}
            >
              Tous
            </Badge>
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? 'default' : 'outline'}
                className={`cursor-pointer ${selectedTag === tag ? 'bg-blue-600' : ''}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredArticles.map((article, index) => (
            <BlogCard key={index} {...article} />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">Aucun article ne correspond à votre recherche.</p>
          </div>
        )}

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Pourquoi externaliser mes RH ?
              </h3>
              <p className="text-slate-600">
                L'externalisation RH vous permet de bénéficier d'une expertise professionnelle sans embaucher, 
                de gagner du temps sur les tâches administratives, et de garantir la conformité légale de vos pratiques.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Quels services puis-je externaliser ?
              </h3>
              <p className="text-slate-600">
                Vous pouvez externaliser tout ou partie de vos fonctions RH : recrutement, paie, formation, 
                conseil juridique, digitalisation des processus. Nos solutions sont modulables selon vos besoins.
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Comment se déroule la mise en place ?
              </h3>
              <p className="text-slate-600">
                Nous commençons par un audit gratuit de vos besoins, puis nous définissons ensemble un plan d'action 
                sur-mesure. La transition est progressive et accompagnée pour garantir une mise en place fluide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}