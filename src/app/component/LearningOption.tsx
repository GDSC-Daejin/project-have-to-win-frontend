"use client";

import { useRecoilState } from "recoil";
import styled from "styled-components";
import { batchAtom, epochsAtom, lr0Atom, workStateAtom } from "./atom";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  Button,
  Container,
  ContainerPadding,
  Curtain,
  Input,
  InputBox,
  Label,
  Select,
} from "./componentCSS";
import { useState } from "react";
import { useForm } from "react-hook-form";

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
  const [workState, setWorkState] = useRecoilState(workStateAtom);

  const { handleSubmit, register, getValues, setValue } = useForm();

  const { data } = useQuery({
    queryKey: ["kakaoLogin"],
    queryFn: async () => {
      return (await fetch(`http://122.47.121.165:8080/stream_logs`)).json();
    },
  });

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

  const handleOptionReset = () => {
    setEpochs(50);
    setBatch(16);
    setLr0(0.001);
    setValue("epochs", 50);
    setValue("batch", 16);
    setValue("lr0", 0.001);
  };

  // console.log(
  //   "epochsAtom: ",
  //   epochs,
  //   "batchAtom: ",
  //   batch,
  //   "lrAtom: ",
  //   lr0,
  //   "getValueEpochs: ",
  //   getValues("epochs"),
  //   "getValueBatch: ",
  //   getValues("batch"),
  //   "getValueLr0: ",
  //   getValues("lr0")
  // );

  return (
    <>
      <div>
        {/* <ButtonContainer>
          <LearnButton onClick={handleTrain}>모델 학습 버튼</LearnButton>
        </ButtonContainer> */}

        <Container onMouseLeave={() => setHoverState("block")}>
          <ContainerPadding padding="120px 10px">
            <OptionBox>
              <InputBox>
                <Label>에포크</Label>
                <Input
                  type="number"
                  defaultValue={epochs}
                  {...register("epochs", {
                    onChange: () => {
                      setEpochs(getValues("epochs"));
                    },
                  })}
                />
              </InputBox>
              <InputBox>
                <Label>배치크기</Label>
                <Select
                  defaultValue={batch}
                  {...register("batch", {
                    onChange: () => {
                      setBatch(getValues("batch"));
                    },
                  })}
                >
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
                <Input
                  type="number"
                  step={0.00001}
                  defaultValue={lr0}
                  {...register("lr0", {
                    onChange: () => {
                      setLr0(getValues("lr0"));
                    },
                  })}
                />
              </InputBox>
            </OptionBox>
            <Button onClick={() => handleOptionReset()}>기본값 초기화</Button>
          </ContainerPadding>
          {workState !== 1 && (
            <Curtain
              display={hoverState}
              onMouseEnter={() => setHoverState("none")}
            />
          )}
        </Container>
      </div>
    </>
  );
};

export default LearningOption;
