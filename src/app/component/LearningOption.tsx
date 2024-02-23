"use client"

import styled from 'styled-components'

const ButtonContainer = styled.div`
  width: 266px;
  height: 100px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InputContainer = styled.div`
  width: 266px;
  height: 330px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 225px;
  justify-content: space-between;
  margin: 10px;
`

const Input = styled.input`
  width: 140px;
  height: 30px;
`

const LearnButton = styled.button`
  width: 140px;
  height: 30px;
`

const ResetButton = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 140px;
  height: 30px;
`

const LearningOption = () => {
    return(
        <>
            <ButtonContainer>
              <LearnButton>모델 학습 버튼</LearnButton>
            </ButtonContainer>
            <InputContainer>
            <InputBox>
              <div>에포크: </div>
              <Input />
            </InputBox>
            <InputBox>
              <div>배치크기: </div>
              <Input />
            </InputBox>
            <InputBox>
              <div>학습률: </div>
              <Input />
            </InputBox>
              <ResetButton>기본값 초기화</ResetButton>
            </InputContainer>
        </>
    )
}

export default LearningOption