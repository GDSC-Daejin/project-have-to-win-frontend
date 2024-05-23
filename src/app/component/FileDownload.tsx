"use client";

import { useEffect, useState } from "react";
import { Button, Container, ContainerPadding, Curtain } from "./componentCSS";
import { GoDownload } from "react-icons/go";
import { workStateAtom } from "./atom";
import { useRecoilState } from "recoil";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";

interface filesType {
  files: Array<string>;
}

const CurtainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0rem;
  left: 0rem;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
`;

const FileDownload = () => {
  const [hoverState, setHoverState] = useState("block");
  const [bestFileArr, setBestFileArr] = useState<Array<string>>();
  const [curtainType, setCurtainType] = useState(false);
  const [fileName, setFileName] = useState("");

  const [workState, setWorkState] = useRecoilState(workStateAtom);

  const queryClient = useQueryClient();

  const { data } = useQuery<filesType>({
    queryKey: ["files"],
    queryFn: async () => {
      return (await fetch(`http://122.47.121.165:8070/files`)).json();
    },
  });

  useEffect(() => {
    if (data && typeof data === "object") {
      setBestFileArr(
        data.files.filter((ele) => ele.includes("\\best.pt"))
      );
    }
  }, [data]);

  const startDownload = async (filePath: string) => {
    setCurtainType(false);
    setWorkState(0);

    const response = await fetch(`http://122.47.121.165:8070/download?file_path=${filePath}`);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = filePath;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleDownloadClick = (file: string) => {
    setFileName(file);
    setCurtainType(true);
    startDownload(file);
  };

  console.log(bestFileArr, "fileName", fileName);

  return (
    <div>
      <Container onMouseLeave={() => setHoverState("block")}>
        <ContainerPadding>
          <GoDownload color={"skyblue"} size={100} />
          <Button
            onClick={() => setCurtainType(true)}
            disabled={bestFileArr === undefined}
          >
            모델 다운로드
          </Button>
        </ContainerPadding>
        {workState !== 3 && (
          <Curtain
            display={hoverState}
            onMouseEnter={() => setHoverState("none")}
          />
        )}
      </Container>
      {curtainType && fileName === "" && (
        <CurtainBox>
          {bestFileArr?.map((ele, index) => (
            <div key={index}>
              <Button onClick={() => handleDownloadClick(ele)}>
                {ele}
              </Button>
            </div>
          ))}
        </CurtainBox>
      )}
      {curtainType && fileName !== "" && (
        <CurtainBox>
          <Button disabled>
            다운로드중...
          </Button>
        </CurtainBox>
      )}
    </div>
  );
};

export default FileDownload;
