import React from "react";
import { Button } from "./Style";

const Change_button = () => {
  const Convert = () => {
    let convert = confirm("당신만의 신발을 만드시겠습니까?");
    if (convert) {
      alert("만들었습니다.");
    } else {
      alert("취소하였습니다.");
    }
  };
  return (
    <Button onClick={Convert}>
      <p>변환하기</p>
    </Button>
  );
};

export default Change_button;
