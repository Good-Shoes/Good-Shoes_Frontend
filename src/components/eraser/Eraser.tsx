import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ToolState, Pencil_Eraser, Mouse_Cursor } from "../../Atoms/atom";
import { Eraser_frame } from "./Style";

const Eraser = () => {
  const Tool = useRecoilValue(ToolState);
  const setTool = useSetRecoilState(ToolState);

  const Pen_or_Eraser = useRecoilValue(Pencil_Eraser);
  const setPen_or_Eraser = useSetRecoilState(Pencil_Eraser);

  const setCursor = useSetRecoilState(Mouse_Cursor);

  const eraser_mode = () => {
    console.log("eraser_mode");
    console.log(Tool);
    setCursor("eraser");
    setTool(true);
    setPen_or_Eraser(false);
  };

  return (
    <>
      <Eraser_frame onClick={eraser_mode}>
        <img src="/Assets/eraser.png" alt="eraser" />
      </Eraser_frame>
    </>
  );
};

export default Eraser;
