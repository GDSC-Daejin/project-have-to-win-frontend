"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { GoFileDirectory, GoFileDirectoryFill } from "react-icons/go";
import {
  Button,
  ButtonCSS,
  Container,
  ContainerPadding,
  Curtain,
  Input,
  InputCSS,
} from "./componentCSS";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { workStateAtom } from "./atom";
import { useMutation } from "@tanstack/react-query";

const FileButton = styled.div`
  text-align: center;
  ${ButtonCSS};
`;
const FileInput = styled.input`
  ${InputCSS}
  display:none;
`;
const FileListBox = styled.div`
  text-align: center;
  ${ButtonCSS};
`;

// 멀티파트 react qeury 사용하기
//https://velog.io/@2pandi/react-query-useMutation%EC%9C%BC%EB%A1%9C-FormData-%EC%9A%94%EC%B2%AD-%EB%B3%B4%EB%82%B4%EA%B8%B0
const FileUpload = () => {
  const { handleSubmit, register, getValues } = useForm();
  const [hoverState, setHoverState] = useState("block");
  const [fileData, setFileData] = useState("");

  const [workState, setWorkState] = useRecoilState(workStateAtom);

  // 파일 삭제
  const mutationDeleteFile = useMutation({
    mutationFn: () => {
      return fetch(`http://122.47.121.165:8080/delete_uploads`, {
        method: "POST",
      });
    },
    onSuccess: () => {
      mutationUploadFile.mutate(getValues("FileInput"));
    },
  });

  // 파일 업로드
  const mutationUploadFile = useMutation({
    mutationFn: (newData: File) => {
      return fetch(`http://122.47.121.165:8080/upload`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: newData,
      });
    },
    onSuccess: () => {
      mutationPreprocessFile.mutate();
    },
  });

  // 전처리
  const mutationPreprocessFile = useMutation({
    mutationFn: () => {
      return fetch(`http://122.47.121.165:8080/preprocess`, {
        method: "POST",
      });
    },
  });

  return (
    <div>
      <Container onMouseLeave={() => setHoverState("block")}>
        <ContainerPadding>
          <GoFileDirectoryFill color={"skyblue"} size={100} />
          <form>
            {fileData === "" ? (
              <label htmlFor="fileInput">
                <FileButton>파일 업로드</FileButton>
              </label>
            ) : (
              <label htmlFor="fileInput">
                <FileListBox>
                  {getValues("fileInput") ? fileData : ""}
                </FileListBox>
              </label>
            )}

            <FileInput
              type="file"
              accept=".zip, .apk, .rar, .7z, .tar"
              id="fileInput"
              {...register("fileInput", {
                onChange: () => {
                  setFileData(getValues("fileInput")?.[0]?.name);
                  setWorkState(1);
                  mutationDeleteFile.mutate();
                },
              })}
            />
          </form>
        </ContainerPadding>
        {workState !== 0 && (
          <Curtain
            display={hoverState}
            onMouseEnter={() => setHoverState("none")}
          />
        )}
      </Container>
    </div>
  );
};

export default FileUpload;
