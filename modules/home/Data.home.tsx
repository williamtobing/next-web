import tw, {TwStyle} from 'twin.macro';
import {Logo} from 'components/atoms';

export const imgUrl: string =
  'https://res.cloudinary.com/dox0nkwax/image/upload';

export type Project = {
  bgColor: TwStyle;
  logo: JSX.Element;
};

export const projectData: Project[] = [
  {
    bgColor: tw`bg-kupon-blue`,
    logo: <Logo.PintapKupon css={tw`above1280:(h-24 w-24)`} />,
  },
  {
    bgColor: tw`bg-retail-blue`,
    logo: <Logo.PintapRetail css={tw`mt-1.5 above1280:(h-24 w-24)`} />,
  },
  {
    bgColor: tw`bg-mitra-white`,
    logo: <Logo.PintapMitra css={tw`above1280:(h-24 w-24)`} />,
  },
  {
    bgColor: tw`bg-axiata-blue`,
    logo: <Logo.XLAxiataBusol css={tw`above1280:(h-32 w-32)`} />,
  },

  {
    bgColor: tw`bg-white`,
    logo: <Logo.XLAxiata css={tw`above1280:(h-32 w-32)`} />,
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
  contentBoxStyle?: TwStyle;
  source: string;
  text: string;
  link: string;
};

export const techStackData: TechStack[] = [
  {
    neuStyle: tw`hover:bg-next-black`,
    textStyle: tw`hover:(text-white bg-next-black)`,
    contentBoxStyle: tw`hover:scale-[1.75]`,
    source: `${imgUrl}/v1636001626/logo/stack%20logo/next-js_felzgo.webp`,
    text: 'Next.js',
    link: 'https://nextjs.org/',
  },
  {
    neuStyle: tw`hover:bg-react-blue`,
    textStyle: tw`hover:(text-white bg-react-blue)`,
    imgStyle: tw`animate-[spin_100s_linear_infinite]`,
    contentBoxStyle: tw`hover:scale-[1.5]`,
    source: `${imgUrl}/v1636000856/logo/stack%20logo/react_ura0hq.webp`,
    text: 'React.js',
    link: 'https://reactjs.org/',
  },
  {
    neuStyle: tw`hover:bg-typescript-blue`,
    textStyle: tw`hover:(text-white bg-typescript-blue)`,
    contentBoxStyle: tw`hover:scale-[1.2]`,
    source: `${imgUrl}/v1636000856/logo/stack%20logo/typescript_ho8aqd.png`,
    text: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
  },
  {
    neuStyle: tw`hover:bg-tailwind-blue`,
    textStyle: tw`hover:(text-white bg-tailwind-blue)`,
    contentBoxStyle: tw`hover:scale-[1.4]`,
    source: `${imgUrl}/v1636000856/logo/stack%20logo/tailwindcss_csi3ob.png`,
    text: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
  },
  {
    neuStyle: tw`hover:bg-vue-green`,
    textStyle: tw`hover:(text-white bg-vue-green)`,
    contentBoxStyle: tw`hover:scale-[1.75]`,
    source: `${imgUrl}/v1636027581/logo/stack%20logo/vue_kedlql.webp`,
    text: 'Vue.js',
    link: 'https://vuejs.org/',
  },
  {
    neuStyle: tw`hover:bg-laravel-orange`,
    textStyle: tw`hover:(text-white bg-laravel-orange)`,
    contentBoxStyle: tw`hover:scale-[1.5]`,
    source: `${imgUrl}/v1636027266/logo/stack%20logo/laravel_lmyz5m.webp`,
    text: 'Laravel',
    link: 'https://laravel.com/',
  },
  {
    neuStyle: tw`hover:bg-javascript-yellow`,
    textStyle: tw`hover:(text-white bg-javascript-yellow)`,
    imgStyle: tw`rounded-lg`,
    contentBoxStyle: tw`hover:scale-[1.25]`,
    source: `${imgUrl}/v1671704699/logo/stack%20logo/javascript_xpeqpo.webp`,
    text: 'JavaScript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
];
