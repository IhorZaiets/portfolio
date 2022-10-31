import { v4 as uuid } from 'uuid';
import { AboutMeInfoType } from './models';

/* eslint-disable import/prefer-default-export */
export const MOCKED_ABOUT_ME_INFO: AboutMeInfoType = {
  SKILLS: [
    {
      id: uuid(),
      label: 'Technical knowledge of:',
      text: 'html, css, javascript, typescript, React, React Native, redux toolkit, Next.js',
    },
    {
      id: uuid(),
      label: 'Languages',
      text: 'Ukrainian, Russian – native; English – Upper- Intermediate',
    },
  ],
  EXPERIENCE: [
    {
      id: uuid(),
      label: 'AUGUST 2022 – NOW',
      text: 'DevelopsToday - Junior Frontend Developer',
    },
    {
      id: uuid(),
      label: 'MAY 2022 – AUGUST 2022',
      text: 'EPAM - educational project',
    },
    {
      id: uuid(),
      label: 'AUGUST 2021 - AUGUST 2022',
      text: 'LTD «UKRMEDTEXTILE» - Junior Export Manager',
    },
  ],
  EDUCATION: [
    {
      id: uuid(),
      label: 'EPAM - Frontend courses',
      text: 'includes studying of HTML, CSS, JavaScript and React under the supervision of mentors',
    },
    {
      id: uuid(),
      label: 'Self-education in HTML, CSS, JavaScript, TypeScript, React, Redux toolkit, redux-thunk, Next.js',
      text: 'courses on UDEMY, YouTube and various information in the Internet',
    },
    {
      id: uuid(),
      label: '4th year of bachelor degree',
      text: 'National Technical University of Ukraine, Department of Dynamics and Strength of Machines',
    },
  ],
};
