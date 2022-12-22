import tw, {TwStyle} from 'twin.macro';
import {Logo} from 'components/atoms';

export const imgUrl = 'https://res.cloudinary.com/dox0nkwax/image/upload';

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

export type TechStack = {
  neuStyle: TwStyle;
  textStyle: TwStyle;
  imgStyle?: TwStyle;
  source: string;
  text: string;
  link: string;
};

export const techStackData: TechStack[] = [
  {
    neuStyle: tw`bg-white`,
    textStyle: tw`text-next-black`,
    source: `${imgUrl}/v1636001626/logo/stack%20logo/next-js_felzgo.webp`,
    text: 'Next.js',
    link: 'https://nextjs.org/',
  },
  {
    neuStyle: tw`bg-white`,
    textStyle: tw`text-react-blue`,
    source: `${imgUrl}/v1636000856/logo/stack%20logo/react_ura0hq.webp`,
    text: 'React.js',
    link: 'https://reactjs.org/',
  },
  {
    neuStyle: tw`bg-white`,
    textStyle: tw`text-typescript-blue`,
    source: `${imgUrl}/v1636000856/logo/stack%20logo/typescript_ho8aqd.png`,
    text: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
  },
  {
    neuStyle: tw`bg-white`,
    textStyle: tw`text-react-blue`,
    source: `${imgUrl}/v1636000856/logo/stack%20logo/tailwindcss_csi3ob.png`,
    text: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
  },
  {
    neuStyle: tw`bg-white`,
    textStyle: tw`text-vue-green`,
    source: `${imgUrl}/v1636027581/logo/stack%20logo/vue_kedlql.webp`,
    text: 'Vue.js',
    link: 'https://vuejs.org/',
  },
  {
    neuStyle: tw`bg-white`,
    textStyle: tw`text-laravel-orange`,
    source: `${imgUrl}/v1636027266/logo/stack%20logo/laravel_lmyz5m.webp`,
    text: 'Laravel',
    link: 'https://laravel.com/',
  },
  {
    neuStyle: tw`bg-white`,
    textStyle: tw`text-javascript-yellow`,
    imgStyle: tw`rounded-lg`,
    source: `${imgUrl}/v1671704699/logo/stack%20logo/javascript_xpeqpo.webp`,
    text: 'JavaScript',
    link: 'https://www.javascript.com/',
  },
];
