import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
const Story = dynamic(() => import('./components/Story'));
const Services = dynamic(() => import('./components/Services'));
const WhyUs = dynamic(() => import('./components/Whyus'));
const LogoMarquee = dynamic(() => import('./components/Clients'));
const Contact = dynamic(() => import('./components/Contact'));
const Footer = dynamic(() => import('./components/Footer'));
const Popup = dynamic(() => import('./components/Popup'), { ssr: false });
import { useState } from 'react';


const Home: NextPage = () => {
   const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      <Head>
        <title>mits | Design & Build Websites</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen">
        <Navbar />
         <Hero onOpenPopup={() => setIsPopupOpen(true)} />
        
        {/* ADD IDS HERE */}
        <div id="story"><Story/></div>
        <div id="services"><Services/></div>
        <div id="why-us"><WhyUs/></div>
        
        <div id="client"><LogoMarquee/></div>

        <div id="contact"><Contact/></div>
        
        <Footer/>
        <Popup 
          externalTrigger={isPopupOpen} 
          onClose={() => setIsPopupOpen(false)} 
        />
      </main>
    </>
  );
};

export default Home;