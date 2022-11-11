import { v4 as uuid } from 'uuid';
import { ServicesDataType } from './models';

/* eslint-disable import/prefer-default-export, spaced-comment */
export const SERVICES_DATA: ServicesDataType[] = [
  {
    id: uuid(),
    iconClass: 'fa-solid fa-code', //i take icons from fontawesome.com, save it className here and pass it to an <i>
    title: 'Web development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: uuid(),
    iconClass: 'fa-brands fa-app-store', //i take icons from fontawesome.com, save it className here and pass it to an <i>
    title: 'App development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
