import React from 'react';
import Header from '../Components/Header';
import About from '../Components/About';
import Services from '../Components/Services';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import FloatingWhatsapp from '../Components/FloatingWhatsapp';

const Home = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center p-4 relative">
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
      <FloatingWhatsapp/>
      
    </div>
  );
};

export default Home;
