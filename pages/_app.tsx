import type { AppProps } from "next/app";
import { cache } from "@emotion/css";
import { CacheProvider } from "@emotion/react";
import GlobalStyles from "styles/Global.style";
import "styles/Global.style.css";

import Layout from "components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  );
}
export default MyApp;
