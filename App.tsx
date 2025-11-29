import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-moze-dark selection:bg-moze-gold selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services onModalOpenChange={setIsServiceModalOpen} />
        <Portfolio onModalOpenChange={setIsPortfolioModalOpen} />
        <AIConsultant />
        <Contact />
      </main>
      <Footer />
      <ChatWidget isServiceModalOpen={isServiceModalOpen} isPortfolioModalOpen={isPortfolioModalOpen} />
    </div>
  );
};

export default App;