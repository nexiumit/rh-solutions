import ContactForm from '@/components/ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from 'react-icons/md';
import contactIllustration from '/assets/contact-illustration.jpg';

export default function Contact() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Notre équipe d'experts RH est à votre écoute pour répondre à vos questions et vous accompagner
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informations de contact</CardTitle>
                <CardDescription>
                  Plusieurs moyens de nous joindre
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MdPhone className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">Téléphone</p>
                    <p className="text-slate-600">+33 1 23 45 67 89</p>
                    <p className="text-sm text-slate-500">Lun-Ven 9h-18h</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MdEmail className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <p className="text-slate-600">contact@rh-solutions.fr</p>
                    <p className="text-sm text-slate-500">Réponse sous 24h</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MdLocationOn className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">Adresse</p>
                    <p className="text-slate-600">
                      123 Avenue des Champs-Élysées<br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MdAccessTime className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900">Horaires</p>
                    <p className="text-slate-600">
                      Lundi - Vendredi<br />
                      9h00 - 18h00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="aspect-video overflow-hidden rounded-lg">
              <img 
                src={contactIllustration}
                alt="Contact RH Solutions" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Demande de devis / Rendez-vous</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire et nous vous recontacterons dans les plus brefs délais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Notre localisation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2919184348247!2d2.3059149156744993!3d48.86983997928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fec70fb1d8f%3A0x40b82c3688c9460!2sChamps-%C3%89lys%C3%A9es%2C%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RH Solutions Location"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}