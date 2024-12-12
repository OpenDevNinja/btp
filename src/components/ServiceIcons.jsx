import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, FolderKanban } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServiceIcons = () => {
  const navigate = useNavigate();

  const statsVariants = {
    initial: { y: 50, opacity: 0, scale: 0.95 },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 150
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <motion.div
        variants={statsVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        onClick={() => navigate('/devis')}
        className="flex flex-col items-center justify-center 
        bg-white p-4 rounded-lg shadow-btp-card 
        hover:shadow-btp-hover transition-shadow duration-300
        cursor-pointer"
      >
        <ClipboardList 
          size={48} 
          className="text-btp-primary-500 mb-2" 
        />
        <span className="text-btp-secondary-700 font-display font-semibold text-center">
          Demander un Devis
        </span>
      </motion.div>

      <motion.div
        variants={statsVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        onClick={() => navigate('/realisations')}
        className="flex flex-col items-center justify-center 
        bg-white p-4 rounded-lg shadow-btp-card 
        hover:shadow-btp-hover transition-shadow duration-300
        cursor-pointer"
      >
        <FolderKanban 
          size={48} 
          className="text-btp-secondary-500 mb-2" 
        />
        <span className="text-btp-secondary-700 font-display font-semibold text-center">
          Nos Réalisations
        </span>
      </motion.div>
    </div>
  );
};

export default ServiceIcons;