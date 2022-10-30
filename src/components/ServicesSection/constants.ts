import { ServicesDataType } from './models';

/* eslint-disable import/prefer-default-export, spaced-comment */
export const SERVICES_DATA: ServicesDataType[] = [
  {
    iconClass: 'fa-solid fa-code', //i take icons from fontawesome.com, save it className here and pass it to an <i>
    title: 'Web development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    iconClass: 'fa-regular fa-mobile', //i take icons from fontawesome.com, save it className here and pass it to an <i>
    title: 'App development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
