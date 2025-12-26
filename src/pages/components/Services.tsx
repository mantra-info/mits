import React from 'react';

interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    number: "1.",
    title: "Website Design",
    description: "Custom designs that may be changed to fit your needs and make a lasting impression on your business."
  },
  {
    number: "2.",
    title: "UI/UX Design",
    description: "User experiences that have been carefully planned using research, wireframes, and testing."
  },
  {
    number: "3.",
    title: "Website Development",
    description: "Websites that are safe, fast, and can grow using the latest technology and best practices."
  },
  {
    number: "4.",
    title: "Website Redesign & Optimization",
    description: "Redesigning  the websites for your business which is easier to use, load faster, and get more people attracted."
  }
];

const Services: React.FC = () => {
  return (
    <section className="bg-[#111111] text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-20 tracking-tight">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col pt-4 pb-12 lg:pb-0 lg:px-8 first:pl-0 
                ${index !== 0 ? 'lg:border-l lg:border-gray-800' : ''} 
                ${index % 2 !== 0 && index !== 0 ? 'md:border-l md:border-gray-800 lg:border-l' : ''}
              `}
            >
              {/* Number */}
              <span className="text-3xl font-bold text-gray-500 mb-14">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-10 leading-tight min-h-[80px]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;