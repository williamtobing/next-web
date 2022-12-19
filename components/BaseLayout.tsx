import {ReactNode} from 'react';
import Meta from './Meta';
import Overlay from './Overlay';

const BaseLayout = ({children}: {children?: ReactNode}) => {
  return (
    <>
      <Meta />
      <Overlay />
      {children}
    </>
  );
};

export default BaseLayout;
