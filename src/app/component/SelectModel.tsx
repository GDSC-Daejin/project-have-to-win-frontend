"use client";

import styled from "styled-components";

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
`;

const SelectModel = () => {
  return (
    <>
      <Container>
        <Button>Yolo 모델 선택</Button>
        <Button>OCR 모델 선택</Button>
      </Container>
    </>
  );
};

export default SelectModel;
