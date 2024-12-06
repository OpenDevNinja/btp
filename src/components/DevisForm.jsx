import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Construction, 
  Home, 
  Send, 
  CheckCircle2 
} from 'lucide-react';


import sideImage from '../assets/image/catalogue/cat4.jpeg'

const DevisForm = () => {
  const [formData, setFormData] = useState({
    projectCategory: '',
    name: '',
    email: '',
    phone: '',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const projectCategories = [
    "Adduction d'eau",
    "Aluminium",
    "Aménagement foncier",
    "Architectes",
    "Ascenseurs",
    "Assainissement / Canalisations",
    "Bois",
    "Bâtiment / Travaux publics",
    "Béton",
    "Carrelage",
    "Carrière - Concassage",
    "Chaudronnerie",
    "Construction",
    "Constructions métalliques",
    "Eau / Forage",
    "Ébénisterie",
    "Étanchéité",
    "Ferronneries Électricité",
    "Plomberie",
    "Climatisation / Chauffage",
    "Peinture et Décoration",
    "Revêtements de sol",
    "Toiture / Couverture",
    "Serrurerie",
    "Isolation thermique et acoustique",
    "Énergie renouvelable (solaire, éolien)",
    "Ingénierie et bureau d'études",
    "Matériaux recyclés pour construction",
    "Gestion des déchets de chantier",
    "Sécurité incendie",
    "Paysagisme",
    "Voiries et Réseaux Divers (VRD)",
    "Maçonnerie",
    "Menuiserie extérieure",
    "Menuiserie intérieure"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-btp-card overflow-hidden grid md:grid-cols-2"
      >
        <div className="hidden md:block">
          <img 
            src={sideImage} 
            alt="Projet réussi" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="p-12 text-center flex flex-col justify-center">
          <CheckCircle2 
            size={80} 
            className="mx-auto text-btp-accent-500 mb-6" 
          />
          <h2 className="text-3xl font-display font-bold text-btp-primary-700 mb-4">
            Merci pour votre demande !
          </h2>
          <p className="text-btp-secondary-500 mb-6">
            Votre demande de devis a été reçue. Notre équipe vous contactera dans les 24h.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSubmitted(false)}
            className="bg-btp-accent-500 text-white px-8 py-3 rounded-full hover:bg-btp-accent-300 transition-all"
          >
            Nouvelle Demande
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-btp-primary-50 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4"
      >
        <div className="bg-white rounded-2xl shadow-btp-card overflow-hidden grid md:grid-cols-2">
          {/* Side Image */}
          <div className="hidden md:block relative">
            <img 
              src={sideImage} 
              alt="Projet de construction" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-btp-primary-700 opacity-50"></div>
          </div>

          {/* Form */}
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-display font-bold text-btp-primary-700 mb-4">
                Demande de Devis
              </h2>
              <p className="text-btp-secondary-500">
                Décrivez votre projet, nous vous conseillons.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-btp-secondary-700 font-semibold mb-2">
                  Catégorie du Projet
                </label>
                <select
                  className="w-full rounded-lg border-btp-secondary-300 focus:ring-btp-accent-500"
                  value={formData.projectCategory}
                  onChange={(e) => setFormData({
                    ...formData, 
                    projectCategory: e.target.value
                  })}
                  required
                >
                  <option value="">Sélectionnez une catégorie</option>
                  {projectCategories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-btp-secondary-700 font-semibold mb-2">
                    Nom Complet
                  </label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full rounded-lg border-btp-secondary-300 focus:ring-btp-accent-500"
                    value={formData.name}
                    onChange={(e) => setFormData({
                      ...formData, 
                      name: e.target.value
                    })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-btp-secondary-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full rounded-lg border-btp-secondary-300 focus:ring-btp-accent-500"
                    value={formData.email}
                    onChange={(e) => setFormData({
                      ...formData, 
                      email: e.target.value
                    })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-btp-secondary-700 font-semibold mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  placeholder="+01 23 45 67 89"
                  className="w-full rounded-lg border-btp-secondary-300 focus:ring-btp-accent-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({
                    ...formData, 
                    phone: e.target.value
                  })}
                  required
                />
              </div>

              <div>
                <label className="block text-btp-secondary-700 font-semibold mb-2">
                  Détails du Projet
                </label>
                <textarea
                  placeholder="Décrivez votre projet en quelques mots..."
                  rows={4}
                  className="w-full rounded-lg border-btp-secondary-300 focus:ring-btp-accent-500"
                  value={formData.details}
                  onChange={(e) => setFormData({
                    ...formData, 
                    details: e.target.value
                  })}
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-btp-accent-500 text-white py-3 rounded-full 
                           hover:bg-btp-accent-300 transition-all 
                           flex items-center justify-center text-lg font-semibold"
              >
                <Send className="mr-3" size={24} /> Envoyer ma Demande
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DevisForm;