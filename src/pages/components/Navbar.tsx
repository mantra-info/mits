import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Change background opacity when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-8 py-5 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-tighter text-black">
          mits
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-10 text-[15px] font-semibold text-gray-800">
          <Link href="#story" className="hover:text-black transition-colors">Our Story</Link>
          <Link href="#services" className="hover:text-black transition-colors">What We Provide?</Link>
          <Link href="#why-us" className="hover:text-black transition-colors">Why Us?</Link>
        </div>

        {/* CTA Button */}
   {/* CTA Button */}
<Link href="#contact">
  <button className="flex items-center gap-2 bg-[#7ca90b] hover:bg-[#6b920a] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md active:scale-95">
    <Phone size={16} fill="white" />
    Schedule a Free Call
  </button>
</Link>
      </div>
    </nav>
  );
};

export default Navbar;