"use client";

import { useState } from "react";
import { Button, Container, Curtain } from "./componentCSS";
import { GoDownload } from "react-icons/go";

const FileDownload = () => {
  const [hoverState, setHoverState] = useState("block");

  return (
    <div>
      <Curtain
        display={hoverState}
        onMouseEnter={() => setHoverState("none")}
      />
      <Container onMouseLeave={() => setHoverState("block")}>
        <GoDownload color={"skyblue"} size={100} />
        <Button>모델 다운로드</Button>
      </Container>
    </div>
  );
};

export default FileDownload;
