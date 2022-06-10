import React from "react";
import type { AppProps } from "next/app";
import GlobalStyle from "../Styles/GlobalStyle";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
