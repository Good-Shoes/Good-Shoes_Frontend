import { atom } from "recoil";

export const ToolState = atom<boolean>({
  key: "ToolState",
  default: false,
});

export const Pencil_Eraser = atom<boolean>({
  key: "Pencil_Eraser",
  default: false,
});

export const ClearState = atom<boolean>({
  key: "ClearState",
  default: false,
});

export const Mouse_Cursor = atom<string>({
  key: "Mouse_Cursor",
  default: "default",
});

export const CTX = atom<any>({
  key: "CTX",
  default: "",
});

export const DataUrl = atom<any>({
  key: "DataUrl",
  default: "",
});
