import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, CheckCircle, Target } from 'lucide-react';
import image1 from '../assets/image/img/de.jpg';
import Helmet from '../components/Helmet';
import WhyChooseUs from './WhyChooseUs';
const AboutSMEntreprise = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      }
    }
  };

  return (
  <>
    <Helmet title="Notre Histoire, Notre Passion" subTitle="Nous sommes une équipe passionnée de création." />
    
    <section className="bg-gradient-to-br from-btp-primary-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Description avec Image */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div 
            variants={fadeInVariants}
            className="relative rounded-2xl overflow-hidden shadow-btp-hover"
          >
            <img 
              src={image1}
              alt="SM Entreprise" 
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          {/* Texte de Description */}
          <motion.div 
            variants={fadeInVariants}
            className="space-y-6"
          >
            <h2 className="text-4xl font-display font-bold text-btp-primary-700 mb-4">
              SM Entreprise
            </h2>
            <p className="text-btp-secondary-500 leading-relaxed">
              SM ENTERPRISE est une entreprise de construction générale spécialisée 
              dans la construction immobilière et dans tous les travaux de génie civil. 
              Nous travaillons pour le compte de particuliers et des professionnels, et notre 
              entreprise se développe sur une dynamique de multiples compétences ayant une force 
               réseau comptant différents partenaires de le domaine de la construction et génie civil en 
               général. <br /> <br />
              Notre état d'esprit est orienté vers la complémentarité de chacun des acteurs de notre société
              afin d'aquérir et de renforcer nos compétences techniques. 
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Target className="text-btp-accent-500" size={24} />
                <span className="text-btp-secondary-700">Expertise technique pointue</span>
              </div>
              <div className="flex items-center space-x-3">
                <Building2 className="text-btp-accent-500" size={24} />
                <span className="text-btp-secondary-700">Solutions innovantes en génie civil</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-btp-accent-500" size={24} />
                <span className="text-btp-secondary-700">Engagement qualité total</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
<WhyChooseUs/>
        {/* Section Interlocuteurs Experts */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 bg-btp-primary-50 rounded-2xl p-8 shadow-btp-card"
        >
          <motion.h3 
            variants={fadeInVariants}
            className="text-3xl font-display font-bold text-btp-primary-700 text-center mb-8"
          >
            DES INTERLOCUTEURS EXPERTS ET À L'ÉCOUTE !
          </motion.h3>

          <motion.div 
            variants={fadeInVariants}
            className="space-y-4 text-btp-secondary-700"
          >
            <p>
              Nous sommes un groupe d'experts en génie civil. Notre équipe est constituée de professionnels hautement qualifiés :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>D'Architectes diplômés et inscrits à l'ordre national des Architectes du Bénin</li>
              <li>De dessinateurs projeteurs, designers et graphistes compétents</li>
              <li>D'ingénieurs de conception et d'études projets</li>
              <li>De techniciens supérieurs en génie civil expérimentés et aguerris</li>
            </ul>
            <p className="italic text-btp-secondary-500">
              Notre force réside dans la complémentarité de nos compétences et notre engagement constant vers l'excellence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </>
  );
};

export default AboutSMEntreprise;