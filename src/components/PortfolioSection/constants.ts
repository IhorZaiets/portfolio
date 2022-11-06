import { v4 as uuid } from 'uuid';
import { MyPortfolioDataType } from './models';

import Work1 from '../../assets/work-1.png';
import Work2 from '../../assets/work-2.png';
import Work3 from '../../assets/work-3.png';

export const MY_PORTFOLIO_DATA: MyPortfolioDataType[] = [
  {
    id: uuid(),
    title: 'Shopping',
    description: 'adf vhasfbvahsfbvpahosbfv asufob aou wrfaush',
    siteLink: 'google.com',
    imgUrl: Work1,
    imgAlt: 'first work',
  },
  {
    id: uuid(),
    title: 'QWert',
    description: 'adf vhasfbvahsfbvpahosbfv asufob aou wrfaush',
    siteLink: 'facebook.com',
    imgUrl: Work2,
    imgAlt: 'second work',
  },
  {
    id: uuid(),
    title: 'asfvasdas',
    description: 'adf vhasfbvahsfbvpahosbfv asufob aou wrfaush',
    siteLink: 'google.com',
    imgUrl: Work3,
    imgAlt: 'third work',
  },
];
