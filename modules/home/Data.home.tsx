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
    logo: <Logo.PintapRetail />,
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
