"use client";

import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { modelTypeAtom, resumeAtom, workStateAtom } from "./atom";
import { Button, Container, ContainerPadding, Curtain } from "./componentCSS";
import { useState } from "react";

const SelectModel = () => {
  const [hoverState, setHoverState] = useState("block");
  const [modelType, setModelType] = useRecoilState(modelTypeAtom);
  const [workState, setWorkState] = useRecoilState(workStateAtom);

  const resumeType = useRecoilValue(resumeAtom);

  return (
    <div>
      <Container onMouseLeave={() => setHoverState("block")}>
        <ContainerPadding padding="200px 10px">
          <Button
            onClick={() => {
              setModelType("YOLO");
            }}
            disabled={resumeType}
          >
            Yolo 모델학습
          </Button>
          <Button
            onClick={() => {
              setModelType("OCR");
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
