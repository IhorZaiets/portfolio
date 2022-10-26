import React from 'react';

import './App.css';

import AboutSection from './components/AboutSection/AboutSection';
import Header from './components/header/Header';
import MainSection from './components/MainSection/MainSection';

const App: React.FC = () => (
  <>
    <Header />
    <main>
      <MainSection />
      <AboutSection />
    </main>
  </>
);

export default App;
