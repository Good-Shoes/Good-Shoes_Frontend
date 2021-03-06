import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  ToolState,
  Pencil_Eraser,
  Mouse_Cursor,
  ClearState,
} from "../../../Atoms/atom";
import styled from "styled-components";

const Eraser = () => {
  const Tool = useRecoilValue(ToolState);
  const setTool = useSetRecoilState(ToolState);

  const Pen_or_Eraser = useRecoilValue(Pencil_Eraser);
  const setPen_or_Eraser = useSetRecoilState(Pencil_Eraser);

  const setCursor = useSetRecoilState(Mouse_Cursor);
  const setClear = useSetRecoilState(ClearState);

  const eraser_mode = () => {
    console.log("eraser_mode");
    console.log(Tool);

    setTool(true);
    setPen_or_Eraser(false);
    setClear(false);
    setCursor("eraser");
  };

  return (
    <>
      <Eraser_frame onClick={eraser_mode}>
        <img src="/Assets/eraser.png" alt="eraser" />
      </Eraser_frame>
    </>
  );
};

const Eraser_frame = styled.div`
  width: 100px;
  height: 100px;

  img {
    width: 100px;
    height: 100px;
  }
`;

export default Eraser;
