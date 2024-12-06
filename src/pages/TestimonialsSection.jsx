import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Directrice de projet",
      company: "Habitat Moderne",
      quote: "Une équipe exceptionnelle qui a transformé notre vision en réalité. Leur attention aux détails et leur professionnalisme sont vraiment remarquables.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Jean-Pierre Martin",
      role: "Propriétaire d'entreprise",
      company: "Solutions Industrielles",
      quote: "Leur expertise en construction industrielle a dépassé toutes nos attentes. Un partenaire de confiance pour nos projets les plus complexes.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sophie Lefebvre",
      role: "Architecte",
      company: "Design Urbain",
      quote: "Collaboration parfaite à chaque étape. Leur capacité à comprendre et à réaliser nos concepts architecturaux est simplement impressionnante.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/67.jpg"
    },
    {
      name: "Antoine Rousseau",
      role: "Promoteur immobilier",
      company: "Développements Urbains",
      quote: "Un niveau de professionnalisme et de qualité qui se démarque vraiment dans l'industrie. Je recommande sans hésitation.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/85.jpg"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonialVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 15
      }
    },
    exit: { 
      opacity: 0, 
      x: -100,
      transition: { 
        duration: 0.3 
      }
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        size={24} 
        className={`
          ${index < rating ? 'text-yellow-400' : 'text-gray-300'}
          inline-block mx-0.5
        `}
        fill={index < rating ? '#FFC107' : 'none'}
      />
    ));
  };

  return (
    <section className="bg-gradient-to-br from-btp-primary-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-btp-primary-700 mb-4">
            Nos clients témoignent
          </h2>
          <p className="text-btp-secondary-500 max-w-2xl mx-auto">
            Des partenaires satisfaits qui racontent leur expérience avec nous
          </p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-btp-card overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentTestimonial}
              variants={testimonialVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="p-8 md:p-12 text-center relative"
            >
              <Quote className="absolute top-4 left-4 text-btp-primary-100 opacity-50" size={80} />
              <Quote className="absolute bottom-4 right-4 text-btp-primary-100 opacity-50 rotate-180" size={80} />
              
              <p className="text-xl md:text-2xl text-btp-secondary-700 italic mb-6 relative z-10">
                "{testimonials[currentTestimonial].quote}"
              </p>
              
              <div className="flex justify-center items-center mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              <div className="flex justify-center items-center">
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full border-4 border-btp-accent-500 mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-btp-primary-700">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-btp-secondary-500">
                    {testimonials[currentTestimonial].role} - {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-btp-primary-100">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 5, ease: 'linear' }}
              className="h-full bg-btp-accent-500"
            />
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`
                w-3 h-3 rounded-full 
                ${currentTestimonial === index ? 'bg-btp-accent-500' : 'bg-btp-primary-100'}
                transition-colors
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;