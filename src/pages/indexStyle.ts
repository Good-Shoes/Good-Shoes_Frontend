import React from "react";
import styled from "styled-components";

export const All = styled.div<{ cursorname: string }>`
  width: 100%;
  height: 100vh;
  /* image-rendering: -webkit-optimize-contrast; */

  /* cursor: pointer; */

  cursor: ${(p): string | undefined =>
    p.cursorname == "default"
      ? "default"
      : p.cursorname == "pencil"
      ? 'url("/Assets/pencil_Cursor.png") 0 24, auto'
      : 'url("/Assets/eraser_Cursor.png") 0 12, auto'};

  /* cursor: url("/Assets/pencil_Cursor.png") 0 16, auto; */
`;
