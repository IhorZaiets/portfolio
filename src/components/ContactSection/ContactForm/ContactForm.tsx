/* eslint-disable @typescript-eslint/strict-boolean-expressions,
@typescript-eslint/consistent-type-definitions, @typescript-eslint/restrict-template-expressions */

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './ContactForm.css';

import { useFormik } from 'formik';

type ErrorsType = {
  name?: string | null
  email?: string | null
  message?: string | null
};
type ValuesType = {
  name: string
  email: string
  message: string
};

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const validate = (values: ValuesType): ErrorsType => {
    const errors: ErrorsType = {};

    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    }
    if (!values.message) {
      errors.message = 'Required';
    }

    return errors;
  };

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const formRequest = useFormik({
    initialValues,
    validate,
    onSubmit: () => {
      if (form.current) {
        emailjs
          .sendForm(
            'service_5yy0r9k',
            'template_mlxvgko',
            form.current,
            'ahj1YT-L23I81mj7R',
          )
          .then(
            (result) => {
              alert(`${result.text}. Your email has been successfully sent`);
            },
            (error) => {
              alert(`Unexpected error: ${error.text}`);
            },
          );
      }
    },
  });

  return (
    <form className="form" onSubmit={formRequest.handleSubmit} ref={form}>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your name"
        className={
          formRequest.errors.name ? 'form__input required' : 'form__input'
        }
        onChange={formRequest.handleChange}
        value={formRequest.values.name}
        required
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your email"
        className={
          formRequest.errors.email ? 'form__input required' : 'form__input'
        }
        onChange={formRequest.handleChange}
        value={formRequest.values.email}
        required
      />
      <textarea
        id="message"
        name="message"
        placeholder="Your message"
        className={
          formRequest.errors.message
            ? 'form__textarea required'
            : 'form__textarea'
        }
        onChange={formRequest.handleChange}
        value={formRequest.values.message}
        rows={6}
      />
      <button type="submit" className="form__button">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
