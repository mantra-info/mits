"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Replace these paths with your actual image files in the /public folder
const images = [
  "/amity.webp",
  "/pittapilli.webp",
  "/muthoot.webp",
  "/honda.webp",
  "/vivo.webp",
  "/ananthapuri.webp",
  "/Aster.webp",
  "/europost.webp",
  "/fagor.webp",
  "/narayana.webp",
  "/national.webp",
  "/oppo.webp",
  "/thomson.webp",
  "/volvo.webp",
 
];

const LogoMarquee = () => {
  return (
      <section className="bg-white  px-6 md:px-16 text-[#111]">
   <div className="max-w-7xl mx-auto w-full bg-white py-10 overflow-hidden">
         <h2 className="text-2xl lg:text-4xl pb-10 md:text-4xl font-semibold leading-tight max-w-2xl">
Trusted by Leading Brands </h2>
      <div className="flex w-full">
        <motion.div
          className="flex flex-none gap-16 pr-16"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 45, 
            repeat: Infinity,
          }}
        >
          {/* First set of images */}
          {images.map((src, index) => (
             <div key={index} className="flex items-center justify-center w-40 h-20 shrink-0 relative">
    <Image
      src={src}
      alt={`Brand logo ${index}`}
      fill
      className="object-contain"
      sizes="160px"
      loading="lazy"
    />
  </div>
          ))}

          {/* Duplicate set to create seamless loop */}
          {images.map((src, index) => (
              <div key={`dup-${index}`} className="flex items-center justify-center w-40 h-20 shrink-0 relative">
                <Image
                  src={src}
                  alt={`Partner Brand Duplicate ${index}`}
                  fill
                  className="object-contain"
                  sizes="160px"
                  loading="lazy"
                />
              </div>
            ))}
        </motion.div>
      </div>
    </div>
      </section>
 
  );
};

export default LogoMarquee;