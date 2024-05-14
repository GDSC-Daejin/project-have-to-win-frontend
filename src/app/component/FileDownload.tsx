"use client";

import { useState } from "react";
import { Button, Container, ContainerPadding, Curtain } from "./componentCSS";
import { GoDownload } from "react-icons/go";
import { workStateAtom } from "./atom";
import { useRecoilState } from "recoil";

const FileDownload = () => {
  const [hoverState, setHoverState] = useState("block");

  const [workState, setWorkState] = useRecoilState(workStateAtom);

  return (
    <div>
      <Container onMouseLeave={() => setHoverState("block")}>
        <ContainerPadding>
          <GoDownload color={"skyblue"} size={100} />
          <Button>모델 다운로드</Button>
        </ContainerPadding>
        {workState !== 3 && (
          <Curtain
            display={hoverState}
            onMouseEnter={() => setHoverState("none")}
          />
        )}
      </Container>
    </div>
  );
};

export default FileDownload;
