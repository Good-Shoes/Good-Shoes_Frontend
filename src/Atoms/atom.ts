import { atom } from "recoil";

export const ToolState = atom<boolean>({
  key: "ToolState",
  default: false,
});

export const Pencil_Eraser = atom<boolean>({
  key: "Pencil_Eraser",
  default: false,
});
