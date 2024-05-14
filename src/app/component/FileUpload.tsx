"use client";

import { useState } from "react";
import styled from "styled-components";
import { GoFileDirectory, GoFileDirectoryFill } from "react-icons/go";
import { Button, Container, Curtain } from "./componentCSS";

const FileUpload = () => {
  const [hoverState, setHoverState] = useState("block");

  return (
    <>
      <Curtain
        display={hoverState}
        onMouseEnter={() => setHoverState("none")}
      />
      <Container
        onMouseLeave={() => setHoverState("block")}
        padding="140px 10px 190px 10px"
      >
        <GoFileDirectoryFill color={"skyblue"} size={100} />
        <Button>파일 업로드</Button>
      </Container>
    </>
  );
};

export default FileUpload;
