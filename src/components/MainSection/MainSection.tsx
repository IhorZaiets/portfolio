import React from 'react';

import './MainSection.css';

const MainSection: React.FC = () => (
  <section className="main_section">
    <article className="introducing_text">
      <p className="introducing_text_paragraph">Frontend developer</p>
      <h1 className="introducing_text_header">
        Sup, I&rsquo;m
        <span className="introducing_name"> Ihor</span>
      </h1>
    </article>
  </section>
);

export default MainSection;
