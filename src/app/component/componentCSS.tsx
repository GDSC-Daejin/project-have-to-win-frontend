import styled from "styled-components";

export const Container = styled.div<{ padding?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(180, 180, 180);
  border-radius: 8px;
  width: 280px;
  height: 500px;
  padding: ${(props) => props.padding || "120px 10px"};
  background-color: white;
`;

export const Curtain = styled.div<{ display: string }>`
  position: absolute;
  z-index: 1;
  border-radius: 8px;
  width: 280px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${(props) => props.display || "block"};
`;

export const Label = styled.div`
  color: skyblue;
  font-size: 13px;
  font-weight: 700;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const Input = styled.input`
  border-style: solid;
  border-width: 1px;
  border-color: skyblue;
  border-radius: 3px;
  color: skyblue;
  width: 200px;
  height: 35px;
  padding: 5px 10px;
  margin: 5px 0;
  background-color: white;
  cursor: pointer;
`;

export const Select = styled.select`
  border-style: solid;
  border-width: 1px;
  border-color: skyblue;
  border-radius: 3px;
  color: skyblue;
  width: 200px;
  height: 35px;
  padding: 5px 10px;
  margin: 5px 0;
  background-color: white;
  cursor: pointer;
`;

export const Button = styled.button`
  border-style: solid;
  border-width: 1px;
  border-color: skyblue;
  border-radius: 3px;
  font-weight: 700;
  color: skyblue;
  width: 200px;
  height: 35px;
  padding: 5px 10px;
  margin: 5px 0;
  background-color: white;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: skyblue;
    border: none;
  }
`;
