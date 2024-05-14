"use client";

import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { modelTypeAtom, resumeAtom } from "./atom";
import { Button, Container, Curtain } from "./componentCSS";
import { useState } from "react";

const SelectModel = () => {
  const [hoverState, setHoverState] = useState("block");
  const [modelType, setModelType] = useRecoilState(modelTypeAtom);
  const resumeType = useRecoilValue(resumeAtom);

  return (
    <div>
      <Curtain
        display={hoverState}
        onMouseEnter={() => setHoverState("none")}
      />
      <Container
        onMouseLeave={() => setHoverState("block")}
        padding="200px 10px"
      >
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
      </Container>
    </div>
  );
};

export default SelectModel;
