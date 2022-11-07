/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import './ContactSection.css';

const ContactSection: React.FC = () => (
  <section className="contact_section">
    <article className="contact_section__header">
      <h2 className="portfolio_section__header">Contact me</h2>
      <p><a href="mailto:ihor.zaiets2001@gmail.com">ihor.zaiets2001@gmail.com</a></p>
      <p><a href="tel:+380982599612">+38 (098) 259 96 12</a></p>
      <ul>
        <li><a href="linkedin.com"><i className="fab fa-linkedin" /></a></li>
      </ul>
    </article>
    <form><input /></form>
  </section>
);

export default ContactSection;
