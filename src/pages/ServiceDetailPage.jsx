import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import hero from '../assets/image/image_4.jpg'
import { 
    Home, 
    Building2, 
    HardHat, 
    Wrench, 
    PlaneTakeoff, 
    Factory,
    CheckCircle2,
    ArrowRight,
    Ruler,
    Compass,
    MapPin,
    Building
} from 'lucide-react';
import services from '../assets/data/services';
import Breadcrumb from '../components/Breadcrumb';

/* const serviceIcons = {
    "construction-residentielle": Home,
    "projets-commerciaux": Building2,
    "travaux-publics": HardHat,
    "renovation": Wrench,
    "gestion-de-projets": PlaneTakeoff,
    "construction-industrielle": Factory
}; */

const serviceIcons = {
    "conception-architecturale": Ruler,
    "etude-de-projets": Compass,
    "construction-btp": HardHat,
    "assistance-conseils": PlaneTakeoff,
    "topographie": MapPin,
    "renovation-rehabilitation": Building,
    
};


const ServiceDetailPage = () => {
    const { serviceSlug } = useParams();
    const service = services.find(s => s.slug === serviceSlug);

    if (!service) return <div>Service non trouvé</div>;

    const ServiceIcon = serviceIcons[serviceSlug];

    const breadcrumbItems = [
        { link: '/services', label: 'Services' },
        { label: service.title }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-16 font-sans">
            <div className="container mx-auto px-4">
                {/* Breadcrumb */}
                <Breadcrumb items={breadcrumbItems} />

                {/* Hero Section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-16 rounded-3xl overflow-hidden shadow-btp-hover"
                >
                    <img 
                        src={service.imgSrc} 
                        alt={service.title} 
                        className="w-full h-[500px] object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="absolute bottom-0 left-0 right-0 p-8 text-white"
                    >
                        <div className="flex items-center mb-4">
                            <ServiceIcon size={50} className="mr-4 text-btp-accent-500 animate-bounce-slow" />
                            <h1 className="text-5xl font-display font-bold tracking-tight">{service.title}</h1>
                        </div>
                        <p className="text-xl ml-16 max-w-3xl font-light tracking-wide">{service.description}</p>
                    </motion.div>
                </motion.div>

                {/* Service Details */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className={`${service.bgColor} p-8 rounded-3xl shadow-btp-card`}
                    >
                        <h2 className="text-3xl font-display font-bold mb-6 text-btp-primary-700 border-b-4 border-btp-accent-500 pb-3">
                            Description Détaillée
                        </h2>
                        <p className="text-btp-secondary-500 leading-relaxed text-lg">{service.detailedDescription}</p>
                    </motion.div>

                    {/* Advantages */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="bg-white p-8 rounded-3xl shadow-btp-hover"
                    >
                        <h2 className="text-3xl font-display font-bold mb-6 text-btp-primary-700 border-b-4 border-btp-accent-500 pb-3">
                            Nos Avantages
                        </h2>
                        <ul className="space-y-4">
                            {service.advantages.map((advantage, index) => (
                                <motion.li 
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    className="flex items-center text-btp-secondary-500 text-lg"
                                >
                                    <CheckCircle2 
                                        size={24} 
                                        className={`mr-4 ${service.accentColor} animate-pulse`} 
                                    />
                                    {advantage}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Process */}
                <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mt-16 bg-gradient-to-br from-btp-primary-50 to-white rounded-3xl shadow-btp-hover overflow-hidden"
>
    <div className="relative">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-btp-accent-500 rounded-full opacity-10 blur-2xl"></div>
        
        <div className="px-12 py-16">
            <h2 className="text-5xl font-display font-bold text-center text-btp-primary-700 mb-16 relative">
                Notre Processus
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-btp-accent-500"></span>
            </h2>

            <div className="grid md:grid-cols-5 gap-8 relative z-10">
                {service.process.map((step, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                            delay: 0.2 * index, 
                            type: "spring", 
                            stiffness: 300 
                        }}
                        className="relative group"
                    >
                        <div className="relative">
                            {/* Step Circle */}
                            <div 
                                className={`
                                    w-32 h-32 mx-auto rounded-full 
                                    flex items-center justify-center 
                                    ${service.bgColor} 
                                    shadow-2xl
                                    relative overflow-hidden
                                    transform transition-all duration-300
                                    group-hover:scale-110 group-hover:shadow-btp-hover
                                `}
                            >
                                <span 
                                    className={`
                                        text-4xl font-bold z-10 
                                        ${service.accentColor}
                                        transition-transform 
                                        group-hover:scale-125
                                    `}
                                >
                                    {index + 1}
                                </span>
                                <div 
                                    className={`
                                        absolute inset-0 
                                        bg-white opacity-20 
                                        animate-ping
                                    `}
                                ></div>
                            </div>

                         
                        </div>

                        {/* Step Description */}
                        <p 
                            className={`
                                mt-6 text-center 
                                text-btp-secondary-500 
                                font-medium 
                                transition-colors 
                                group-hover:text-btp-primary-700
                            `}
                        >
                            {step}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
</motion.div>
            </div>
        </div>
    );
};

export default ServiceDetailPage;