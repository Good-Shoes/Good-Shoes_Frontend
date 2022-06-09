import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ToolState, Pencil_Eraser } from "../../Atoms/atom";
import { Eraser_frame } from "./Style";

const Eraser = () => {
  const Tool = useRecoilValue(ToolState);
  const setTool = useSetRecoilState(ToolState);

  const Pen_or_Eraser = useRecoilValue(Pencil_Eraser);
  const setPen_or_Eraser = useSetRecoilState(Pencil_Eraser);

  const eraser_mode = () => {
    console.log("eraser_mode");
    console.log(Tool);
    setTool(true);
    setPen_or_Eraser(false);
  };

  return (
    <>
      <Eraser_frame onClick={eraser_mode}>
        <p>지우개입니다.</p>
      </Eraser_frame>
    </>
  );
};

export default Eraser;
