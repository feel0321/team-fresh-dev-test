import React from "react";
import styled from "styled-components";
import { CenterDiv, MainSection } from "../Common";
import MainPointBox from "./MainPointBox";

const MainPointContainer = styled(MainSection)`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0% 50%,
    rgba(0, 0, 0, 0.05) 50% 100%
  );
  padding-top: 0;
`;

const MainTitle = styled.div`
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

const MainPoint: React.FC = () => {
  return (
    <MainPointContainer className="main_point">
      <CenterDiv>
        <MainTitle className="main_title">
          <Span>팀프레시를 이끄는 힘</Span>
          <br />
          핵심역량
        </MainTitle>
        <MainPointBox />
      </CenterDiv>
    </MainPointContainer>
  );
};

export default MainPoint;
