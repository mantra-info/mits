
import React from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import Link from 'next/link';

const Story: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold text-gray-400 mb-10">
            Our Story
          </h2>
           <h3 className="text-4xl md:text-5xl font-bold text-[#111] leading-tight mb-8 max-w-md">
          Your Digital Partner for Design & Development
          </h3>
           <div className="relative w-full aspect-square max-w-[500px] mb-8 lg:hidden">
            <Image
              src="/glasseffect.webp" 
              alt="Design and Development Illustration"
              
              className="object-contain"
               loading="lazy"
                width={766}
  height={696}
    sizes="(max-width: 768px) 90vw, 800px"
            />
          </div>
          
         
          
          <div className="space-y-6 text-gray-500 text-lg leading-relaxed max-w-xl mb-10">
            <p>
        We make and build websites with the goal of making digital experiences that matter. As Kochi's top  website design company we are committed to create websites that are easy to use by using clean code, great pictures, and a design that puts the user first.
            </p>
            <p>
           We work with you from the first chat to the last launch to make sure that your website meets your goals and talks to your audience in the appropriate way.
            </p>
          </div>

          {/* Outline CTA Button */}
           
  <Link href="#contact" className="inline-flex items-center gap-3  px-8 py-4 rounded-full text-white font-semibold text-lg
    overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95
    shadow-[0_20px_50px_rgba(30,64,175,0.3)]
    
    /* THE MESH BACKGROUND */
    /* This layers 4 different colored 'blobs' to create the liquid effect */
    bg-[#3b82f6] 
    bg-[radial-gradient(at_0%_0%,_#e0f2fe_0%,_transparent_50%),_radial-gradient(at_100%_0%,_#e879f9_0%,_transparent_50%),_radial-gradient(at_100%_100%,_#2563eb_0%,_transparent_50%),_radial-gradient(at_0%_100%,_#818cf8_0%,_transparent_50%)]
    
    /* GLASS BORDER */
    border border-white/40
  ">
    
    {/* GLASS GLOSS OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/30 opacity-100" />

    {/* CONTENT */}
    <span className="relative z-10 flex items-center gap-3 drop-shadow-sm">
      <Phone size={22} fill="white" className="opacity-90" />
      <span className="tracking-wide">Schedule a Free Call</span>
    </span>

    {/* INTERACTIVE HOVER SHINE */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transform" />
  </Link>


        </div>

        {/* Right Column - GIF/Image */}
        <div className="relative hidden lg:flex justify-end">
          <div className="relative w-full aspect-square max-w-[650px]">
            <Image
              src="/glasseffect.webp" 
              alt="Design and Development Illustration"
             
              className="object-contain"
              loading="lazy"
                           width={766}
  height={696}
    sizes="(max-width: 768px) 90vw, 800px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;