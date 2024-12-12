import React from 'react'; 
import { motion } from 'framer-motion'; 
import imgCont from '../assets/image/img/de.jpg';
import ServiceIcons from '../components/ServiceIcons';

const ConstructionServicesPage = () => {
  const imageVariants = {
    initial: { x: -100, opacity: 0, scale: 0.95 },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const textVariants = {
    initial: { x: 100, opacity: 0, scale: 0.95 },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="bg-btp-industrial-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            variants={imageVariants}
            initial="initial"
            animate="animate"
            className="flex items-center justify-center"
          >
            <img
              src={imgCont}
              alt="Travaux de construction"
              className="rounded-lg shadow-btp-card w-full h-full object-cover max-h-[600px]"
            />
          </motion.div>
          
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl font-display font-bold text-btp-primary-700 mb-4">
              QUI SOMMES NOUS ?
            </h1>
            <p className="text-btp-secondary-700 text-lg mb-6">
              SM Entreprise est une entreprise de construction générale spécialisée dans 
              la construction immobilière et tous les travaux de génie civil.
              Nous travaillons pour le compte des particuliers, de professionnels 
              et notre entreprise se développe sur une dynamique de multiples 
              compétence ayant une force de réseau comptant différents partenaires dans le domaine 
              de la construction et génie civil en général.
              Notre état d'esprit est orienté vers la complémentarité de chacun des acteurs de notre 
              société afin d'acquérir et de renforcer nos compétences techniques.
            </p>
            
            <ServiceIcons />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionServicesPage;