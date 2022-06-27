import type { NextPage } from "next";
import Head from "next/head";
import Dra_board from "../components/Board/drawing_board/Dra_board";
import { Refresh, Pencil, Eraser } from "../components/Drawing_mode";
import { useRecoilValue } from "recoil";
import { Mouse_Cursor } from "../Atoms/atom";
import * as S from "./indexStyle";
import View_board from "../components/Board/view_board/View_board";
import Change_button from "../components/ChangeButton/Change_button";
import Header from "../components/Header/Header";

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
        <S.Board>
          <Dra_board />
          <View_board />
        </S.Board>
        <Change_button />
      </S.All>
    </>
  );
};

export default Home;
