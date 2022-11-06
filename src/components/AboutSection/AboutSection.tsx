/* eslint-disable react/button-has-type, global-require */
import React, { useState } from 'react';

import './AboutSection.css';

import { MOCKED_ABOUT_ME_INFO } from './constants';
import { AboutMeTabs } from './models';
import Photo from '../../assets/AboutPhoto.jpeg';

const AboutSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(AboutMeTabs.SKILLS);

  const handleClick = (topic: AboutMeTabs): void => {
    setSelectedTab(topic);
  };

  return (
    <section className="about_section" id="about">
      <figure className="about_section__figure">
        <img
          src={Photo}
          alt="about me"
          className="about_section__img"
        />
      </figure>
      <article className="about_section__article">
        <h2 className="about_section__header">About me</h2>
        <p className="about_section__paragraph">
          I&rsquo;m an enthusiastic and detail-oriented Fronted Developer
          seeking a position in a Company to use my skills in coding,
          troubleshooting complex problems, and assisting in the timely
          completion of projects. I am sure I could be useful for your team. I
          learn quickly, always curious about everything new around me and will
          be able to apply my logical thinking.
        </p>

        <ul className="about_section__tab_titles">
          <li
            className={`tab_items${
              selectedTab === AboutMeTabs.SKILLS ? ' active' : ''
            }`}
          >
            <button
              className="tab_buttons"
              onClick={() => handleClick(AboutMeTabs.SKILLS)}
            >
              Skills
            </button>
          </li>
          <li
            className={`tab_items${
              selectedTab === AboutMeTabs.EXPERIENCE ? ' active' : ''
            }`}
          >
            <button
              className="tab_buttons"
              onClick={() => handleClick(AboutMeTabs.EXPERIENCE)}
            >
              Experience
            </button>
          </li>
          <li
            className={`tab_items${
              selectedTab === AboutMeTabs.EDUCATION ? ' active' : ''
            }`}
          >
            <button
              className="tab_buttons"
              onClick={() => handleClick(AboutMeTabs.EDUCATION)}
            >
              Education
            </button>
          </li>
        </ul>

        <ul className="about_section__tab_content">
          {MOCKED_ABOUT_ME_INFO[selectedTab].map((item) => (
            <li className="about_section__tab_content" key={item.id}>
              <span className="about_section__tab_label">{item.label}</span>
              <br />
              {item.text}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default AboutSection;
