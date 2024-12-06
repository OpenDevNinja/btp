import React from 'react';
import { 
  Linkedin, 
  Facebook, 
  Instagram, 
  Phone, 
  Mail 
} from 'lucide-react';

const TopHeader = () => {
  return (
    <div className="bg-btp-primary-700 text-white py-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm mb-2 md:mb-0">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-btp-accent-500 font-bold" />
            <span className=''>+229 01 97 40 63 74</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4  text-btp-accent-500 font-bold" />
            <span>smenterprise67@gmail.com</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <a 
            href="#" 
            className="text-btp-accent-300  hover:text-white transition flex items-center"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="text-btp-accent-300  hover:text-white transition flex items-center"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="text-btp-accent-300  hover:text-white transition flex items-center"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;