import React, {ReactElement} from 'react';

const LinkedIn: React.FC<React.SVGProps<SVGSVGElement>> = (
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
      <g filter="url(#filter0_d_346_268)">
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
        d="M5 6.4325C5 5.64125 5.6575 5 6.46875 5H23.5312C24.3425 5 25 5.64125 25 6.4325V23.5675C25 24.3587 24.3425 25 23.5312 25H6.46875C5.6575 25 5 24.3587 5 23.5675V6.4325ZM11.1788 21.7425V12.7113H8.1775V21.7425H11.1788ZM9.67875 11.4775C10.725 11.4775 11.3762 10.785 11.3762 9.9175C11.3575 9.03125 10.7263 8.3575 9.69875 8.3575C8.67125 8.3575 8 9.0325 8 9.9175C8 10.785 8.65125 11.4775 9.65875 11.4775H9.67875ZM15.8138 21.7425V16.6988C15.8138 16.4288 15.8337 16.1587 15.9137 15.9662C16.13 15.4275 16.6238 14.8687 17.4538 14.8687C18.54 14.8687 18.9738 15.6962 18.9738 16.9113V21.7425H21.975V16.5625C21.975 13.7875 20.495 12.4975 18.52 12.4975C16.9275 12.4975 16.2137 13.3725 15.8138 13.9888V14.02H15.7938C15.8004 14.0096 15.8071 13.9991 15.8138 13.9888V12.7113H12.8137C12.8512 13.5588 12.8137 21.7425 12.8137 21.7425H15.8138Z"
        fill="#E8D487"
      />
      <defs>
        <filter
          id="filter0_d_346_268"
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
            result="effect1_dropShadow_346_268"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_346_268"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default LinkedIn;
