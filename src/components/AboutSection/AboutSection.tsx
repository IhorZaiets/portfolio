import React from 'react';

const AboutSection: React.FC = () => (
  <section>
    <figure>
      <img src={require('../../assets/AboutPhoto.jpeg')} alt="about me" />
    </figure>
    <article>
      <h2>About me</h2>
    </article>
  </section>
);

export default AboutSection;
