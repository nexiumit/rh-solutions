import ServiceCard from '@/components/ServiceCard';
import { Users, FileText, GraduationCap, Scale, Workflow } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Recrutement',
      description: 'Nous vous accompagnons dans l\'identification, la sélection et l\'intégration de vos futurs talents.',
      benefits: [
        'Définition du profil et sourcing ciblé',
        'Présélection et entretiens qualifiés',
        'Accompagnement à l\'intégration',
        'Garantie de remplacement',
      ],
      icon: Users,
      image: '/assets/service-recruitment_variant_1.jpg',
    },
    {
      title: 'Gestion de paie',
      description: 'Externalisation complète de votre paie : bulletins, déclarations sociales, et conformité garantie.',
      benefits: [
        'Bulletins de paie conformes et sécurisés',
        'Déclarations sociales (DSN, charges)',
        'Veille juridique et mise à jour',
        'Support dédié et réactivité',
      ],
      icon: FileText,
      image: '/assets/service-payroll_variant_1.jpg',
    },
    {
      title: 'Formation des managers',
      description: 'Développez les compétences managériales de vos équipes avec des formations sur-mesure.',
      benefits: [
        'Programmes adaptés à vos besoins',
        'Formateurs experts et certifiés',
        'Formats flexibles (présentiel/distanciel)',
        'Suivi et évaluation des compétences',
      ],
      icon: GraduationCap,
      image: '/assets/service-training_variant_1.jpg',
    },
    {
      title: 'Conseil en droit du travail',
      description: 'Bénéficiez d\'un accompagnement juridique RH pour sécuriser vos décisions et garantir la conformité.',
      benefits: [
        'Conseil sur les contrats de travail',
        'Accompagnement disciplinaire et rupture',
        'Audit de conformité légale',
        'Veille réglementaire permanente',
      ],
      icon: Scale,
      image: '/assets/service-legal_variant_1.jpg',
    },
    {
      title: 'Digitalisation des processus RH',
      description: 'Optimisez votre gestion RH avec des outils digitaux modernes et performants.',
      benefits: [
        'Mise en place de SIRH adaptés',
        'Dématérialisation des documents',
        'Automatisation des processus',
        'Formation et accompagnement au changement',
      ],
      icon: Workflow,
      image: '/assets/service-digital_variant_1.jpg',
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nos Services RH
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Une offre complète et modulable pour accompagner votre entreprise à chaque étape de son développement
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-slate-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Besoin d'un service personnalisé ?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Nos experts RH sont à votre écoute pour construire une solution sur-mesure adaptée à vos besoins spécifiques
          </p>
          <a href="/contact" className="inline-block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contactez-nous
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}