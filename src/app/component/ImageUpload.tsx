"use client"

import styled from "styled-components";

const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 500px;
`
/* 여기다가 display 안 넣어서 스크롤 여태 안 먹음;;*/
const ModelContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 150px;
    margin: 10px;
    border: 3px solid blue;
`
const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 450px;
    height: 80px;
    border: 2px solid green;
`
/* 혼자 동 떨어진 이유는 결국 못 찾음. 그냥 이미지가 담기는 박스를 하나 더 만들었는데 이게 맞는듯. 버튼은 그대로고 이미지만 움직여야 하니깐 */
const ImageAddButton = styled.button`
    width: 50px;
    height: 50px;
    margin: 10px 15px 10px 10px;
`
const ModelName = styled.h2`
    margin: 10px 0 5px 10px;
`
const SampleText = styled.p`
    margin: 0 0 5px 10px;
    font-size: 12px;
`
const ThumbnailBox = styled.div`
    width: 400px;
    height: 80px;
    white-space: nowrap;
    overflow-x: scroll;
    // &::-webkit-scrollbar {
    //     width: 2px;
    //     height: 20px;
    //     border-radius: 10px;
    // }
    // 요고는 넣었더니 가로가 저절로 설정되지 않고 세로가 갑자기 생겨버림
    // 방향을 지정하면 상관없지 않을까
`
const Thumbnail = styled.img`
    width: 50px;
    height: 50px;
    border: 1px solid black;
    margin: 10px 15px 10px 10px;
`

const ImageUpload = () => {
    return(
        <>
            <UploadContainer>
                <ModelContainer>
                    <ModelName>Train</ModelName>
                    <SampleText>이미지 샘플</SampleText>
                    <ImageContainer>
                        <ImageAddButton />
                        <ThumbnailBox>
                            <Thumbnail /><Thumbnail /><Thumbnail /><Thumbnail />
                            <Thumbnail /><Thumbnail /><Thumbnail /><Thumbnail />
                            <Thumbnail /><Thumbnail /><Thumbnail /><Thumbnail />
                        </ThumbnailBox>
                    </ImageContainer>
                </ModelContainer>
                <ModelContainer>
                    <ModelName>Val</ModelName>
                    <SampleText>이미지 샘플</SampleText>
                    <ImageContainer>
                        <ImageAddButton />
                        <ThumbnailBox />
                    </ImageContainer>
                </ModelContainer>
                <ModelContainer>
                    <ModelName>Test</ModelName>
                    <SampleText>이미지 샘플</SampleText>
                    <ImageContainer>
                        <ImageAddButton />
                        <ThumbnailBox />
                    </ImageContainer>
                </ModelContainer>
            </UploadContainer>
        </>
    )
}

export default ImageUpload