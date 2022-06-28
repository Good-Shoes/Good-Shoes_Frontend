import React from "react";
import Pencil from "./pencil/Pencil";
import Eraser from "./eraser/Eraser";
import Refresh from "./refresh/Refresh";
import styled from "styled-components";

const Cursor = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  justify-self: end;
  padding-right: 20px;
`;

const Func = () => {
  return (
    <>
      <Cursor>
        <Refresh />
        <Pencil />
        <Eraser />
      </Cursor>
    </>
  );
};

export default Func;
