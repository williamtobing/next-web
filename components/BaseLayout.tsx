import React, {ReactNode, useEffect} from 'react';
import Meta from './Meta';
import Overlay from './Overlay';
import {Logo} from './atoms';
import {Footer} from './molecules';

const BaseLayout = ({children}: {children?: ReactNode}) => {
  useEffect(() => {
    const elementNotLoad = document.querySelector('#page-loader');
    elementNotLoad?.classList.add('hidden');
  }, []);

  return (
    <React.Fragment>
      <Meta />
      <Overlay />
      {children}
      <Footer />

      <div
        id="page-loader"
        className="w-full h-screen bg-gray-100 flex flex-col justify-center items-center">
        {/* <Image
          className="w-40 h-auto animate-pulse"
          src="https://web-busol.s3.ap-southeast-1.amazonaws.com/temp/XL-Axiata-Logo.svg"
          alt="xl-axiata-logo"
        /> */}
        <Logo.TheLogoOne />
      </div>
    </React.Fragment>
  );
};

export default BaseLayout;
