import React from "react";
import styled from "styled-components";
import MainPointBox from "./MainPointBox";

const MainPointContainer = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0% 50%,
    rgba(0, 0, 0, 0.05) 50% 100%
  );
  position: relative;
  padding-bottom: 150px;
`;

const CenterDiv = styled.div`
  width: 1210px;
  margin: 0 auto;
  padding: 0 30px;
  box-sizing: border-box;
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
    <MainPointContainer className="main_section main_point">
      <CenterDiv className="centerdiv">
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
