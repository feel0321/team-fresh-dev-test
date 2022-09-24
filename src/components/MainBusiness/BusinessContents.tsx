import React from "react";
import styled from "styled-components";
import { processes1, processes2 } from "../../utils/constants";

const BusinessContentsContainer = styled.div`
  position: absolute;
  top: 300px;
  left: 50%;
  width: 1210px;
  margin-left: -605px;
  z-index: 2;
`;

const BusinessProcess = styled.div`
  &:first-child {
    li::after {
      position: absolute;
      top: 50%;
      right: -20%;
      width: 40%;
      height: 1px;
      background: rgba(255, 255, 255, 0.3);
      content: "▶";
      font-size: 10px;
      text-align: right;
      line-height: 1px;
    }

    li:last-child::after {
      top: 145%;
      right: 50%;
      margin-right: -5px;
      width: 10px;
      height: auto;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0% 50%,
        rgba(255, 255, 255, 0.3) 50% 60%,
        rgba(255, 255, 255, 0) 60% 100%
      );
      content: "▼";
      text-align: center;
      padding-top: 150px;
    }
  }

  &:nth-child(3) {
    li::after {
      position: absolute;
      top: 50%;
      left: -20%;
      width: 40%;
      height: 1px;
      background: rgba(255, 255, 255, 0.3);
      content: "◀";
      font-size: 10px;
      text-align: left;
      line-height: 1px;
    }

    li:first-child::after {
      top: -180%;
      left: 50%;
      margin-left: -5px;
      width: 10px;
      height: auto;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0% 50%,
        rgba(255, 255, 255, 0.3) 50% 60%,
        rgba(255, 255, 255, 0) 60% 100%
      );
      content: "▲";
      text-align: center;
      padding-bottom: 150px;
    }
  }
`;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  position: relative;
  width: 25%;
  font-family: Pretendard;
  text-align: center;
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  color: #fff;
`;

const Img = styled.img`
  width: 80px;
  filter: invert(100%) sepia(5%) saturate(0%) hue-rotate(244deg)
    brightness(104%) contrast(104%);
`;

const BusinessTitle = styled.div`
  font-family: Pretendard;
  text-align: center;
  font-weight: 600;
  font-size: 40px;
  line-height: 80px;
  color: #fff;
  padding: 80px 0;
`;

const BusinessComment = styled.div`
  position: relative;
  font-family: Pretendard;
  text-align: center;
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  color: #fff;
  padding: 80px 0 0;
`;

const BusinessContents: React.FC = () => {
  return (
    <BusinessContentsContainer className="business_contents">
      <BusinessProcess className="business_process">
        <Ul>
          {processes1.map(({ title, img }, index) => (
            <Li key={index}>
              <Img src={img} />
              <br />
              {title}
            </Li>
          ))}
        </Ul>
      </BusinessProcess>
      <BusinessTitle>콜드체인 원스톱 솔루션</BusinessTitle>
      <BusinessProcess className="business_process">
        <Ul>
          {processes2.map(({ title, img }, index) => (
            <Li key={index}>
              <Img src={img} />
              <br />
              {title}
            </Li>
          ))}
        </Ul>
      </BusinessProcess>
      <BusinessComment>최적화 시스템 기반 서비스 운영</BusinessComment>
    </BusinessContentsContainer>
  );
};

export default BusinessContents;
