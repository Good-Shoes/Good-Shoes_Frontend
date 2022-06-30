import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { Mouse_Cursor } from "../../Atoms/atom";
import Header from "../Header/Header";
import Func from "../Drawing_mode/Func";
import Boards from "../Board/Boards";
import Change_button from "../ChangeButton/Change_button";

const Combine = () => {
  const Cursor = useRecoilValue(Mouse_Cursor);

  return (
    <All cursorname={Cursor}>
      <Header />
      <Func />
      <Boards />
      <Change_button />
    </All>
  );
};

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

export default Combine;
