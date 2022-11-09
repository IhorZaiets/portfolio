/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

import './ContactSection.css';

import ContactForm from './ContactForm/ContactForm';

const ContactSection: React.FC = () => (
  <section className="contact_section" id="contact">
    <article className="contact_section__article">
      <h2 className="contact_section__header">Contact me</h2>
      <p className="contact_section__contacts">
        <i className="fa-solid fa-envelope" />
        <a href="mailto:ihor.zaiets2001@gmail.com">ihor.zaiets2001@gmail.com</a>
      </p>
      <p className="contact_section__contacts">
        <i className="fa-solid fa-phone" />
        <a href="tel:+380982599612">+38 (098) 259 96 12</a>
      </p>
      <ul className="contact_section__social_media">
        <li className="contact_section__social_media__item">
          <a href="https://www.linkedin.com/in/ihor-zaiets-a37a71216/">
            <i className="fab fa-linkedin" />
          </a>
        </li>
        <li className="contact_section__social_media__item">
          <a href="https://www.facebook.com/i.zaecz">
            <i className="fab fa-facebook" />
          </a>
        </li>
        <li className="contact_section__social_media__item">
          <a href="https://www.instagram.com/zaiets01/">
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li className="contact_section__social_media__item">
          <a href="https://github.com/IhorZaiets">
            <i className="fab fa-github" />
          </a>
        </li>
      </ul>
      <a href="https://downgit.github.io/#/home?url=https://github.com/IhorZaiets/portfolio/blob/main/src/assets/CV/Ihor_Zaiets.pdf" className="contact_section__btn">Download CV</a>
    </article>
    <ContactForm />
  </section>
);

export default ContactSection;
