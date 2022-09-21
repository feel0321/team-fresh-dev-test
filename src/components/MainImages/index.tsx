import React from "react";
import styled from "styled-components";
import Slides from "./Slides";

const MainImagesContainer = styled.div`
  position: relative;
  width: 100%;
  min-width: 1210px;
  height: 100vh;
  /* overflow: hidden; */
`;

const MainImagesText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  /* text-align: left; */
  /* z-index: 20; */
  margin-left: -575px;
  margin-top: -150px;
`;

const MainImagesTitleK = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 55px;
  line-height: 65px;
  color: white;
  margin: 20px 0 30px;
`;

const MainImagesContent = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: white;
`;

const MainImages: React.FC = () => {
  return (
    <MainImagesContainer className="main_images">
      <MainImagesText className="main_images_text">
        <MainImagesTitleK className="main_images_title_k">
          대한민국 No.1
          <br />
          Cold-chain platform
        </MainImagesTitleK>
        <MainImagesContent className="main_images_content">
          팀프레시는 신선함을 이어 풍요로운 세상을 만듭니다
        </MainImagesContent>
      </MainImagesText>
      <Slides />
    </MainImagesContainer>
  );
};

export default MainImages;
