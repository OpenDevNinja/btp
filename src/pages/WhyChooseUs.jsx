import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Star, 
  Rocket, 
  Users, 
  CheckCircle, 
  Target 
} from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield size={50} className="text-btp-accent-500" />,
      title: "Engagement Qualité",
      description: "Une politique rigoureuse de gestion de projet garantissant la conformité et l'excellence technique."
    },
    {
      icon: <Users size={50} className="text-btp-accent-500" />,
      title: "Équipe Dynamique",
      description: "Une équipe jeune, compétente et passionnée, animée par l'innovation et le professionnalisme."
    },
    {
      icon: <Target size={50} className="text-btp-accent-500" />,
      title: "Précision & Expertise",
      description: "Respect méticuleux des cahiers des charges et des spécifications techniques les plus exigeantes."
    },
    {
      icon: <Rocket size={50} className="text-btp-accent-500" />,
      title: "Solutions Innovantes",
      description: "Une approche créative qui transforme vos défis en opportunités de développement."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 50, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section className="bg-gradient-to-br from-btp-primary-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-btp-primary-700 mb-4">
            POURQUOI NOUS CHOISIR ?
          </h2>
          <p className="text-lg text-btp-secondary-500 max-w-2xl mx-auto">
            Nous garantissons une gestion efficace des travaux par une équipe jeune, dynamique et compétente. 
            Notre objectif unique : la réussite de vos projets dans les règles de l'art.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 bg-white rounded-2xl 
                         shadow-btp-card hover:shadow-btp-hover 
                         transition-all duration-300 
                         transform hover:-translate-y-4 
                         text-center"
            >
              <div className="mb-6 flex justify-center">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold text-btp-primary-500 mb-4 
                             group-hover:text-btp-accent-500 
                             transition-colors">
                {reason.title}
              </h3>
              <p className="text-btp-secondary-500 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-3 
                          bg-btp-primary-50 px-6 py-3 
                          rounded-full shadow-btp-card">
            <CheckCircle className="text-btp-accent-500" size={24} />
            <span className="text-btp-primary-700 font-medium">
              Votre Succès, Notre Priorité
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;