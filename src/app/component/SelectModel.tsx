"use client";

import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { modelTypeAtom, resumeAtom } from "./atom";

const Container = styled.div`
  width: 266px;
  height: 190px;
  background-color: lightgray;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 50px;
`;

const Button = styled.button`
  width: 140px;
  height: 30px;
  &:disabled {
  }
`;

const SelectModel = () => {
  const [modelType, setModelType] = useRecoilState(modelTypeAtom);
  const resumeType = useRecoilValue(resumeAtom);

  return (
    <>
      <div>{modelType}</div>
      <Container>
        <Button
          onClick={() => {
            setModelType("YOLO");
          }}
          disabled={resumeType}
        >
          Yolo 모델 선택
        </Button>
        <Button
          onClick={() => {
            setModelType("OCR");
          }}
          disabled={resumeType}
        >
          OCR 모델 선택
        </Button>
      </Container>
    </>
  );
};

export default SelectModel;
