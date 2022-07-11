import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { DataUrl } from "../../Atoms/atom";
import axios from "axios";
const Change_button = () => {
  const Image = useRecoilValue(DataUrl);
  const Convert = () => {
    const imgUrl = Image.toDataURL("image/png");
    console.log(imgUrl);
    dataURLtoFile(imgUrl);
  };

  const dataURLtoFile = (imgURL: any) => {
    const blobBin = window.atob(imgURL.split(",")[1]); // base64 데이터 디코딩
    const array = [];

    for (let i = 0; i < blobBin.length; i++) {
      array.push(blobBin.charCodeAt(i)); // 인코드된 문자들을 0번째부터 끝까지 해독하여 유니코드 값을 array 에 저장한다.
    }

    const u8arr = new Uint8Array(array);
    const file = new Blob([u8arr], { type: "shoes.png" });
    const formdata = new FormData();
    formdata.append("ShoesImg", file);
    console.log(file);

    const url = "";
    SendtoImg(url, formdata);
  };

  const SendtoImg = async (url: string, formdata: any) => {
    await axios
      .post(url, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert("실패");
        console.log(err);
      });
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
