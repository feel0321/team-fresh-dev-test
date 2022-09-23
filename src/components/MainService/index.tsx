import React, { useState } from "react";
import styled from "styled-components";
import ServiceContents from "./ServiceContents";
import ServiceTabBtn from "./ServiceTabBtn";

const MainServiceContainer = styled.div`
  overflow: hidden;
  position: relative;
  padding: 150px 0;
`;

const MainTitle = styled.div`
  width: 100%;
  min-width: 1210px;
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

const ServiceTabBox = styled.div`
  position: relative;
  width: 1210px;
  margin: 50px auto 0;
  padding: 0 30px;
  box-sizing: border-box;
`;

const MainService: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <MainServiceContainer className="main_section main_service">
      <MainTitle className="main_title">
        <Span>Service Introduction</Span>
        <br />
        서비스소개
      </MainTitle>
      <ServiceTabBox className="service_tabbox">
        <ServiceTabBtn selectedIdx={selectedIdx} onClickLi={setSelectedIdx} />
        <ServiceContents selectedIdx={selectedIdx} />
      </ServiceTabBox>
    </MainServiceContainer>
  );
};

export default MainService;
