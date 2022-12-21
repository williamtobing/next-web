import React from 'react';
import {Global, css} from '@emotion/react';
import tw, {theme, GlobalStyles as BaseStyles} from 'twin.macro';

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
});

const GlobalStyles = () => (
  <React.Fragment>
    <BaseStyles />
    <Global styles={customStyles} />
  </React.Fragment>
);

export default GlobalStyles;
