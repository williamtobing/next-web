import React, {ReactElement} from 'react';

const NavSetting: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
): ReactElement => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clip-path="url(#clip0_112_54)">
        <rect
          x="5.00001"
          y="5"
          width="34"
          height="34"
          fill="#101820"
          stroke="#101820"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <rect
          x="1.00001"
          y="1"
          width="34"
          height="34"
          fill="#879BE8"
          stroke="#101820"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path d="M12.5 28L12.5 8" stroke="#101820" stroke-width="3" />
        <path d="M23.5 28L23.5 8" stroke="#101820" stroke-width="3" />
        <rect x="20" y="8" width="7" height="7" fill="#101820" />
        <rect x="8.99999" y="17" width="7" height="7" fill="#101820" />
      </g>
      <defs>
        <clipPath id="clip0_112_54">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NavSetting;
