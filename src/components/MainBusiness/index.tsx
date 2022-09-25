import React from "react";
import styled from "styled-components";
import { MainSection, MainTitle } from "../Common";
import BusinessContents from "./BusinessContents";
import MovieContent from "./MovieContent";

const MainBusinessContainer = styled(MainSection)`
  min-width: 1210px;
  height: 1050px;
  padding: 0;
  background: #000;
  /* overflow: hidden; */
`;

const CustomMainTitle = styled(MainTitle)`
  position: absolute;
  top: 150px;
  left: 0;
  width: 100%;
  color: #fff;
  z-index: 2;
`;

const Span = styled.span`
  font-weight: 300;
  font-size: 20px;
`;

const MainBusiness: React.FC = () => {
  return (
    <MainBusinessContainer className="main_business">
      <CustomMainTitle>
        <Span>콜드체인 원스톱 솔루션으로 한눈에</Span>
        <br />
        신선상품의 유통과정
      </CustomMainTitle>
      <BusinessContents />
      <MovieContent />
    </MainBusinessContainer>
  );
};

export default MainBusiness;
