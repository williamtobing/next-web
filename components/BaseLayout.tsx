import {ReactNode} from 'react';
import Meta from './Meta';
import InProgress from './InProgress';

const BaseLayout = ({children}: {children?: ReactNode}) => {
  return (
    <>
      <Meta />
      <InProgress />
      {children}
    </>
  );
};

export default BaseLayout;
