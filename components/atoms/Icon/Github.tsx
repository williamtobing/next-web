import React, {ReactElement} from 'react';

const Github: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
): ReactElement => {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g filter="url(#filter0_d_346_269)">
        <rect x="1" y="1" width="28" height="28" fill="#879BE8" />
        <rect
          x="1"
          y="1"
          width="28"
          height="28"
          stroke="#879BE8"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M15 5C9.475 5 5 9.58819 5 15.2529C5 19.7899 7.8625 23.6219 11.8375 24.9804C12.3375 25.0701 12.525 24.7625 12.525 24.4934C12.525 24.2499 12.5125 23.4425 12.5125 22.5838C10 23.058 9.35 21.9558 9.15 21.3791C9.0375 21.0843 8.55 20.1743 8.125 19.9308C7.775 19.7386 7.275 19.2644 8.1125 19.2516C8.9 19.2388 9.4625 19.9949 9.65 20.3025C10.55 21.8533 11.9875 21.4175 12.5625 21.1484C12.65 20.4819 12.9125 20.0334 13.2 19.777C10.975 19.5207 8.65 18.6364 8.65 14.7147C8.65 13.5997 9.0375 12.6769 9.675 11.9592C9.575 11.7029 9.225 10.6519 9.775 9.24215C9.775 9.24215 10.6125 8.97301 12.525 10.2931C13.325 10.0624 14.175 9.94704 15.025 9.94704C15.875 9.94704 16.725 10.0624 17.525 10.2931C19.4375 8.9602 20.275 9.24215 20.275 9.24215C20.825 10.6519 20.475 11.7029 20.375 11.9592C21.0125 12.6769 21.4 13.5868 21.4 14.7147C21.4 18.6492 19.0625 19.5207 16.8375 19.777C17.2 20.0975 17.5125 20.7126 17.5125 21.6738C17.5125 23.0452 17.5 24.1474 17.5 24.4934C17.5 24.7625 17.6875 25.0829 18.1875 24.9804C20.1728 24.2935 21.8979 22.9854 23.12 21.2403C24.3421 19.4953 24.9997 17.4012 25 15.2529C25 9.58819 20.525 5 15 5Z"
        fill="#E8D487"
      />
      <defs>
        <filter
          id="filter0_d_346_269"
          x="0"
          y="0"
          width="33"
          height="33"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="3" dy="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.909804 0 0 0 0 0.831373 0 0 0 0 0.529412 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_346_269"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_346_269"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Github;
