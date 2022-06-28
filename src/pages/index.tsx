import type { NextPage } from "next";
import Head from "next/head";
import { Refresh, Pencil, Eraser } from "../components/Drawing_mode";
import { useRecoilValue } from "recoil";
import { Mouse_Cursor } from "../Atoms/atom";
import * as S from "./indexStyle";
import Change_button from "../components/ChangeButton/Change_button";
import Header from "../components/Header/Header";
import Boards from "../components/Board/Boards/Boards";

const Home: NextPage = () => {
  const Cursor = useRecoilValue(Mouse_Cursor);

  return (
    <>
      <Head>
        <title>Good-Shoes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.All cursorname={Cursor}>
        <Header />
        <S.Cursor>
          <Refresh />
          <Pencil />
          <Eraser />
        </S.Cursor>
        <Boards />
        <Change_button />
      </S.All>
    </>
  );
};

export default Home;
