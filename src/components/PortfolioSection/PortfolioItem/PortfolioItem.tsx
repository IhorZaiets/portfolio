/* eslint-disable global-require */
import React from 'react';

import './PortfolioItem.css';

interface PortfolioItemProps {
  title: string
  description: string
  siteLink: string
  imgUrl: string
  imgAlt: string
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  description,
  siteLink,
  imgUrl,
  imgAlt,
}) => (
  <li className="list_item">
    <img
      className="list_item__img"
      src={require(imgUrl)}
      alt={imgAlt}
    />
    <article className="list_item__upper_layer">
      <h3 className="list_item__upper_layer__title">{title}</h3>
      <p>{description}</p>
      <a href={siteLink} className="list_item__upper_layer__link">
        <i className="fa-solid fa-arrow-up-right-from-square" />
      </a>
    </article>
  </li>
);

export default PortfolioItem;
