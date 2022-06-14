import React from "react";
import styled from "styled-components";

export const All = styled.div<{ cursorname: any }>`
  width: 100%;
  height: 100vh;
  background: ${(p) => p.cursorname};
  cursor: ${(p) => p.cursorname};
`;
