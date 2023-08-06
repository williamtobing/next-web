export type NavOption = {
  label: string;
  value: string;
};

export const navOptions: NavOption[] = [
  {
    label: 'Home',
    value: '/',
  },
  {label: 'About', value: '/about'},
  {
    label: 'Projects',
    value: '/projects',
  },
  {
    label: 'Blog',
    value: '/blog',
  },
  {label: 'Contact', value: '#'},
];
