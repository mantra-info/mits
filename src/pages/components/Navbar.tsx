import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  const phoneNumber = "+919074471662";

  useEffect(() => {
  
    const checkDevice = () => {
      const ua = navigator.userAgent;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    
      setIsMobile(isMobileDevice || window.innerWidth < 768);
    };

   
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    checkDevice();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkDevice); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

 
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'What We Provide?', href: '#services' },
    { name: 'Why Us?', href: '#why-us' },
  ];

  
  const callActionProps = isMobile 
    ? { href: `tel:${phoneNumber}` } 
    : { href: '#contact' };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-6 md:px-8 py-5 ${
          isScrolled || isOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="relative z-[110]">
            <Image src={'/logo.webp'} alt="Logo" width={80} height={40} priority className='w-20 h-auto cursor-pointer'/>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10 text-[15px] font-semibold text-gray-800">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-black transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Call Button */}
          <div className="hidden md:block">
            <a {...callActionProps}>
              <button className="flex items-center gap-2 bg-white border border-black hover:bg-black hover:text-white  text-black px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md active:scale-95">
                <Phone size={16} fill="white" />
                Schedule a Free Call
              </button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden relative z-[110] p-2 text-gray-900"  aria-label={isOpen ? "Close Menu" : "Open Menu"}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MODAL MENU */}
      <div className={`fixed inset-0 z-[90] bg-white transition-all duration-500 md:hidden ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6 text-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-2xl font-bold text-gray-900">
              {link.name}
            </Link>
          ))}
          
          {/* Mobile Modal Call Button */}
          <a {...callActionProps} onClick={() => setIsOpen(false)} className="w-full max-w-[280px]">
            <button className="flex items-center justify-center gap-2 w-full bg-white hover:bg-black hover:text-white  text-black px-8 py-4 rounded-full text-lg font-bold shadow-lg">
              <Phone size={20} fill="white" />
              Schedule a Free Call
            </button>
          </a>

          <div className="absolute bottom-10 text-gray-400 text-sm italic">
            Strategic Plan • Good Design • Results
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;