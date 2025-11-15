import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { FaUsers, FaFileAlt, FaGraduationCap, FaBalanceScale, FaProjectDiagram, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import heroImage from '/assets/hero-team-collaboration.jpg';
import serviceRecruitment from '/assets/service-recruitment.jpg';
import servicePayroll from '/assets/service-payroll.jpg';
import serviceTraining from '/assets/service-training.jpg';
import serviceLegal from '/assets/service-legal.jpg';
import serviceDigital from '/assets/service-digital.jpg';

export default function Index() {
  const services = [
    {
      icon: FaUsers,
      title: 'Recrutement',
      description: 'Sourcing, sélection et intégration de vos futurs talents',
      image: serviceRecruitment,
    },
    {
      icon: FaFileAlt,
      title: 'Gestion de paie',
      description: 'Externalisation complète de votre paie et déclarations sociales',
      image: servicePayroll,
    },
    {
      icon: FaGraduationCap,
      title: 'Formation managers',
      description: 'Développement des compétences managériales de vos équipes',
      image: serviceTraining,
    },
    {
      icon: FaBalanceScale,
      title: 'Conseil juridique',
      description: 'Accompagnement en droit du travail et conformité',
      image: serviceLegal,
    },
    {
      icon: FaProjectDiagram,
      title: 'Digitalisation RH',
      description: 'Optimisation de vos processus RH avec des outils modernes',
      image: serviceDigital,
    },
  ];

  const benefits = [
    'Expertise RH dédiée sans embauche',
    'Gain de temps sur les tâches administratives',
    'Conformité légale garantie',
    'Solutions sur-mesure adaptées à votre croissance',
    'Accompagnement digital et moderne',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Votre partenaire RH externalisé pour TPE/PME
              </h1>
              <p className="text-xl text-blue-100">
                Nous accompagnons les TPE/PME dans la gestion externalisée de leurs ressources humaines, 
                du recrutement à la paie, avec une approche sur-mesure et digitale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    Demander un devis gratuit
                    <FaArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Découvrir nos services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-in fade-in slide-in-from-right duration-700 delay-300">
              <img 
                src={heroImage}
                alt="Équipe RH Solutions" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Pourquoi externaliser vos RH ?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Concentrez-vous sur votre cœur de métier pendant que nous gérons vos ressources humaines
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <FaCheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Nos 5 services principaux
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Une offre complète pour répondre à tous vos besoins RH
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Voir tous nos services
                <FaArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à transformer votre gestion RH ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un audit gratuit de vos besoins RH et découvrez comment nous pouvons vous aider
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Demander un audit gratuit
              <FaArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}