import React, { useState } from "react";
import styled from "styled-components";
import { MainSection, MainTitle } from "../Common";
import ServiceContents from "./ServiceContents";
import ServiceTabBtn from "./ServiceTabBtn";

const MainServiceContainer = styled(MainSection)`
  overflow: hidden;
`;

const CustomMainTitle = styled(MainTitle)`
  min-width: 1210px;
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
    <MainServiceContainer className="main_service">
      <CustomMainTitle>
        <Span>Service Introduction</Span>
        <br />
        서비스소개
      </CustomMainTitle>
      <ServiceTabBox className="service_tabbox">
        <ServiceTabBtn selectedIdx={selectedIdx} onClickLi={setSelectedIdx} />
        <ServiceContents selectedIdx={selectedIdx} />
      </ServiceTabBox>
    </MainServiceContainer>
  );
};

export default MainService;
