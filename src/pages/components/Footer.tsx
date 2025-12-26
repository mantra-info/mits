import React from 'react';
import Link from 'next/link';
import { ArrowUp, Facebook, Instagram, Twitter } from 'lucide-react';

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
            <h2 className="text-4xl font-extrabold tracking-tighter text-black">
              mits
            </h2>
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
              <li>+91 62821 13506</li>
              <li>info@mantraitsolutions.in</li>
              <li>Infopark TBC Kochi, Kerala</li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="flex flex-col items-start md:items-end lg:items-start">
            <h4 className="text-xl font-bold text-[#333] mb-8">Get in Touch</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/17hpTNmD8a/" className="text-black hover:opacity-70 transition-opacity">
                <Facebook size={24} fill="currentColor" />
              </a>
              <a href="https://www.instagram.com/mantrainfotechs?igsh=MXg5Znc0M3Q4OGJrMQ==" className="text-black hover:opacity-70 transition-opacity">
                <Instagram size={24} />
              </a>
              {/* WhatsApp Icon */}
              <a href="#" className="text-black hover:opacity-70 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </a>
              {/* X Icon */}
              <a href="#" className="text-black hover:opacity-70 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </a>
            </div>
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