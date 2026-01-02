import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import PreLoader from "./components/PreLoader"; // Import normally
import ScrollToTop from "./components/ScrollToTop";
import { Instrument_Sans } from 'next/font/google'
import Script from "next/script";
import { useRouter } from "next/router";

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument',
})
export default function App({ Component, pageProps }: AppProps) {
   const router = useRouter();

  
  useEffect(() => {
    const handleRouteChange = (url:string) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 
        event: "pageview",
        page: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);
  return (
    <>
       <Script
        id="gtm-script"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtm.js?id=GTM-MXXLKK8N"
      />

     
      <Script id="dataLayer-init" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];`}
      </Script>
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