import React from "react";
import Dra_board from "../drawing_board/Dra_board";
import View_board from "../view_board/View_board";
import styled from "styled-components";

const Board = styled.div`
  display: flex;
  grid-column-start: 2;
  grid-column-end: 3;
`;

const Boards = () => {
  return (
    <>
      <Board>
        <Dra_board />
        <View_board />
      </Board>
    </>
  );
};

export default Boards;
