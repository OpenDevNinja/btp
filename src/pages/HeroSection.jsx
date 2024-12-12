import React from 'react';
import { motion } from 'framer-motion';
import { Building, Construction, CheckCircle } from 'lucide-react';
import image1 from '../assets/image/image_3.jpg';
import { useNavigate } from 'react-router-dom';
const HomeHero = () => {


  const navigate = useNavigate();
  const handleDevis= () => {
    navigate('/devis'); 
  };
  const handleProjet = () => {
    navigate('/projects'); 
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100 
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full Background Image */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={image1} 
          alt="Construction Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 min-h-screen flex items-center"
      >
        <div className="text-white max-w-2xl space-y-6">
          <motion.h1 
            variants={itemVariants}
            className="text-5xl font-display font-bold text-white drop-shadow-lg"
          >
            Construisons l'Avenir Ensemble
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/90 leading-relaxed"
          >
            Votre partenaire de confiance en construction et travaux publics. 
            Nous transformons vos projets en réalités durables et innovantes.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex space-x-4"
          >
            <motion.button
            onClick={handleDevis}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-btp-accent-500 text-white px-8 py-3 rounded-full shadow-lg"
            >
              Demander un Devis
            </motion.button>
            <motion.button
               onClick={handleProjet}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-full"
            >
              Nos Projects
            </motion.button>
          </motion.div>

          {/* Key Advantages */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 mt-8"
          >
            {[
              { Icon: Construction, label: "Innovation" },
              { Icon: Building, label: "Qualité" },
              { Icon: CheckCircle, label: "Fiabilité" }
            ].map(({ Icon, label }) => (
              <motion.div 
                key={label} 
                variants={itemVariants}
                className="flex items-center space-x-2"
              >
                <Icon size={30} className="text-btp-accent-500" />
                <span className="text-white">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeHero;