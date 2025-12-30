import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const ThankYou = () => {
     const router = useRouter();
      const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
   
    const hasSubmitted = sessionStorage.getItem('formSubmitted');

    if (!hasSubmitted) {
      
      router.replace('/'); 
    } else {
      setIsAuthorized(true);
    
    }
  }, [router]);
  if (!isAuthorized) return null;

  return (
    <section className="relative bg-black text-white min-h-screen overflow-hidden flex items-center justify-center px-6">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-10">
        <h1 className="text-[200px] md:text-[500px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-black leading-none">
          mits
        </h1>
      </div>

  
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-2xl w-full text-center"
      >
    
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(255,255,255,0.2)]"
        >
          <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>

        <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-tight">
          Success! <br /> <span className="text-gray-500">We've got it.</span>
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-md mx-auto mb-12 leading-relaxed">
          Your enquiry has been received. Our team is already looking into it and will get back to you within <span className="text-white font-medium">24 hours</span>.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className="w-full md:w-auto bg-white text-black font-bold px-10 py-4 rounded-xl hover:bg-gray-200 transition-all active:scale-95"
          >
            Return Home
          </Link>
          <button 
            onClick={() => window.location.href = 'mailto:hello@mantrainfotechs.com'}
            className="w-full md:w-auto bg-[#111] border border-gray-800 text-white font-semibold px-10 py-4 rounded-xl hover:bg-gray-800 transition-all"
          >
            Direct Email
          </button>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5">
          <p className="text-[10px] md:text-xs text-gray-600 uppercase tracking-[0.3em]">
            Strategic Plan <span className="mx-2 opacity-30">•</span> Good Design <span className="mx-2 opacity-30">•</span> Results
          </p>
        </div>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default ThankYou;