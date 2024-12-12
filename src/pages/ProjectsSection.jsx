import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';
import image1 from '../assets/image/img/2.jpg';
import image11 from '../assets/image/img/1.jpg';
import image2 from '../assets/image/img/C1.jpg';
import image21 from '../assets/image/img/C.jpeg';
import image6 from '../assets/image/img/v1A1.jpg';
import image61 from '../assets/image/img/v1A2.jpg';
import image62 from '../assets/image/img/v1A3.jpg';
import image63 from '../assets/image/img/v1A4.jpg';
import image64 from '../assets/image/img/v1A5.jpg';
import image65 from '../assets/image/img/v1A6.jpg';
import image5 from '../assets/image/img/F_1.jpg';
import image51 from '../assets/image/img/F_2.jpg';
import image52 from '../assets/image/img/F_3.jpg';
import image3 from '../assets/image/img/11.jpg';
import image31 from '../assets/image/img/22.jpg';
import image4 from '../assets/image/img/B.jpeg';
import image41 from '../assets/image/img/B_1.jpg';
import image42 from '../assets/image/img/B_3.jpg';
import image7 from '../assets/image/img/D_1.jpg';
import image71 from '../assets/image/img/D_2.jpg';
import image8 from '../assets/image/img/projet.jpg';
const GalleryModalCarousel = ({ items }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedItemIndex !== null) {
      setCurrentImageIndex(0);
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          const images = items[selectedItemIndex].images;
          return (prevIndex + 1) % images.length;
        });
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [selectedItemIndex, items]);

  const openModal = (index) => {
    setSelectedItemIndex(index);
  };

  const closeModal = () => {
    setSelectedItemIndex(null);
  };

  const handleNext = () => {
    const images = items[selectedItemIndex].images;
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    const images = items[selectedItemIndex].images;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
          >
            <div className="relative group">
              <img 
                src={item.mainImage} 
                alt={item.title} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <button 
                onClick={() => openModal(index)}
                className="absolute top-4 right-4 bg-white/60 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <Camera className="text-gray-800 w-6 h-6" />
              </button>
            </div>
            <div className="p-4">
            
              <p className="text-btp-secondary-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Carousel */}
      {selectedItemIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-hidden">
          <div className="relative w-full max-w-6xl h-[90vh] flex flex-col">
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="self-end mb-4 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>

            {/* Image Container */}
            <div className="flex-grow relative flex items-center justify-center overflow-hidden">
              {/* Image Wrapper */}
              <div className="max-w-full max-h-full flex items-center justify-center relative w-full h-full">
                <img 
                  src={items[selectedItemIndex].images[currentImageIndex]} 
                  alt={`Image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />

                {/* Mobile Navigation */}
                <button 
                  onClick={handlePrev}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 
                    bg-white/50 hover:bg-white/75 rounded-full p-2 
                    transition-all duration-300 md:hidden"
                >
                  <ChevronLeft className="text-gray-800 w-6 h-6" />
                </button>

                <button 
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 
                    bg-white/50 hover:bg-white/75 rounded-full p-2 
                    transition-all duration-300 md:hidden"
                >
                  <ChevronRight className="text-gray-800 w-6 h-6" />
                </button>
              </div>

              {/* Desktop Navigation */}
              <button 
                onClick={handlePrev}
                className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 
                  bg-white/50 hover:bg-white/75 rounded-full p-2 
                  transition-all duration-300"
              >
                <ChevronLeft className="text-gray-800 w-8 h-8" />
              </button>

              <button 
                onClick={handleNext}
                className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 
                  bg-white/50 hover:bg-white/75 rounded-full p-2 
                  transition-all duration-300"
              >
                <ChevronRight className="text-gray-800 w-8 h-8" />
              </button>
            </div>

            {/* Progress Indicators */}
            <div className="mt-4 flex justify-center space-x-2">
              {items[selectedItemIndex].images.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-3 h-3 rounded-full 
                    ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}
                    transition-all duration-300`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const galleryItems = [
    {
      title: "Projet 1",
      description: "Projet de construction d'un bâtiment de type R+2",
      mainImage: image1,
      images: [image1, image11]
    },
    {
      title: "Projet 2", 
      description: "Projet de construction d'un bâtiment de type R+1",
      mainImage: image2,
      images: [image2, image21]
    },
    {
      title: "Projet 3", 
      description: "Projet de construction d'un bâtiment de type R+1",
      mainImage: image6,
      images: [image6, image61, image62, image63, image64, image65]
    },
    {
      title: "Projet 4", 
      description: "Projet de construction d'un bâtiment de type R+2",
      mainImage: image5,
      images: [image5, image51, image52]
    },
    {
      title: "Projet 5", 
      description: "Projet de construction d'un bâtiment de type R+2",
      mainImage: image3,
      images: [image3, image31]
    },
    {
      title: "Projet 6", 
      description: "Projet de construction d'un bâtiment de type R+1",
      mainImage: image4,
      images: [image4]
    },
    {
      title: "Projet 7", 
      description: "Projet de construction d'un bâtiment de type R+2",
      mainImage: image41,
      images: [image41, image42]
    },
    {
      title: "Projet 8", 
      description: "Projet de construction d'un bâtiment de type R+1",
      mainImage: image7,
      images: [image7, image71]
    },
    {
      title: "Projet 9", 
      description: "Projet de construction d'un showroom pour le compte de la société ATINGAN SA",
      mainImage: image8,
      images: [image8]
    },
  ];

  const handleSeeMore = () => {
    setVisibleProjects(prevVisible => prevVisible + 3);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-12 mt-2"
      >
        <h1 className="text-5xl font-display font-bold text-btp-primary-700 mb-4">
          Nos Projects
        </h1>
        <p className="max-w-2xl mx-auto text-btp-secondary-700">
          Découvrez une sélection de nos projets les plus remarquables, 
          témoignant de notre expertise et de notre passion pour la construction.
        </p>
      </motion.div>
      
      <GalleryModalCarousel items={galleryItems.slice(0, visibleProjects)} />
      
      {visibleProjects < galleryItems.length && (
        <div className="flex justify-center mt-8">
          <motion.button
            onClick={handleSeeMore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-8 py-3 bg-btp-accent-500 
              text-white rounded-full font-semibold text-lg 
              hover:bg-btp-accent-600 transition-all group"
          >
            Voir Plus 
            <ChevronRight 
              className="ml-2 group-hover:translate-x-1 transition-transform" 
              size={24} 
            />
          </motion.button>
        </div>
      )}
    </>
  );
};

export default ProjectsSection;