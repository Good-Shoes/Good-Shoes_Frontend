import React from "react";
import styled from "styled-components";

export const All = styled.div<{ cursorname: string }>`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: ${(p): string | undefined =>
    p.cursorname == "default"
      ? "default"
      : p.cursorname == "pencil"
      ? 'url("/Assets/pencil_Cursor.png") 0 24, auto'
      : 'url("/Assets/eraser_Cursor.png") 0 12, auto'};
`;

export const Cursor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Board = styled.div`
  display: flex;
  flex-direction: row;
`;
