import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  User, 
  MessageCircle 
} from 'lucide-react';
import Helmet from '../components/Helmet';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <>

    <Helmet title="Contactez-Nous" subTitle="Contactez-Nous" />
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* Contact Information Section */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="lg:w-1/2 bg-btp-accent-500 text-white p-12 flex flex-col justify-center"
      >
        <h2 className="text-4xl font-bold mb-8">Contactez-Nous</h2>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <MapPin className="w-8 h-8" />
            <div>
              <h3 className="font-semibold">Adresse</h3>
              <p>Abomey-Calavi, Benin</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-8 h-8" />
            <div>
              <h3 className="font-semibold">Téléphone</h3>
              <p>+229 01 97 40 63 74 </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="w-8 h-8" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>smenterprise67@gmail.com</p>
            </div>
          </div>
        </div>
        
        {/* Embedded Google Maps */}
        <div className="mt-8 w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9483524329384!2d2.3521!3d48.8566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzIzLjgiTiAywr0yMScwOS4yIkU!5e0!3m2!1sfr!2sfr!4v1639152732867!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="lg:w-1/2 p-12 flex items-center justify-center bg-white"
      >
        <form 
          onSubmit={handleSubmit} 
          className="w-full max-w-md space-y-6"
        >
          <h2 className="text-3xl font-bold text-center mb-6">
            Envoyez-nous un Message
          </h2>
          
          {/* Name Input */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre Nom"
              required
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-btp-accent-500"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre Email"
              required
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-btp-accent-500"
            />
          </div>

          {/* Phone Input */}
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Votre Téléphone"
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-btp-accent-500"
            />
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <MessageCircle className="absolute left-3 top-4 text-gray-400" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre Message"
              required
              rows={5}
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-btp-accent-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-btp-accent-500 text-white py-3 rounded-lg hover:bg-btp-accent-600 transition flex items-center justify-center"
          >
            Envoyer le Message <Send className="ml-2" />
          </motion.button>
        </form>
      </motion.div>
    </div>
    </>
  );
};

export default ContactPage;