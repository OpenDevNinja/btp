import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Target, 
  Clock, 
  Users, 
  CheckCircle 
} from 'lucide-react';
import Helmet from '../components/Helmet';

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
  hidden: { y: 50, opacity: 0 },
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

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Marie Dupont",
      role: "PDG",
      image: "https://storyblok-cdn.photoroom.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp",
      description: "Visionnaire passionnée avec plus de 20 ans d'expérience dans le secteur du BTP."
    },
    {
      name: "Jean Martin",
      role: "Directeur Technique",
      image: "https://media.istockphoto.com/id/1476170969/fr/photo/portrait-dun-jeune-homme-pr%C3%AAt-%C3%A0-lemploi-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=MHYG_PKO--qrV8DXKd-3YNeq09fjIEzx2FdZCfdcUL4=",
      description: "Expert technique innovant, garant de la qualité et de l'excellence technique."
    },
    {
      name: "Sophie Leroy",
      role: "Responsable de Projet",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2UlMjBkZSUyMHByb2ZpbCUyMHByb2ZldGlvbm5lbHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Coordinatrice talentueuse, assurant le succès de chaque projet avec précision."
    },
    

  ];

  const valeurs = [
    {
      icon: <Target size={50} className="text-btp-accent-500 transition-transform group-hover:scale-110" />,
      titre: "Précision",
      description: "Une approche méticuleuse dans chaque détail de nos projets, transformant les défis techniques en solutions innovantes."
    },
    {
      icon: <Clock size={50} className="text-btp-accent-500 transition-transform group-hover:scale-110" />,
      titre: "Efficacité",
      description: "Optimisation des ressources et respect strict des délais, sans compromettre la qualité et l'innovation."
    },
    {
      icon: <Users size={50} className="text-btp-accent-500 transition-transform group-hover:scale-110" />,
      titre: "Collaboration",
      description: "Communication transparente et partenariale, plaçant nos clients au cœur de notre processus de création."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-btp-primary-50 to-white min-h-screen">
      <Helmet title="Notre Histoire, Notre Passion" subTitle="Nous sommes une équipe passionnée de création." />
      
      {/* Hero À Propos */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 text-center"
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 10 
            }}
            className="text-6xl font-display font-bold text-btp-primary-700 mb-6 
                       bg-gradient-to-r from-btp-primary-500 to-btp-accent-500 
                       text-transparent bg-clip-text"
          >
            Notre Histoire, Notre Passion
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            className="text-xl text-btp-secondary-500 max-w-4xl mx-auto leading-relaxed"
          >
            Fondée en 2005, BTP Avenir est née de la vision de créer des espaces 
            qui transforment la vie des gens. Avec plus de 15 ans d'expérience, 
            nous sommes devenus un acteur majeur dans le secteur du BTP, 
            en alliant innovation technique et engagement humain.
          </motion.p>
        </div>
      </motion.section>

      {/* Valeurs */}
      <section className="py-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {valeurs.map((valeur, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group text-center p-8 bg-white 
                           rounded-xl shadow-btp-card 
                           hover:shadow-btp-hover 
                           transition-all duration-300 
                           transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-6 text-btp-primary-500">
                  {valeur.icon}
                </div>
                <h3 className="text-3xl font-bold text-btp-primary-500 mb-4 
                               group-hover:text-btp-accent-500 transition-colors">
                  {valeur.titre}
                </h3>
                <p className="text-btp-secondary-500 leading-relaxed">
                  {valeur.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* Chiffres Clés */}
      <section className="py-20 bg-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Ans d'Expérience", icon: <Award size={50} className="mx-auto text-btp-accent-500" /> },
              { value: "250+", label: "Projets Réalisés", icon: <CheckCircle size={50} className="mx-auto text-btp-accent-500" /> },
              { value: "100%", label: "Satisfaction Client", icon: <Users size={50} className="mx-auto text-btp-accent-500" /> },
              { value: "50+", label: "Collaborateurs", icon: <Users size={50} className="mx-auto text-btp-accent-500" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 bg-btp-primary-50 
                           rounded-xl shadow-btp-card 
                           hover:shadow-btp-hover 
                           transition-all duration-300 
                           transform hover:-translate-y-2"
              >
                <div className="mb-4 text-btp-primary-500">
                  {stat.icon}
                </div>
                <h3 className="text-5xl font-bold text-btp-primary-500 
                               group-hover:text-btp-accent-500 transition-colors">
                  {stat.value}
                </h3>
                <p className="text-btp-secondary-500 mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Équipe */}
      <section className="py-20 bg-btp-primary-50">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4"
        >
          <div className="text-center mb-16">
            <motion.h2 
              variants={itemVariants}
              className="text-5xl font-display font-bold text-btp-primary-700 mb-6
                         bg-gradient-to-r from-btp-primary-500 to-btp-accent-500 
                         text-transparent bg-clip-text"
            >
              Notre Équipe
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-btp-secondary-500 max-w-3xl mx-auto"
            >
              Des professionnels passionnés et expérimentés, unis par une vision commune d'excellence
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group text-center"
              >
                <div className="mb-6 flex justify-center">
                  <motion.img 
                    src={member.image} 
                    alt={member.name} 
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-72 h-72 object-cover rounded-full 
                               shadow-btp-card group-hover:shadow-btp-hover 
                               transition-all duration-300"
                  />
                </div>
                <h3 className="text-3xl font-bold text-btp-primary-500 mb-2 
                               group-hover:text-btp-accent-500 transition-colors">
                  {member.name}
                </h3>
                <p className="text-btp-secondary-500 mb-4 font-semibold">
                  {member.role}
                </p>
                <p className="text-btp-secondary-500 max-w-sm mx-auto">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      
    </div>
  );
};

export default AboutPage;