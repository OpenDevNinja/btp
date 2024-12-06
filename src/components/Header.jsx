import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleDevis= () => {
    navigate('/devis'); 
  };
  const menuItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Réalisations', path: '/projects' },
  /*   { name: 'Blog', path: '/blog' }, */
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <Link to="/" className="text-3xl flex  flex-row items-center justify-center font-display font-bold text-btp-primary-500">
      <img src={logo} alt="logo" className="w-10 h-10 mr-2" />
      <span>SM Enterprise</span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="text-btp-primary-500 hover:text-btp-accent-500 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Bouton de devis */}
        <motion.button 
         onClick={handleDevis}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-btp-accent-500 text-white px-6 py-2 rounded-full hover:bg-btp-accent-300 transition-colors"
        >
          Demander un devis
        </motion.button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-btp-primary-500"
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 z-40"
          onClick={() => setIsMenuOpen(false)}
        >
          <motion.nav 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="absolute right-0 top-0 w-64 h-full bg-white p-6 shadow-lg"
          >
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className="text-btp-primary-500 hover:text-btp-accent-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <motion.button 
               onClick={handleDevis}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-btp-accent-500 text-white px-6 py-2 rounded-full hover:bg-btp-accent-300"
              >
                Demander un devis
              </motion.button>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default MainHeader;