import { v4 as uuid } from 'uuid';
import { MyPortfolioDataType } from './models';

export const MY_PORTFOLIO_DATA: MyPortfolioDataType[] = [
  {
    id: uuid(),
    title: 'Shopping',
    description: 'adf vhasfbvahsfbvpahosbfv asufob aou wrfaush',
    siteLink: 'google.com',
    imgUrl: '../../../assets/work-1.png',
    imgAlt: 'first work',
  },
  {
    id: uuid(),
    title: 'QWert',
    description: 'adf vhasfbvahsfbvpahosbfv asufob aou wrfaush',
    siteLink: 'facebook.com',
    imgUrl: '../../assets/work-2.png',
    imgAlt: 'second work',
  },
  {
    id: uuid(),
    title: 'asfvasdas',
    description: 'adf vhasfbvahsfbvpahosbfv asufob aou wrfaush',
    siteLink: 'google.com',
    imgUrl: '../../../assets/work-3.png',
    imgAlt: 'third work',
  },
];
