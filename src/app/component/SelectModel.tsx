"use client";

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
import { Button, Container, ContainerPadding, Curtain } from "./componentCSS";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

interface trainData {
  epochs: number;
  batch: number;
  lr?: number;
  lr0?: number;
  resume: boolean;
}

const SelectModel = () => {
  const [hoverState, setHoverState] = useState("block");

  const [modelType, setModelType] = useRecoilState(modelTypeAtom);
  const [epochs, setEpochs] = useRecoilState(epochsAtom);
  const [batch, setBatch] = useRecoilState(batchAtom);
  const [lr0, setLr0] = useRecoilState(lr0Atom);
  const [workState, setWorkState] = useRecoilState(workStateAtom);

  const resumeType = useRecoilValue(resumeAtom);

  const mutationYolo = useMutation({
    mutationFn: (newData: trainData) => {
      return fetch(`http://122.47.121.165:8070/yolo_train2`, {
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
      resume: false,
    });
  };

  const mutationTrOCR = useMutation({
    mutationFn: (newData: trainData) => {
      return fetch(`http://122.47.121.165:8070/trocr_train2`, {
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
      resume: false,
    });
  };

  return (
    <div>
      <Container onMouseLeave={() => setHoverState("block")}>
        <ContainerPadding padding="200px 10px">
          <Button
            onClick={() => {
              setWorkState(4);
              setModelType("YOLO");
              handleYoloTrain();
            }}
            disabled={resumeType}
          >
            Yolo 모델학습
          </Button>
          <Button
            onClick={() => {
              setWorkState(4);
              setModelType("OCR");
              handleTrOCRTrain();
            }}
            disabled={resumeType}
          >
            OCR 모델학습
          </Button>
        </ContainerPadding>
        {workState !== 1 && (
          <Curtain
            display={hoverState}
            onMouseEnter={() => setHoverState("none")}
          />
        )}
      </Container>
    </div>
  );
};

export default SelectModel;
