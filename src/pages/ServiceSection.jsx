import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    Home,
    Building2,
    HardHat,
    Wrench,
    PlaneTakeoff,
    Factory,
    ChevronRight,
    Ruler,
    Compass,
    MapPin,
    Building
} from 'lucide-react';

const ServicesSection = () => {
    const navigate = useNavigate();

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
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 }
        }
    };

    const services = [
        {
            slug: "conception-architecturale",
            icon: <Ruler size={50} className="text-btp-accent-500" />,
            title: "Conception Architecturale",
            description: "Création de plans innovants et fonctionnels adaptés à vos besoins spécifiques.",
            color: "bg-indigo-50"
        },
        {
            slug: "etude-de-projets",
            icon: <Compass size={50} className="text-btp-accent-500" />,
            title: "Étude de Projets",
            description: "Analyse approfondie et conseil stratégique pour la réussite de vos projets de construction.",
            color: "bg-teal-50"
        },
        {
            slug: "construction-btp",
            icon: <HardHat size={50} className="text-btp-accent-500" />,
            title: "Travaux de Bâtiment et Travaux Publics",
            description: "Réalisation complète de tous types de constructions, du résidentiel à l'industriel.",
            color: "bg-yellow-50"
        },
        {
            slug: "assistance-conseils",
            icon: <PlaneTakeoff size={50} className="text-btp-accent-500" />,
            title: "Assistance et Conseils",
            description: "Accompagnement personnalisé à chaque étape de votre projet de construction.",
            color: "bg-green-50"
        },
        {
            slug: "topographie",
            icon: <MapPin size={50} className="text-btp-accent-500" />,
            title: "Topographie",
            description: "Relevés précis et études de terrain pour une planification optimale de vos projets.",
            color: "bg-purple-50"
        },
        {
            slug: "renovation-rehabilitation",
            icon: <Building size={50} className="text-btp-accent-500" />,
            title: "Rénovation et Réhabilitation",
            description: "Transformation et modernisation de bâtiments existants avec expertise et créativité.",
            color: "bg-blue-50"
        },
      
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-display font-bold text-btp-primary-700 mb-4">
                        Nos Services
                    </h2>
                    <p className="text-xl text-btp-secondary-500 max-w-2xl mx-auto">
                        Une expertise complète pour tous vos projets de construction, 
                        de la conception à la réalisation
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover="hover"
                            onClick={() => navigate(`/services/${service.slug}`)}
                            className={`
                                ${service.color} 
                                p-6 rounded-2xl 
                                border border-opacity-50 
                                hover:shadow-xl 
                                transition-all 
                                group
                                relative
                                overflow-hidden
                                cursor-pointer
                            `}
                        >
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
                            <div className="flex justify-center mb-5">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-btp-primary-500 mb-3 text-center">
                                {service.title}
                            </h3>
                            <p className="text-btp-secondary-500 text-center mb-4">
                                {service.description}
                            </p>
                            <div className="flex justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="
                                        flex items-center 
                                        bg-btp-accent-500 
                                        text-white 
                                        px-4 py-2 
                                        rounded-full 
                                        hover:bg-btp-accent-300 
                                        transition-colors
                                    "
                                >
                                    En savoir plus
                                    <ChevronRight size={20} className="ml-2" />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;