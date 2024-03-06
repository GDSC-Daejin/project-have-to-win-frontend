"use client"

import styled from "styled-components"

const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 500px;
    // border: 3px solid white;
    // border-radius: 5px;
`
const ModelContainer = styled.div`
    width: 450px;
    height: 150px;
    margin: 10px;
    border: 3px solid blue;
`
const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 2px solid green;
`
const ImageAddButton = styled.button`
    width: 50px;
    height: 50px;
    margin: 10px 0 10px 10px;
`
const ModelName = styled.h2`
    margin: 10px 0 5px 10px;
`
const SampleText = styled.p`
    margin: 0 0 5px 10px;
    font-size: 12px;
`
const ThumbnailBox = styled.img`
    width: 50px;
    height: 50px;
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
                        <ThumbnailBox />
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