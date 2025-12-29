import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Popup from './Popup';

const Hero = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
  <section className="relative min-h-screen flex flex-col overflow-hidden">
  
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Hero_new.jpg"
          alt="Background Texture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/10"></div>
      </div>


      <div className="relative container mx-auto px-4 flex flex-col min-h-screen text-center pt-20 pb-10 md:py-0 md:justify-center">
        
      
        <div className="flex-grow flex flex-col items-center justify-center md:flex-grow-0">
        
          <div className="hidden md:inline-block border border-gray-300 rounded-full px-4 py-1 mb-8 bg-white/50 backdrop-blur-sm">
            <p className="text-[8px] md:text-xs font-medium text-gray-600 uppercase tracking-widest">
              Strategic Plan <span className="mx-1">•</span> Good Design <span className="mx-1">•</span> Results That Matter
            </p>
          </div>

   
          <h1 className="text-4xl md:text-7xl font-semibold text-gray-900 mb-6 tracking-tight max-w-5xl mx-auto leading-[1.1]">
            We Design and Build <br /> Websites That Drive Growth
          </h1>

          {/* Subheading */}
          <p className="hidden md:block text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            We develop websites that not only look fantastic, but help your business growth.
            Our UI UX Design team makes sure your websites are efficiently targeted
          </p>
        </div>

        {/* Button Area */}
      
        <div className="mt-auto md:mt-10 md:flex-none">
          {/* <Link href={"#contact"}> */}
            <button  onClick={() => setIsPopupOpen(true)} className="w-full md:w-auto bg-[#1230d3] hover:bg-[#0e25a8] text-white px-8 py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-2 mx-auto shadow-xl shadow-blue-500/20 transition-all transform hover:scale-105">
              Let's Build Your Website 
            </button>
          {/* </Link> */}
        </div>
        
      </div>
        <Popup 
        externalTrigger={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </section>
  );
};

export default Hero;