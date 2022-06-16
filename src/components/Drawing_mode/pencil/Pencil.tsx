import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  Pencil_Eraser,
  ToolState,
  Mouse_Cursor,
  ClearState,
} from "../../../Atoms/atom";
import { Pencil_frame } from "./Style";

const Pencil = () => {
  const Tool = useRecoilValue(ToolState);
  const setTool = useSetRecoilState(ToolState);

  const Pen_or_Eraser = useRecoilValue(Pencil_Eraser);
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

export default Pencil;
