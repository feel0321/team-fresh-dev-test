import React from "react";
import styled from "styled-components";
import BusinessContents from "./BusinessContents";

const MainBusinessContainer = styled.div`
  width: 100%;
  height: 1050px;
  padding: 0;
  background: #000;
  /* overflow: hidden; */
  position: relative;
`;

const MainTitle = styled.div`
  position: absolute;
  top: 150px;
  left: 0;
  width: 100%;
  color: #fff;
  z-index: 2;
  font-family: Pretendard;
  text-align: center;
  font-weight: 700;
  font-size: 55px;
  line-height: 45px;
`;

const Span = styled.span`
  font-weight: 300;
  font-size: 20px;
`;

const MainBusiness: React.FC = () => {
  return (
    <MainBusinessContainer className="main_section main_business">
      <MainTitle className="main_title">
        <Span>콜드체인 원스톱 솔루션으로 한눈에</Span>
        <br />
        신선상품의 유통과정
      </MainTitle>
      <BusinessContents />
    </MainBusinessContainer>
  );
};

export default MainBusiness;
