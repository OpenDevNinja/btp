import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Action = () => {
  const navigate = useNavigate();
  
  const handleDevis = () => {
    navigate('/devis'); 
  };
  
  const handleProjet = () => {
    navigate('/projects'); 
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex items-center justify-center bg-cover bg-center relative"
    >
      <div className="w-full text-center text-white bg-btp-primary-700 p-6 md:p-12">
        <motion.h2 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 font-display"
        >
          Construisons l'Avenir Ensemble
        </motion.h2>
        <p className="text-base md:text-xl mb-6 md:mb-8">
          Expertise, Innovation et Qualité dans chaque Projet
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-5">
          <motion.button 
            onClick={handleDevis}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-full sm:w-auto bg-btp-accent-500 px-6 py-3 rounded-full text-white hover:bg-btp-accent-300 transition"
          >
            Demander un Devis <ArrowRight className="inline ml-2" />
          </motion.button>
          <motion.button 
            onClick={handleProjet}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-full sm:w-auto border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            Nos Projets <Star className="inline ml-2" />
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default Action;