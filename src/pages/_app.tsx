import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import PreLoader from "./components/PreLoader"; // Import normally
import ScrollToTop from "./components/ScrollToTop";



export default function App({ Component, pageProps }: AppProps) {
 
  return (
    <>
      {/* 
        Show loader if loading is true. 
        Wrap content in a div that controls visibility 
      */}
      
        <div className="animate-in fade-in duration-700">
          <Component {...pageProps} />
          <ScrollToTop />
        </div>
     
    </>
  );
}