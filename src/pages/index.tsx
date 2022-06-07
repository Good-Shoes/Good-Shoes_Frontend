import type { NextPage } from "next";
import Head from "next/head";
import Dra_board from "../components/Dra_board";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="hey">
        hey <a>Next.js</a>
      </h1>
      <Dra_board />
    </>
  );
};

export default Home;
