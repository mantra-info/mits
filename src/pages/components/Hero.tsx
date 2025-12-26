import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.jpg" // Replace with your actual background image file
          alt="Background Texture"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle overlay to ensure text readability if needed */}
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      <div className="container mx-auto px-4 text-center mt-20">
        {/* Badge */}
        <div className="inline-block border border-gray-300 rounded-full px-4 py-1 mb-8 bg-white/50 backdrop-blur-sm">
          <p className="text-[10px] md:text-xs font-medium text-gray-600 uppercase tracking-widest">
            Strategic Plan <span className="mx-1">•</span> Good Design <span className="mx-1">•</span> Results That Matter
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight max-w-5xl mx-auto leading-[1.1]">
          We Design and Build <br /> Websites That Drive Growth
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
         We develop websites that not only look fantastic, but help your business growth.
         Our UI UX Design team makes sure your websites are efficiently targeted
        </p>

        {/* Main CTA Button */}
        <button className="bg-[#1230d3] hover:bg-[#0e25a8] text-white px-8 py-4 rounded-2xl text-lg font-semibold flex items-center gap-2 mx-auto shadow-xl shadow-blue-500/20 transition-all transform hover:scale-105">
          Let's Build Your Website 👋
        </button>
      </div>
    </section>
  );
};

export default Hero;