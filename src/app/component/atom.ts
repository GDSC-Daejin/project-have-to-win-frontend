import { atom } from "recoil";

export const epochsAtom = atom<number>({
  key: "epochs",
  default: 50,
});

export const batchAtom = atom<number>({
  key: "batch",
  default: 16,
});

export const lr0Atom = atom<number>({
  key: "lr0",
  default: 0.001,
});

export const resumeAtom = atom<boolean>({
  key: "resume",
  default: false,
});

export const modelTypeAtom = atom<string>({
  key: "modelType",
  default: "",
});
