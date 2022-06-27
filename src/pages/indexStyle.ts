import React from "react";
import styled from "styled-components";

export const All = styled.div<{ cursorname: string }>`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 5px;
  cursor: ${(p): string | undefined =>
    p.cursorname == "default"
      ? "default"
      : p.cursorname == "pencil"
      ? 'url("/Assets/pencil_Cursor.png") 0 24, auto'
      : 'url("/Assets/eraser_Cursor.png") 0 12, auto'};
`;

export const Cursor = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  justify-self: end;
  padding-right: 20px;
`;

export const Board = styled.div`
  display: flex;
  grid-column-start: 2;
  grid-column-end: 3;
`;
