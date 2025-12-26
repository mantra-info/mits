
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
          <h3 className="text-2xl font-bold text-gray-400 mb-10">
            Our Story
          </h3>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#111] leading-tight mb-8 max-w-md">
            Your Partner in Creating & Designing Websites
          </h2>
          
          <div className="space-y-6 text-gray-500 text-lg leading-relaxed max-w-xl mb-10">
            <p>
        We make and build websites with the goal of making digital experiences that matter. As Kochi's top  website design company we are committed to create websites that are easy to use by using clean code, great pictures, and a design that puts the user first.
            </p>
            <p>
           We work with you from the first chat to the last launch to make sure that your website meets your goals and talks to your audience in the appropriate way.
            </p>
          </div>

          {/* Outline CTA Button */}
          <Link href="#contact">
           <button className="flex items-center gap-2 border border-[#8eb41a] text-[#718f15] bg-[#f7fbe9] px-6 py-3 rounded-2xl font-semibold hover:bg-[#8eb41a] hover:text-white transition-all duration-300">
            <Phone size={18} />
            Schedule a Free Call
          </button>
          </Link>
         
        </div>

        {/* Right Column - GIF/Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full aspect-square max-w-[550px]">
            <Image
              src="/story.gif" // Place your GIF in the /public folder
              alt="Design and Development Illustration"
              fill
              className="object-contain"
              unoptimized // Required for high-quality GIFs in Next.js
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;