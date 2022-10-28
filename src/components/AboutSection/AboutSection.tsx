import React from 'react';
import './AboutSection.css';

const AboutSection: React.FC = () => (
  <section className="about_section">
    <figure className="about_section__figure">
      <img src={require('../../assets/AboutPhoto.jpeg')} alt="about me" className="about_section__img" />
    </figure>
    <article className="about_section__article">
      <h2 className="about_section__header">About me</h2>
      <p className="about_section__paragraph">
        I&rsquo;m an enthusiastic and detail-oriented Fronted Developer
        {' '}
        seeking a position in a Company to use my skills in coding,
        {' '}
        troubleshooting complex problems, and assisting in the timely
        {' '}
        completion of projects. I am sure I could be useful for your team.
        {' '}
        I learn quickly, always curious about everything new around me and
        {' '}
        will be able to apply my logical thinking.
      </p>

      <ul className="about_section__tab_titles">
        <li className="tab_links active">Skills</li>
        <li className="tab_links">Experience</li>
        <li className="tab_links">Education</li>
      </ul>
    </article>
  </section>
);

export default AboutSection;
