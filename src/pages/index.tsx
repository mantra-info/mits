import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Services from './components/Services';
import WhyUs from './components/Whyus';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Popup from './components/Popup';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>mits | Design & Build Websites</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        
        {/* ADD IDS HERE */}
        <div id="story"><Story/></div>
        <div id="services"><Services/></div>
        <div id="why-us"><WhyUs/></div>
        <div id="contact"><Contact/></div>
        
        <Footer/>
        <Popup />
      </main>
    </>
  );
};

export default Home;