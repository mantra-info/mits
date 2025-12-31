import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import PreLoader from "./components/PreLoader"; // Import normally
import ScrollToTop from "./components/ScrollToTop";
import { Instrument_Sans } from 'next/font/google'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument',
})
export default function App({ Component, pageProps }: AppProps) {
 
  return (
    <>
      {/* 
        Show loader if loading is true. 
        Wrap content in a div that controls visibility 
      */}
         <main className={instrumentSans.variable}>
     <div className="animate-in fade-in duration-700">
          <Component {...pageProps} />
          <ScrollToTop />
        </div>
         </main>
   
     
    </>
  );
}