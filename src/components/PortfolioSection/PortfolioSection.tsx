import React from 'react';

import './PortfolioSection.css';

import { MY_PORTFOLIO_DATA } from './constants';
import PortfolioItem from './PortfolioItem/PortfolioItem';

const PortfolioSection: React.FC = () => (
  <section id="portfolio" className="portfolio_section">
    <h2 className="portfolio_section__header">My Work</h2>
    <ul className="portfolio_section__work_list">
      {
        MY_PORTFOLIO_DATA.map((item) => (
          <PortfolioItem
            key={item.id}
            title={item.title}
            description={item.description}
            imgAlt={item.imgAlt}
            siteLink={item.siteLink}
          />
        ))
      }
    </ul>
    <button type="button" className="portfolio_section__btn">See more</button>
  </section>
);

export default PortfolioSection;
