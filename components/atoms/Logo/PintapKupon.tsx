import React, {ReactElement} from 'react';

const PintapKupon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
): ReactElement => {
  return (
    <svg
      width="64"
      height="56"
      viewBox="0 0 64 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M0 15.5868C0 15.7475 0 15.9081 0 15.9885C3.4548 12.5337 10.2037 5.78478 15.9885 0H0C0 4.82065 0 11.2482 0 15.5868Z"
        fill="white"
      />
      <path
        d="M0 40.4133C0 44.6715 0 51.099 0 56H15.9885C10.2037 50.1349 3.4548 43.386 0 39.9312C0 40.0116 0 40.1722 0 40.4133Z"
        fill="white"
      />
      <path
        d="M35.1904 27.9598C43.6266 19.5236 54.232 8.83786 63.0699 0H27.9595C19.3626 8.59682 8.75722 19.2023 0.481768 27.4777C0.32108 27.6384 0.160392 27.7991 0.0800476 27.9598C0.160392 28.0401 0.240736 28.1205 0.240736 28.2008C8.11446 36.0745 19.2823 47.2424 28.0398 55.9195H63.1502C54.232 47.0817 43.2249 35.9942 35.1904 27.9598Z"
        fill="#F2F23D"
      />
    </svg>
  );
};

export default PintapKupon;
