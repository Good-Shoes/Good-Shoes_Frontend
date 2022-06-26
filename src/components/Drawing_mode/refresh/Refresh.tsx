import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ClearState, CTX, Mouse_Cursor, ToolState } from "../../../Atoms/atom";

import { Refresh_Frame } from "./Style";
const Refresh = () => {
  const ctx = useRecoilValue(CTX);

  const Tool = useRecoilValue(ToolState);
  const setTool = useSetRecoilState(ToolState);

  const setCursor = useSetRecoilState(Mouse_Cursor);
  const setClear = useSetRecoilState(ClearState);

  const refresh_mode = () => {
    console.log(ctx);
    ctx.clearRect(0, 0, 500, 500);
    console.log("Refresh");

    setTool(false);
    setClear(true);
    setCursor("default");
  };

  return (
    <Refresh_Frame onClick={refresh_mode}>
      <img src="/Assets/Refresh_board.png" alt="eraser" />
    </Refresh_Frame>
  );
};

export default Refresh;
