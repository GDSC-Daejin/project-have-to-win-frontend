"use client";

import { useState } from "react";
import { Button, Container, ContainerPadding, Curtain } from "./componentCSS";
import { GoDownload } from "react-icons/go";
import { workStateAtom } from "./atom";
import { useRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";

const FileDownload = () => {
  const [hoverState, setHoverState] = useState("block");

  const [workState, setWorkState] = useRecoilState(workStateAtom);

  const { data } = useQuery({
    queryKey: ["files"],
    queryFn: async () => {
      return (await fetch(`http://122.47.121.165:8070/files`)).json();
    },
  });

  console.log(data.files[0]);

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
