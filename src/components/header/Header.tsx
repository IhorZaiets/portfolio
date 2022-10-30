import React from 'react';

import './Header.css';

import NavItem from './NavItem/NavItem';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Logo: string = require('../../assets/Logo.svg').default;

const Header: React.FC = () => (
  <header className="header" id="header">
    <nav className="navigation">
      <img src={Logo} alt="Logo" className="logo" />
      <ul>
        <NavItem text="Home" href="header" />
        <NavItem text="About" href="about" />
        <NavItem text="Services" href="services" />
        <NavItem text="Portfolio" href="portfolio" />
        <NavItem text="Contact" href="header" />
      </ul>
    </nav>
  </header>
);

export default Header;
