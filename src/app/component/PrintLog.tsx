"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  batchAtom,
  epochsAtom,
  lr0Atom,
  modelTypeAtom,
  resumeAtom,
  workStateAtom,
} from "./atom";
import { ButtonCSS } from "./componentCSS";

interface trainData {
  epochs: number;
  batch: number;
  lr?: number;
  lr0?: number;
  resume: boolean;
}

const Curtain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0rem;
  left: 0rem;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
`;

const Option = styled.div`
  color: white;
`;

const LogBox = styled.div`
  width: 650px;
  height: 350px;
  border-radius: 8px;
  background-color: black;
  color: white;
  padding: 15px;
  overflow-y: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 12px 12px 12px 12px;
    margin: 10px 10px;
  }
  &::-webkit-scrollbar-corner {
    display: none;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 650px;
  gap: 8px;
`;

const Button = styled.button`
  ${ButtonCSS}
  width: 100%;
`;

const PrintLog = () => {
  const [workState, setWorkState] = useRecoilState(workStateAtom);
  const [resume, setResume] = useRecoilState(resumeAtom);
  const [modelType, setModelType] = useRecoilState(modelTypeAtom);

  const epochs = useRecoilValue(epochsAtom);
  const batch = useRecoilValue(batchAtom);
  const lr0 = useRecoilValue(lr0Atom);

  const { data } = useQuery({
    queryKey: ["Log"],
    queryFn: async () => {
      return (await fetch(`http://122.47.121.165:8080/stream_logs`)).json();
    },
  });

  const mutationYolo = useMutation({
    mutationFn: (newData: trainData) => {
      return fetch(`http://122.47.121.165:8080/yolo_train`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
    },
  });

  const handleYoloTrain = () => {
    mutationYolo.mutate({
      epochs: epochs,
      batch: batch,
      lr0: lr0,
      resume: true,
    });
  };

  const mutationTrOCR = useMutation({
    mutationFn: (newData: trainData) => {
      return fetch(`http://122.47.121.165:8080/trocr_train`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
    },
  });

  const handleTrOCRTrain = () => {
    mutationTrOCR.mutate({
      epochs: epochs,
      batch: batch,
      lr: lr0,
      resume: true,
    });
  };

  const mutationStopYolo = useMutation({
    mutationFn: () => {
      return fetch(`http://122.47.121.165:8080/stop_yolo_train`, {
        method: "POST",
      });
    },
  });

  const mutationStopOcr = useMutation({
    mutationFn: () => {
      return fetch(`http://122.47.121.165:8080/stop_trocr_train`, {
        method: "POST",
      });
    },
  });

  return (
    <div>
      {workState === 4 && (
        <Curtain>
          <Option>
            에폭시: {epochs + " "}
            배치크기: {batch + " "}
            학습률: {lr0}
          </Option>
          <LogBox>{data}</LogBox>
          <ButtonBox>
            <Button
              onClick={() => {
                setWorkState(2);
                modelType === "YOLO" && mutationStopYolo.mutate();
                modelType === "OCR" && mutationStopOcr.mutate();
              }}
            >
              학습일시중지
            </Button>
          </ButtonBox>
        </Curtain>
      )}
      {workState === 2 && (
        <Curtain>
          <Option>
            에폭시: {epochs + " "}
            배치크기: {batch + " "}
            학습률: {lr0}
          </Option>
          <LogBox>{data}</LogBox>
          <ButtonBox>
            <Button
              onClick={() => {
                setWorkState(4);
                modelType === "YOLO" && handleYoloTrain();
                modelType === "OCR" && handleTrOCRTrain();
              }}
            >
              학습재개
            </Button>
            <Button
              onClick={() => {
                setWorkState(1);
              }}
            >
              학습중지
            </Button>
          </ButtonBox>
        </Curtain>
      )}
    </div>
  );
};

export default PrintLog;
