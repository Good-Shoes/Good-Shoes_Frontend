import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import GlobalStyle from "../Styles/GlobalStyle";
import { RecoilRoot } from "recoil";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <RecoilRoot>
        <Head>
          <title>Good-Shoes</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default MyApp;
