import React from "react";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ClearState, CTX, Mouse_Cursor, ToolState } from "../../../Atoms/atom";

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

const Refresh_Frame = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
  margin-top: 10px;
  img {
    width: 100px;
    height: 100px;
  }
`;

export default Refresh;
