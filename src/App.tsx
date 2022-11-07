import React from 'react';

import './App.css';

import AboutSection from './components/AboutSection/AboutSection';
import Header from './components/header/Header';
import MainSection from './components/MainSection/MainSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import ContactSection from './components/ContactSection/ContactSection';

const App: React.FC = () => (
  <>
    <Header />
    <main>
      <MainSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  </>
);

export default App;
