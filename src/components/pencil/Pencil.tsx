import React from "react";
import { Pencil_frame } from "./Style";

const Pencil = () => {
  const pencil_mode = () => {
    console.log("hi");
  };

  return (
    <>
      <Pencil_frame>
        <div onClick={pencil_mode}>pencil</div>
      </Pencil_frame>
    </>
  );
};

export default Pencil;
