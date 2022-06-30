import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { DataUrl } from "../../Atoms/atom";

const Change_button = () => {
  const Image = useRecoilValue(DataUrl);
  const Convert = () => {
    console.log(Image.toDataURL("image/png"));
    // canvas.toDataURL("image/png")
  };
  return (
    <Button onClick={Convert}>
      <p>변환하기</p>
    </Button>
  );
};

const Button = styled.div`
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

export default Change_button;
// let convert = confirm("당신만의 신발을 만드시겠습니까?");
// if (convert) {
//   alert("만들었습니다.");
// } else {
//   alert("취소하였습니다.");
// }
