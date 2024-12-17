import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projets', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Conception Architecturale',
    'Étude de Projets', 
    'Assistance et Conseils',
    'Topographie',
    'Rénovation et Réhabilitation'
  ];

  return (
    <footer className="bg-btp-primary-700 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Colonne Entreprise */}
          <div>
            <h3 className="text-2xl font-bold mb-4">SM Enterprise <br />
            <span className="text-sm font-normal ">Entreprise de Construction Générale</span>

            </h3>
           
            <p className="text-btp-secondary-100">
              Votre partenaire de confiance en construction et travaux publics. 
              Nous transformons vos projets en réalités durables.
            </p>
            <div className="flex space-x-4 mt-6">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2 }}
                className="text-white hover:text-btp-accent-300"
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2 }}
                className="text-white hover:text-btp-accent-300"
              >
                <Twitter size={24} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2 }}
                className="text-white hover:text-btp-accent-300"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2 }}
                className="text-white hover:text-btp-accent-300"
              >
                <Instagram size={24} />
              </motion.a>
            </div>
          </div>

          {/* Liens Rapides */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="hover:text-btp-accent-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="hover:text-btp-accent-300 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contactez-nous</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <MapPin size={20} />
                <span>Abomey-Calavi, Benin</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={20} />
                <span>+229 01 97 40 63 74</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={20} />
                <span>smenterprise67@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de Copyright */}
        <div className="border-t border-btp-primary-500 mt-8 pt-6 text-center">
          <p>
            © {new Date().getFullYear()} SM Enterprise. Tous droits réservés.
          {/*   <br />
            <a 
              href="#" 
              className="hover:text-btp-accent-300 ml-4"
            >
              Mentions Légales
            </a>
            <a 
              href="#" 
              className="hover:text-btp-accent-300 ml-4"
            >
              Politique de Confidentialité
            </a> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;