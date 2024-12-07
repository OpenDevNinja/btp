import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, ArrowRight, X, ChevronRight } from 'lucide-react';

// Import your images (ensure paths are correct)
import image1 from '../assets/image/image_3.jpg';
import image2 from '../assets/image/image_2.jpg';
import image3 from '../assets/image/image_5.jpg';
import image4 from '../assets/image/image_10.jpg';
import image5 from '../assets/image/image_11.jpg';
import image6 from '../assets/image/image_12.jpg';

const ProjectsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      desciption: "Résidence Moderne",
      image: image2,
      galerie: [ image2, image3, image4, image5, image6],
    },
    {
      desciption: "Centre Commercial",
      
      image: image3,
      galerie: [ image2, image3, image4, image5, image6],
     },
    {
      desciption: "Rénovation Urbaine",
     
      image: image6,
      galerie: [ image3, image2, image4, image5, image6],
          },
    {
      desciption: "Infrastructure Moderne",
      
      image: image4,
      galerie: [image4, image2, image4, image5, image6],
      },
    {
      desciption: "Complexe Résidentiel",
   
      image: image5,
      galerie: [ image5, image2, image4, image5, image6],
      
    }
  ];

  const handleSeeMore = () => {
    setVisibleProjects(prevVisible => 
      prevVisible + 3 <= projects.length ? prevVisible + 3 : projects.length
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  return (
    <section className="py-20 bg-gradient-to-br from-btp-primary-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold text-btp-primary-700 mb-4 tracking-tight">
            Nos Réalisations
          </h2>
          <p className="text-xl text-btp-secondary-500 max-w-2xl mx-auto">
            Découvrez nos projets innovants qui redéfinissent les espaces et améliorent la qualité de vie
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className={`relative bg-white rounded-2xl overflow-hidden shadow-btp-hover 
                transition-all duration-300 transform ${
                  hoveredProject === index 
                    ? 'ring-4 ring-btp-accent-500/30' 
                    : 'ring-0'
                }`}
            >
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-300 
                    group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 
                  group-hover:bg-opacity-20 transition-all duration-300"></div>
                <motion.button
                  onClick={() => setSelectedImage(project.image)}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm 
                    text-white p-2 rounded-full hover:bg-white/40 transition-all"
                >
                  <Camera size={24} />
                </motion.button>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <p className= "text-btp-primary-500">
                    {project.desciption}
                  </p>
                 
                </div>
               
              
              </div>
            </motion.div>
          ))}
        </motion.div>

        {visibleProjects < projects.length && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={handleSeeMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-8 py-3 bg-btp-accent-500 
                text-white rounded-full font-semibold text-lg 
                hover:bg-btp-accent-600 transition-all group"
            >
              Voir Plus de Projets
              <ChevronRight 
                className="ml-2 group-hover:translate-x-1 transition-transform" 
                size={24} 
              />
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Enhanced Image Modal with Detailed Animations */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center 
              bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Projet agrandi" 
                className="max-w-full max-h-[90vh] object-contain 
                  rounded-2xl shadow-2xl"
              />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 bg-white/20 backdrop-blur-sm 
                  text-white p-2 rounded-full hover:bg-white/40 transition-all"
              >
                <X size={24} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;