import React from "react";
import styled from "styled-components";
import { MainSection } from "../Common";

const MainIntroduceContainer = styled(MainSection)`
  padding: 200px 0;
  background: rgba(255, 255, 255, 0.97);
  overflow: hidden;
  font-family: Pretendard;
  text-align: center;
  font-weight: 600;
  font-size: 30px;
  line-height: 35px;
`;

const MainIntroduce: React.FC = () => {
  return (
    <MainIntroduceContainer className="main_introduce">
      안전하고 신속하게 고객에 먹거리를 제공하고 있습니다.
      <br />
      국내 유일 Door to Door Cold Chain Service, 팀프레시를 만나보세요.
    </MainIntroduceContainer>
  );
};

export default MainIntroduce;
