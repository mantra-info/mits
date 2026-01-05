import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-20 pb-10 px-6 md:px-16 border-t border-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative">
          
          {/* Column 1: Logo */}
          <div className="flex flex-col">
          <Image src={'/logo.webp'} alt="Logo" width={80} height={40} className='w-20 h-auto cursor-pointer'/>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-[#333] mb-8">Quick Links</h4>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li><Link href="#story" className="hover:text-black transition-colors">Our Story</Link></li>
              <li><Link href="#services" className="hover:text-black transition-colors">What We Provide?</Link></li>
              <li><Link href="#why-us" className="hover:text-black transition-colors">Why Us?</Link></li>
            </ul>
          </div>

          {/* Column 3: Help Centre */}
          <div>
            <h4 className="text-xl font-bold text-[#333] mb-8">Help Centre</h4>
            <ul className="space-y-4 text-gray-600 font-medium">
            
              <li>+91 90744 71662</li>
              <li>hello@mantrainfotechs.com</li>
              <li>Infopark TBC Kochi, Kerala</li>
            </ul>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-[1px] bg-gray-100 mt-20 mb-10"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-sm font-medium">
            copyright@2025.All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;