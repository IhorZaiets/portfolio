import React from 'react';

import './NavItem.css';

interface NavItemProps {
  text: string
  href: string
}

const NavItem: React.FC<NavItemProps> = ({ text, href }) => (
  <li className="navigation_item"><a href={`#${href}`}>{text}</a></li>
);

export default NavItem;
