import React from 'react';
import Image from 'next/image';
import { Phone, Star } from 'lucide-react';
import Link from 'next/link';

const WhyUs: React.FC = () => {
  const techTags = ["Figma, FigJam", "HTML5, CSS3, JavaScript", "React, Next.js", "WordPress, Webflow"];

  return (
    <section className="bg-white py-24 px-6 md:px-16 text-[#111]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-400 mb-10">Why Pick Us?</h3>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <h2 className="text-4xl md:text-4xl font-bold leading-tight max-w-2xl">
We don't just make websites; 
We make tools that help businesses flourish Which gives real Results            </h2>
            <div className="flex flex-col items-start lg:items-end gap-6 max-w-md">
              <p className="text-gray-500 text-right lg:text-right font-medium leading-relaxed">
                We combine strategy, design & technology to build digital solutions that are easy to use, which focuses on getting results, as a leading website development company in Kochi.
              </p>
              <Link href="#contact">
                 <button className="flex items-center gap-2 border border-[#8fb61d] text-[#718f15] bg-[#f7fbe9] px-6 py-3 rounded-full font-semibold hover:bg-[#8fb61d] hover:text-white transition-all">
                <Phone size={18} />
                Schedule a Free Call
              </button>
              </Link>
           
            </div>
          </div>
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Card: Modern Development (Span 5 columns) */}
          <div className="lg:col-span-5 bg-[#f5f5f7] rounded-[40px] p-10 flex flex-col justify-between overflow-hidden relative min-h-[700px]">
            <div>
              <h4 className="text-3xl font-bold mb-6">The New Way to Build</h4>
              <p className="text-gray-500 mb-8 max-w-sm">Our development method focuses on  performance, reliability, and long-term growth.</p>
              <ul className="space-y-5">
                {[
                  "Mobile-first & fully responsive builds",
                  "Clean code with long-term maintainability",
                  "Optimized for speed, visibility, and ranking",
                  "Flexible architecture for long-term expansion"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-semibold text-sm">
                    <Star size={18} className="text-yellow-400 fill-yellow-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Phone Image mockup */}
            <div className="relative w-full h-full  mt-10 -mb-10 scale-110">
              <Image 
                src="/Gradient.png" // Replace with your phone mockup image
                alt="Mobile UI Mockups" 
                fill 
                className="object-contain object-center"
              />
            </div>
          </div>

          {/* Right Column (Span 7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Top Right: Tools & Software */}
            <div className="bg-[#f5f5f7] rounded-[40px] p-10">
              <h4 className="text-2xl font-bold mb-2">Tools & Software<br/>We Use</h4>
              <p className="text-gray-500 text-sm mb-6">We use trusted, industry-standard tools to deliver high-quality, stable, and efficient projects. Expertise in WordPress website design, Shopify eCommerce websites, React, and more.</p>
              <div className="flex flex-wrap gap-3">
                {techTags.map((tag, i) => (
                  <span key={i} className="bg-[#111] text-white px-6 py-3 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Middle Right: Design Methods */}
            <div className="bg-[#f5f5f7] rounded-[40px] p-10">
              <h4 className="text-2xl font-bold mb-2">Proven Design<br/>Methods</h4>
              <p className="text-gray-500 text-sm mb-6">We think about the users when we create and make sure that everything is clear at every step:</p>
              <ul className="space-y-4">
                {[
                  "User insights & requirement analysis",
                  "Experience design & prototyping",
                  "Scalable UI systems & accessibility standards",
                  "User testing & design refinement"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-semibold text-sm">
                    <span className="text-lg">👉</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Right: Green CTA Card */}
            <div className=" 
        bg-[url('/Green.png')]
        bg-cover
        bg-center
        bg-no-repeat rounded-[40px] p-10 flex flex-col justify-center items-start relative overflow-hidden group">
           
              
              <h4 className="text-3xl font-bold text-white mb-8 max-w-xs leading-tight">
                Worldclass Design<br/>Unstoppable Growth
              </h4>
              <Link href="#contact">
                <button className="flex items-center gap-2 bg-white text-[#718f15] px-6 py-3 rounded-full font-light shadow-lg  transition-transform hover:scale-105 active:scale-95">
                <Phone size={18} fill="#718f15" />
               Let's Connect Now
              </button>
              </Link>
            
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;