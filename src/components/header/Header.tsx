/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import './Header.css';

import NavItem from './NavItem/NavItem';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Logo: string = require('../../assets/Logo.svg').default;

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <header className="header" id="header">
      <nav className="navigation">
        <img src={Logo} alt="Logo" className="logo" />
        <ul className={`navigation_list${isVisible ? ' visible' : ''}`}>
          <NavItem text="Home" href="header" />
          <NavItem text="About" href="about" />
          <NavItem text="Services" href="services" />
          <NavItem text="Portfolio" href="portfolio" />
          <NavItem text="Contact" href="contact" />
          <i className="fas fa-times" onClick={() => setIsVisible(false)} />
        </ul>
        <i className="fas fa-bars" onClick={() => setIsVisible(true)} />
      </nav>
    </header>
  );
};

export default Header;
