import styled from "styled-components";

export const Button = styled.div`
  grid-row-start: 3;
  grid-column-start: 2;
  justify-self: center;
  width: 150px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;

  p {
    text-align: center;
    line-height: 50px;

    font-size: 1.5rem;
  }
`;
