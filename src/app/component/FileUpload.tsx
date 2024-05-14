"use client";

import { useState } from "react";
import styled from "styled-components";
import { GoFileDirectory, GoFileDirectoryFill } from "react-icons/go";
import { Button, Container, Curtain, Input } from "./componentCSS";

const FileButton = styled.div`
  ${Button}
`;
// 버튼 CSS 적용 참고 글
//https://mong-blog.tistory.com/entry/input-file-%EB%B2%84%ED%8A%BC-%EC%BB%A4%EC%8A%A4%ED%84%B0%EB%A7%88%EC%9D%B4%EC%A7%95%ED%95%98%EA%B8%B0
// 멀티파트 react qeury 사용하기
//https://velog.io/@2pandi/react-query-useMutation%EC%9C%BC%EB%A1%9C-FormData-%EC%9A%94%EC%B2%AD-%EB%B3%B4%EB%82%B4%EA%B8%B0
const FileUpload = () => {
  const [hoverState, setHoverState] = useState("block");

  return (
    <div>
      <Curtain
        display={hoverState}
        onMouseEnter={() => setHoverState("none")}
      />
      <Container onMouseLeave={() => setHoverState("block")}>
        <GoFileDirectoryFill color={"skyblue"} size={100} />
        <form>
          <label htmlFor="fileInput">
            <FileButton>파일 업로드</FileButton>
            <Input type="file" id="fileInput" />
          </label>
        </form>
      </Container>
    </div>
  );
};

export default FileUpload;
