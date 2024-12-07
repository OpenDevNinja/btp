import React, { useState, useEffect } from 'react';
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';
import image1 from '../assets/image/image_3.jpg';
import image2 from '../assets/image/image_2.jpg';
import image3 from '../assets/image/image_5.jpg';
import image4 from '../assets/image/image_10.jpg';
import image5 from '../assets/image/image_11.jpg';
import image6 from '../assets/image/image_12.jpg';

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

// Example Usage
const ProjectsSection = () => {
  const galleryItems = [
    {
      title: "Projet 1",
      description: "Description détaillée du projet 1",
      mainImage: image1,
      images: [
        image1, image2, image3, image4, image5, image6
      ]
    },
    {
      title: "Projet 2", 
      description: "Description détaillée du projet 2",
      mainImage: image3,
      images: [
        image3, image4, image5, image6
      ]
    }
  ];

  return <GalleryModalCarousel items={galleryItems} />;
};

export default ProjectsSection;