import type { NextPage } from "next";
import Head from "next/head";
import Dra_board from "../components/Board/drawing_board/Dra_board";
// import Eraser from "../components/Drawing_mode/eraser/Eraser";
// import Pencil from "../components/Drawing_mode/pencil/Pencil";
import { Refresh, Pencil, Eraser } from "../components/Drawing_mode";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Mouse_Cursor } from "../Atoms/atom";
import * as S from "./indexStyle";
import View_board from "../components/Board/view_board/View_board";

const Home: NextPage = () => {
  const Cursor = useRecoilValue(Mouse_Cursor);
  const setCursor = useSetRecoilState(Mouse_Cursor);

  return (
    <>
      <Head>
        <title>Good-Shoes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.All cursorname={Cursor}>
        <S.Cursor>
          <Refresh />
          <Pencil />
          <Eraser />
        </S.Cursor>

        <S.Board>
          <Dra_board />
          <View_board />
        </S.Board>
      </S.All>
    </>
  );
};

export default Home;
