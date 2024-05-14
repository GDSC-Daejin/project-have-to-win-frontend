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

export const workStateAtom = atom<number>({
  key: "workState",
  // 0.Upload 1.Prepare 2.Stop 3.Complete
  default: 0,
});
