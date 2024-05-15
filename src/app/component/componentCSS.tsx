import { ReactNode } from "react";
import styled, { css } from "styled-components";

export const Container = styled.div<{ padding?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-style: solid;
  border-width: 1px;
  border-color: skyblue;
  border-radius: 8px;
  width: 280px;
  height: 500px;
  margin: 30px;

  background-color: white;
`;

export const ContainerPadding = styled.div<{ padding?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.padding || "140px 10px 190px 10px"};
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

export const InputCSS = css`
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

export const InputButton = styled.input`
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
  &:disabled {
  }
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
  &:disabled {
  }
`;

export const ButtonCSS = css`
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
  &:disabled {
  }
`;

const ScrollBox = styled.div`
  height: 600;
  overflow-y: auto;
`;

export default function MainScroll({ children }: { children: ReactNode }) {
  return <ScrollBox>{children}</ScrollBox>;
}
