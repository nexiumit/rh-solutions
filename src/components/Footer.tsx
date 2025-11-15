import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import logoVariant from '/assets/logo-rh-solutions_variant_1.png';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src={logoVariant}
                alt="RH Solutions" 
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-lg font-bold text-white">RH Solutions</span>
            </div>
            <p className="text-sm">
              Votre partenaire RH de confiance pour accompagner la croissance de votre entreprise.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-blue-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-blue-400 transition-colors">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-blue-400 transition-colors">
                  Ressources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li className="text-sm">Recrutement</li>
              <li className="text-sm">Gestion de paie</li>
              <li className="text-sm">Formation managers</li>
              <li className="text-sm">Conseil juridique</li>
              <li className="text-sm">Digitalisation RH</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <MdPhone className="h-4 w-4" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <MdEmail className="h-4 w-4" />
                <span>contact@rh-solutions.fr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2025 RH Solutions. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/mentions-legales" className="hover:text-blue-400 transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="hover:text-blue-400 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}