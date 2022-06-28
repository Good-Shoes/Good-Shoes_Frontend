import type { NextPage } from "next";
import Head from "next/head";
import { useRecoilValue } from "recoil";
import { Mouse_Cursor } from "../Atoms/atom";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Func from "../components/Drawing_mode/Func";
import Boards from "../components/Board/Boards/Boards";
import Change_button from "../components/ChangeButton/Change_button";

const All = styled.div<{ cursorname: string }>`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 5px;
  cursor: ${(p): string | undefined =>
    p.cursorname == "default"
      ? "default"
      : p.cursorname == "pencil"
      ? 'url("/Assets/pencil_Cursor.png") 0 24, auto'
      : 'url("/Assets/eraser_Cursor.png") 0 12, auto'};
`;

const Home: NextPage = () => {
  const Cursor = useRecoilValue(Mouse_Cursor);

  return (
    <>
      <Head>
        <title>Good-Shoes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <All cursorname={Cursor}>
        <Header />
        <Func />
        <Boards />
        <Change_button />
      </All>
    </>
  );
};

export default Home;
