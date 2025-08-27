
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Ingredients from './components/Ingredients';
import Variants from './components/Variants';
import Testimonials from './components/Testimonials';
import BulkOrders from './components/BulkOrders';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#FDFBF8] text-[#333333] font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Variants />
        <Ingredients />
        <Testimonials />
        <BulkOrders />
      </main>
      <Footer />
    </div>
  );
};

export default App;