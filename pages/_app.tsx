import type {AppProps} from 'next/app';
import {cache} from '@emotion/css';
import {CacheProvider} from '@emotion/react';
import GlobalStyles from 'styles/Global.style';
import 'styles/Global.style.css';

import BaseLayout from 'components/BaseLayout';

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </CacheProvider>
  );
}
