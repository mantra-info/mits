import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top scroll behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-[9999]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-white border border-gray-300 p-4 rounded-full shadow-2xl hover:bg-black hover:text-white transition-all duration-300 group animate-bounce-subtle"
          aria-label="Scroll to top"
        >
          <ArrowUp 
            size={24} 
            className="group-hover:-translate-y-1 transition-transform" 
          />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;