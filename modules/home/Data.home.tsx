import tw, {TwStyle} from 'twin.macro';
import {Logo} from 'components/atoms';

export type Project = {
  bgColor: TwStyle;
  logo: JSX.Element;
};

export const projectData: Project[] = [
  {
    bgColor: tw`bg-kupon-blue`,
    logo: <Logo.PintapKupon />,
  },
  {
    bgColor: tw`bg-retail-blue`,
    logo: <Logo.PintapRetail css={tw`mt-1.5`} />,
  },
  {
    bgColor: tw`bg-mitra-white`,
    logo: <Logo.PintapMitra />,
  },
  {
    bgColor: tw`bg-axiata-blue`,
    logo: <Logo.XLAxiataBusol />,
  },

  {
    bgColor: tw`bg-white`,
    logo: <Logo.XLAxiata />,
  },
];

export type Timeline = {
  date: Date;
  description: string;
  progress: number;
};

export const timelineData: Timeline[] = [
  {
    date: new Date('2022-02'),
    description: 'Frontend Engineer at Pintap',
    progress: 0.75,
  },
  {
    date: new Date('2021-03'),
    description: 'Web Developer at XL Axiata',
    progress: 1,
  },
  {
    date: new Date('2020-11'),
    description: 'Freelance at Wedocation',
    progress: 1,
  },
  {
    date: new Date('2020-09'),
    description: 'Mentor at Progate',
    progress: 1,
  },
  {
    date: new Date('2019-06'),
    description: 'Intern at Super Indo',
    progress: 1,
  },
  {
    date: new Date('2017-08'),
    description: 'Start College',
    progress: 1,
  },
];
