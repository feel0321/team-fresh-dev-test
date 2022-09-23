import React, { Fragment } from "react";
import styled from "styled-components";
import ArrowIcon from "../../images/arrowicon.png";
import { services } from "../../utils/constants";

const ServiceContentsContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto 0;
  display: flex;
`;

const ServiceText = styled.div`
  margin-top: 230px;
  flex-grow: 1;
`;

const ServiceTextTitle = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 35px;
  line-height: 45px;
`;

const ServiceTextComment = styled.div`
  font-family: Pretendard;
  font-weight: 300;
  font-size: 18px;
  line-height: 25px;
  color: #666;
  margin: 30px 0 0 0;
`;

const ServiceLink = styled.div`
  cursor: pointer;
  margin: 30px 0 0 0;
  opacity: 0.3;
`;

const ServiceImg = styled.div`
  width: 55%;
  flex-shrink: 0;
`;

const Img = styled.img`
  width: 100%;
`;

interface ServiceContentsProps {
  selectedIdx: number;
}

const ServiceContents: React.FC<ServiceContentsProps> = ({ selectedIdx }) => {
  return (
    <ServiceContentsContainer className="service_contents">
      <ServiceText className="service_text">
        <ServiceTextTitle className="service_text_title">
          {services[selectedIdx].content.split("/").map((data, index, arr) => (
            <Fragment key={index}>
              {data}
              {index !== arr.length - 1 && <br />}
            </Fragment>
          ))}
        </ServiceTextTitle>
        <ServiceTextComment className="service_text_comment">
          {services[selectedIdx].comment.split("/").map((data, index, arr) => (
            <Fragment key={index}>
              {data}
              {index !== arr.length - 1 && <br />}
            </Fragment>
          ))}
        </ServiceTextComment>
        <ServiceLink className="service_link">
          <img src={ArrowIcon} />
        </ServiceLink>
      </ServiceText>
      <ServiceImg className="service_img">
        <Img src={services[selectedIdx].img} />
      </ServiceImg>
    </ServiceContentsContainer>
  );
};

export default ServiceContents;
