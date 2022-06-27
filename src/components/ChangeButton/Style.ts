import styled from "styled-components";

export const Button = styled.div`
  grid-row-start: 3;
  grid-column-start: 2;
  justify-self: center;
  width: 180px;
  height: 60px;
  border: 1px solid black;
  border-radius: 20px;
  margin-top: 50px;
  cursor: pointer;

  p {
    text-align: center;
    line-height: 60px;

    font-size: 1.7rem;
  }
`;
