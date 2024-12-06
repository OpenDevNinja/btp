import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Home, 
  Hammer, 
  Construction, 
  Hotel, 
  ArrowRight,
  X 
} from 'lucide-react';
import Helmet from '../components/Helmet';
import ServicesSection from './ServiceSection';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <Building2 className="w-16 h-16 text-btp-primary-500" />,
      title: "Construction de Maisons",
      description: "Réalisation de maisons individuelles clés en main.",
      details: [
        "Conception personnalisée",
        "Respect des normes environnementales",
        "Suivi de projet complet"
      ],
      images: ["/placeholder/maison-1.jpg", "/placeholder/maison-2.jpg"]
    },
    {
      id: 2,
      icon: <Hammer className="w-16 h-16 text-btp-primary-500" />,
      title: "Maintenance des Bâtiments",
      description: "Services complets d'entretien et de rénovation.",
      details: [
        "Diagnostics techniques",
        "Rénovation énergétique",
        "Interventions rapides"
      ],
      images: ["/placeholder/maintenance-1.jpg", "/placeholder/maintenance-2.jpg"]
    },
    {
      id: 3,
      icon: <Construction className="w-16 h-16 text-btp-primary-500" />,
      title: "Gestion de Projets Immobiliers",
      description: "Accompagnement total de vos projets de construction.",
      details: [
        "Études de faisabilité",
        "Coordination des intervenants",
        "Optimisation des coûts"
      ],
      images: ["/placeholder/projet-1.jpg", "/placeholder/projet-2.jpg"]
    },
    {
      id: 4,
      icon: <Hotel className="w-16 h-16 text-btp-primary-500" />,
      title: "Travaux Publics",
      description: "Infrastructure et aménagement urbain.",
      details: [
        "Voiries et réseaux",
        "Infrastructures publiques",
        "Aménagements urbains"
      ],
      images: ["/placeholder/travaux-1.jpg", "/placeholder/travaux-2.jpg"]
    }
  ];

  return (
    <div >
      <Helmet title="Nos Services" subTitle="Découvrez nos services et nos prestations" />
      {/* Services Grid */}
     <ServicesSection />

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 z-10"
                >
                  <X className="w-8 h-8 text-gray-600 hover:text-red-500" />
                </button>

                <div className="grid md:grid-cols-2">
                  {/* Images Section */}
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      {selectedService.images.map((img, index) => (
                        <img 
                          key={index}
                          src={img} 
                          alt={selectedService.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="p-8">
                    <h2 className="text-3xl font-bold mb-4 font-display">
                      {selectedService.title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {selectedService.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">
                        Nos Prestations
                      </h3>
                      <ul className="space-y-2">
                        {selectedService.details.map((detail, index) => (
                          <li 
                            key={index} 
                            className="flex items-center text-btp-primary-500"
                          >
                            <ArrowRight className="mr-2 w-5 h-5" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-btp-accent-500 text-white px-6 py-3 rounded-full hover:bg-btp-accent-300 transition"
                    >
                      Demander un Devis
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Processus de Service */}
      <section className="bg-btp-secondary-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-display">
            Notre Processus de Service
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                title: "Consultation", 
                description: "Analyse de vos besoins et objectifs.",
                icon: <Home className="w-12 h-12 text-btp-primary-500" />
              },
              { 
                title: "Conception", 
                description: "Développement de solutions sur mesure.",
                icon: <Construction className="w-12 h-12 text-btp-primary-500" />
              },
              { 
                title: "Réalisation", 
                description: "Exécution précise et professionnelle.",
                icon: <Hammer className="w-12 h-12 text-btp-primary-500" />
              },
              { 
                title: "Livraison", 
                description: "Remise du projet dans les délais convenus.",
                icon: <Building2 className="w-12 h-12 text-btp-primary-500" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white p-6 rounded-xl text-center shadow-btp-card"
              >
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;