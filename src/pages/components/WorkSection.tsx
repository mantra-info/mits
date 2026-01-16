'use client'
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Vims Aviation",
    category: "Education",
    image: "/vimsaviation.png"
  },
  {
    id: 2,
    title: "Wonder Valley",
    category: "Tourism",
    image: "/wondervalley.png",
  },
  {
    id: 3,
    title: "Thekkady Stays",
    category: "Hospitality",
    image: "/thekkady.png",
  },
  {
    id: 4,
    title: "Trip O Trip",
    category: "Category",
    image: "/tripotrip.png",
  },
];

const WorksSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white text-black font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Our Works</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bottom Info Section */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold leading-tight">{project.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{project.category}</p>
                </div>

                {/* Arrow Button */}
                <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center transition-colors duration-300 group-hover:bg-black group-hover:text-white group-hover:border-black">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;