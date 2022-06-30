import type { NextPage } from "next";
import Head from "next/head";

import Combine from "../components/Combine/Combine";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Good-Shoes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Combine />
    </>
  );
};

export default Home;
