import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ClearState, Mouse_Cursor, ToolState } from "../../../Atoms/atom";
import { Refresh_Frame } from "./Style";
const Refresh = () => {
  const setTool = useSetRecoilState(ToolState);
  const setCursor = useSetRecoilState(Mouse_Cursor);
  const setClear = useSetRecoilState(ClearState);

  const refresh_mode = () => {
    setTool(false);
    setCursor("default");
    setClear(true);
  };

  return (
    <Refresh_Frame onClick={refresh_mode}>
      <img src="/Assets/Refresh_board.png" alt="eraser" />
    </Refresh_Frame>
  );
};

export default Refresh;
