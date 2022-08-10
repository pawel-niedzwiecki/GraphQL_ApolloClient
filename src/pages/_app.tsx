import Layout from "layout/layout.index";
import type { AppProps } from "next/app";
import GlobalStyle from "assets/style/globalStyle";
import ProviderWrapper from "providers/providers.wrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProviderWrapper>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProviderWrapper>
  );
}

export default MyApp;
