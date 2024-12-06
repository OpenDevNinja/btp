import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const Breadcrumb = ({ items }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-sm text-gray-600 flex items-center"
        >
            <Link to="/" className="flex items-center hover:text-btp-primary-500 transition">
                <Home size={16} className="mr-2" />
                Accueil
            </Link>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <span className="mx-2">/</span>
                    {item.link ? (
                        <Link 
                            to={item.link} 
                            className="hover:text-btp-primary-500 transition"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-btp-primary-500">{item.label}</span>
                    )}
                </React.Fragment>
            ))}
        </motion.div>
    );
};

export default Breadcrumb;