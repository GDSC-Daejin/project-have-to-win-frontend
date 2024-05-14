"use client";

import { useRecoilState } from "recoil";
import styled from "styled-components";
import { batchAtom, epochsAtom, lr0Atom } from "./atom";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  Button,
  Container,
  Curtain,
  Input,
  InputBox,
  Label,
  Select,
} from "./componentCSS";
import { useState } from "react";

interface trainData {
  epochs?: number;
  batch?: number;
  lr0?: number;
  resume?: boolean;
}

const ButtonContainer = styled.div`
  width: 266px;
  height: 100px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LearnButton = styled.button`
  width: 140px;
  height: 30px;
`;

const OptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
`;

const ResetButton = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 140px;
  height: 30px;
`;

const LearningOption = () => {
  const [hoverState, setHoverState] = useState("block");
  const [epochs, setEpochs] = useRecoilState(epochsAtom);
  const [batch, setBatch] = useRecoilState(batchAtom);
  const [lr0, setLr0] = useRecoilState(lr0Atom);

  const { data } = useQuery({
    queryKey: ["kakaoLogin"],
    queryFn: async () => {
      return (await fetch(`http://122.47.121.165:8080/stream_logs`)).json();
    },
  });

  console.log(data);

  const mutation = useMutation({
    mutationFn: (newData: trainData) => {
      //랄라
      // return fetch(`http://122.47.121.165:8080/trocr_train`, {
      return fetch(`http://122.47.121.165:8080/stream_logs`, {
        //파스칼
        // return fetch(`http://213.173.105.10:14775/yolo_train2`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
    },
  });

  const handleTrain = () => {
    mutation.mutate({
      epochs: 50,
      batch: 16,
      lr0: 0.001,
      resume: false,
    });
  };

  return (
    <>
      <div>
        {/* <ButtonContainer>
          <LearnButton onClick={handleTrain}>모델 학습 버튼</LearnButton>
        </ButtonContainer> */}
        <Curtain
          display={hoverState}
          onMouseEnter={() => setHoverState("none")}
        />
        <Container onMouseLeave={() => setHoverState("block")}>
          <OptionBox>
            <InputBox>
              <Label>에포크</Label>
              <Input type="number" defaultValue={epochs} />
            </InputBox>
            <InputBox>
              <Label>배치크기</Label>
              <Select defaultValue={batch}>
                <option value={16}>16</option>
                <option value={32}>32</option>
                <option value={64}>64</option>
                <option value={128}>128</option>
                <option value={256}>256</option>
                <option value={512}>512</option>
              </Select>
            </InputBox>
            <InputBox>
              <Label>학습률</Label>
              <Input type="number" step={0.00001} defaultValue={lr0} />
            </InputBox>
          </OptionBox>
          <Button>기본값 초기화</Button>
        </Container>
      </div>
    </>
  );
};

export default LearningOption;
