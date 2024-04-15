"use client";

import { useRecoilState } from "recoil";
import styled from "styled-components";
import { batchAtom, epochsAtom, lr0Atom } from "./atom";
import { useMutation } from "@tanstack/react-query";

interface trainData {
  epochs: number;
  batch: number;
  lr0: number;
  resume: boolean;
}

const ButtonContainer = styled.div`
  width: 266px;
  height: 100px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  width: 266px;
  height: 330px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 225px;
  justify-content: space-between;
  margin: 10px;
`;

const Input = styled.input`
  width: 140px;
  height: 30px;
`;

const Select = styled.select`
  width: 140px;
  height: 30px;
`;

const LearnButton = styled.button`
  width: 140px;
  height: 30px;
`;

const ResetButton = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 140px;
  height: 30px;
`;

const LearningOption = () => {
  const [epochs, setEpochs] = useRecoilState(epochsAtom);
  const [batch, setBatch] = useRecoilState(batchAtom);
  const [lr0, setLr0] = useRecoilState(lr0Atom);

  const mutation = useMutation({
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
      <ButtonContainer>
        <LearnButton onClick={handleTrain}>모델 학습 버튼</LearnButton>
      </ButtonContainer>
      <InputContainer>
        <InputBox>
          <div>에포크: </div>
          <Input type="number" defaultValue={epochs} />
        </InputBox>
        <InputBox>
          <div>배치크기: </div>
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
          <div>학습률: </div>
          <Input type="number" step={0.00001} defaultValue={lr0} />
        </InputBox>
        <ResetButton>기본값 초기화</ResetButton>
      </InputContainer>
    </>
  );
};

export default LearningOption;
