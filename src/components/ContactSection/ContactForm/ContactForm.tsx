/* eslint-disable @typescript-eslint/strict-boolean-expressions,
@typescript-eslint/consistent-type-definitions */

import React from 'react';

import './ContactForm.css';

import { useFormik } from 'formik';

type ErrorsType = {
  name: string
  email: string
  message: string
};

const ContactForm: React.FC = () => {
  const validate = (values: any): ErrorsType => {
    const errors = {
      name: '',
      email: '',
      message: '',
    };

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
    onSubmit: (values) => {
      console.log(`name: ${values.name}`);
      console.log(`email: ${values.email}`);
      console.log(`message: ${values.message}`);
    },
  });

  return (
    <form onSubmit={formRequest.handleSubmit} className="form">
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
          formRequest.errors.message ? 'form__textarea required' : 'form__textarea'
        }
        onChange={formRequest.handleChange}
        value={formRequest.values.message}
        rows={6}
      />
      <button type="submit" className="form__button">Submit</button>
    </form>
  );
};

export default ContactForm;
