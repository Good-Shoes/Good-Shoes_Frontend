import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  Pencil_Eraser,
  ToolState,
  Mouse_Cursor,
  ClearState,
} from "../../../Atoms/atom";
import styled from "styled-components";

const Pencil = () => {
  const Tool = useRecoilValue(ToolState);
  const setTool = useSetRecoilState(ToolState);

  const setPen_or_Eraser = useSetRecoilState(Pencil_Eraser);

  const setCursor = useSetRecoilState(Mouse_Cursor);
  const setClear = useSetRecoilState(ClearState);

  const pencil_mode = () => {
    console.log("pencil_mode");
    console.log(Tool);

    setTool(true);
    setPen_or_Eraser(true);
    setClear(false);
    setCursor("pencil");
  };

  return (
    <>
      <Pencil_frame onClick={pencil_mode}>
        <img src="/Assets/pencil.png" alt="pencil" />
      </Pencil_frame>
    </>
  );
};

const Pencil_frame = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
  img {
    width: 100px;
    height: 100px;
  }
`;

export default Pencil;
