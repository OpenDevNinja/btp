import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clipboard, Smile, PaintRoller } from 'lucide-react';
import imgCont from '../assets/image/img/de.jpg'

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

  const statItems = [
    {
      icon: <Users size={32} className="inline-block mr-2" />,
      number: '+100',
      label: "Employés",
      color: "text-btp-primary-500",
      delay: 0.2
    },
    {
      icon: <Clipboard size={32} className="inline-block mr-2" />,
      number: "+10",
      label: "Années d'expérience",
      color: "text-btp-accent-500",
      delay: 0.4
    },
    {
      icon: <Smile size={32} className="inline-block mr-2" />,
      number: "+150",
      label: "Clients heureux",
      color: "text-btp-primary-500",
      delay: 0.6
    },
    {
      icon: <PaintRoller size={32} className="inline-block mr-2" />,
      number: "+25",
      label: "Services de peinture",
      color: "text-btp-accent-500",
      delay: 0.8
    }
  ];

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
            
            <div className="grid grid-cols-2 gap-6">
              {statItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={statsVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  transition={{ delay: item.delay }}
                  className="bg-white p-6 rounded-lg shadow-btp-card h-full flex flex-col justify-center"
                >
                  <div className={`text-4xl font-display font-bold ${item.color} mb-2 flex items-center`}>
                    {item.icon}
                    {item.number}
                  </div>
                  <div className="text-btp-secondary-700">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionServicesPage;