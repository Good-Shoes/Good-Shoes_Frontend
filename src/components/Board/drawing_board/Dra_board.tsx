import React from "react";
import { useRef, useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  Pencil_Eraser,
  ToolState,
  Mouse_Cursor,
  ClearState,
} from "../../../Atoms/atom";
import { Board } from "./Style";

const Dra_board = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef(null); // 캔버스의 드로잉 컨텍스트를 참조

  const [ctx, setCtx] = useState<any>(); // 캔버스의 드로잉 컨텍스트
  const [isDrawing, setIsDrawing] = useState(false);

  const [Tool, setTool] = useRecoilState(ToolState);
  const [Pen_or_Eraser, setPen_or_Eraser] = useRecoilState(Pencil_Eraser);
  const [Cursor, setCursor] = useRecoilState(Mouse_Cursor);
  const [Clear, setClear] = useRecoilState(ClearState);

  useEffect(() => {
    const canvas: any = canvasRef.current;

    const context = canvas.getContext("2d");
    context.strokeStyle = "black"; // 선의 색
    context.lineWidth = 2.5; // 선의 굵기
    contextRef.current = context;

    setClear(false);
    setCursor("default");
    setTool(false);
    setPen_or_Eraser(false);
    setCtx(context);
  }, []);

  const startDrawing = () => {
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    setIsDrawing(false);
  };

  const drawing = ({ nativeEvent }: any) => {
    const { offsetX, offsetY } = nativeEvent;

    const YouCanDrawing = () => {
      if (!isDrawing) {
        //false 클릭 안하고 있을때
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
      } else {
        //true 클릭 하고 있을때
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
      }
    };

    const YouCanErasing = () => {
      if (!isDrawing) {
        //false 클릭 안하고 있을때
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
      } else {
        //true 클릭 하고 있을때
        ctx.clearRect(offsetX, offsetY, 30, 30);
      }
    };

    //canvas.getContext('2d')의 값이 있을 때
    if (ctx) {
      if (Tool == true) {
        Pen_or_Eraser ? YouCanDrawing() : YouCanErasing();
      }
    }
  };

  return (
    <Board>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={drawing}
        onMouseLeave={finishDrawing}
        width="500"
        height="500"
      ></canvas>
    </Board>
  );
};

export default Dra_board;
