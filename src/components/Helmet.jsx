import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import img from '../assets/image/image_3.jpg';

export default function Helmet({ title, subTitle }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative flex items-center min-h-[300px] z-10 
                 before:content-[''] before:absolute before:inset-0 
                 before:bg-btp-primary-700 before:opacity-70 before:-z-10 
                 bg-cover bg-center"
      style={{
        backgroundImage: `url(${img})`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col space-y-6">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 10,
                delay: 0.2 
              }}
              className="pl-[8%]"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold 
                             text-white mb-4 
                             bg-gradient-to-r from-white to-btp-accent-300 
                             text-transparent bg-clip-text">
                {title}
              </h2>
            </motion.div>
            
            <motion.nav
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 10,
                delay: 0.4 
              }}
              className="pl-[8%]"
            >
              <ol className="flex items-center text-white text-lg md:text-xl">
                <li>
                  <Link
                    to="/"
                    className="text-white hover:text-btp-accent-300 
                               transition-colors duration-300 
                               flex items-center group"
                  >
                    <span className="group-hover:mr-2 transition-all">Accueil</span>
                  </Link>
                </li>
                <li className="flex items-center ml-2">
                  <ChevronRight className="w-5 h-5 text-btp-accent-300" />
                  <span className="ml-2 text-btp-primary-50">{subTitle}</span>
                </li>
              </ol>
            </motion.nav>
          </div>
        </div>
      </div>
    </motion.div>
  );
}