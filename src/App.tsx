import React from 'react';

import './App.css';

import AboutSection from './components/AboutSection/AboutSection';
import Header from './components/header/Header';
import MainSection from './components/MainSection/MainSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

const App: React.FC = () => (
  <>
    <Header />
    <main>
      <MainSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  </>
);

export default App;
