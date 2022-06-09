import type { NextPage } from "next";
import Head from "next/head";
import Dra_board from "../components/drawing_board/Dra_board";
import Eraser from "../components/eraser/Eraser";
import Pencil from "../components/pencil/Pencil";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Pencil />
      <Eraser />
      <Dra_board />
    </>
  );
};

export default Home;
