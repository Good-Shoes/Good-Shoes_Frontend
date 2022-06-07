import React from "react";
import { useRef, useState, useEffect } from "react";
import { Board } from "./drawing_board/Style";

const Dra_board = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef(null); // 캔버스의 드로잉 컨텍스트를 참조

  const [ctx, setCtx] = useState<any>(); // 캔버스의 드로잉 컨텍스트
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas: any = canvasRef.current;

    const context = canvas.getContext("2d");
    context.strokeStyle = "black"; // 선의 색
    context.lineWidth = 2.5; // 선의 굵기
    contextRef.current = context;

    setCtx(context);
  });

  const startDrawing = () => {
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    setIsDrawing(false);
  };

  const drawing = ({ nativeEvent }: any) => {
    const { offsetX, offsetY } = nativeEvent;
    //canvas.getContext('2d')의 값이 있을 때
    if (ctx) {
      if (!isDrawing) {
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
      } else {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
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
