import React from "react";
import styled from "styled-components";

const H1 = styled.p`
  grid-column-start: 2;
  grid-column-end: 3;
  justify-self: center;
  align-self: center;
  font-size: 5rem;
`;

const Header = () => {
  return (
    <>
      <H1>신발을 그려라!!</H1>
    </>
  );
};

export default Header;
