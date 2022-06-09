import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Pencil_Eraser, ToolState } from "../../Atoms/atom";
import { Pencil_frame } from "./Style";

const Pencil = () => {
  const Tool = useRecoilValue(ToolState);
  const setTool = useSetRecoilState(ToolState);

  const Pen_or_Eraser = useRecoilValue(Pencil_Eraser);
  const setPen_or_Eraser = useSetRecoilState(Pencil_Eraser);

  const pencil_mode = () => {
    console.log("pencil_mode");
    setTool(true);
    setPen_or_Eraser(true);
    console.log(Tool);
  };

  return (
    <>
      <Pencil_frame onClick={pencil_mode}>
        <div>pencil</div>
      </Pencil_frame>
    </>
  );
};

export default Pencil;
