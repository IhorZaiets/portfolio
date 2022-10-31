/* eslint-disable @typescript-eslint/consistent-type-definitions */

export type TabContentType = {
  id: string
  label: string
  text: string
};

export type AboutMeInfoType = {
  SKILLS: TabContentType[]
  EXPERIENCE: TabContentType[]
  EDUCATION: TabContentType[]
};

export enum AboutMeTabs {
  SKILLS = 'SKILLS',
  EXPERIENCE = 'EXPERIENCE',
  EDUCATION = 'EDUCATION',
}
