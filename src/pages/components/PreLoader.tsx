
"use client";
import React from "react";

const Preloader : React.FC = () => {
  return (
    <div className="fixed bg-(url) inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      {/* You can replace this with your logo */}
      <div className="w-16 h-16 border-4 border-[#1230d3] border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600 font-medium animate-pulse">
        Designing your experience...
      </p>
    </div>
  );
};

export default Preloader;