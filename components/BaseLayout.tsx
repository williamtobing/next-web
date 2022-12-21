import React, {ReactNode} from 'react';
import Meta from './Meta';
import Overlay from './Overlay';
import {Footer} from './molecules';

const BaseLayout = ({children}: {children?: ReactNode}) => {
  return (
    <React.Fragment>
      <Meta />
      <Overlay />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default BaseLayout;
