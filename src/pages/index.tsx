import type { NextPage } from "next";
import Head from "next/head";
import Dra_board from "../components/drawing_board/Dra_board";
import Eraser from "../components/eraser/Eraser";
import Pencil from "../components/pencil/Pencil";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Mouse_Cursor } from "../Atoms/atom";
import { All } from "./indexStyle";

const Home: NextPage = () => {
  const Cursor: string = useRecoilValue(Mouse_Cursor);
  const setCursor = useSetRecoilState(Mouse_Cursor);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <All>
        <Pencil />
        <Eraser />
        <Dra_board />
      </All>
    </>
  );
};

export default Home;
