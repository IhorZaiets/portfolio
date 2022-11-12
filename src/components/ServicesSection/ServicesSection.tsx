import React from 'react';

import './ServicesSection.css';

import { SERVICES_DATA } from './constants';

const ServicesSection: React.FC = () => (
  <section id="services" className="services">
    <h2 className="services_section__header">My services</h2>
    <ul className="services_section__list">
      {SERVICES_DATA.map((item) => (
        <li className="services_section__list_item" key={item.id}>
          <i className={item.iconClass} />
          <h3 className="services_section__list_title">{item.title}</h3>
          <p>{item.description}</p>
          <a href="about" className="services_section__list_link">
            Learn more
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default ServicesSection;
