import React from "react";
import type { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { services } from "../../utils/constants";

const ServiceTabBtnContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 30px;
  width: 45%;
  background: #f5f5f5;
  padding: 0;
  box-sizing: border-box;
  z-index: 1;
`;

const Ul = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0 auto;
  display: flex;
`;

interface LiProps {
  isSelected: boolean;
}

const Li = styled.li<LiProps>`
  position: relative;
  width: 25%;
  text-align: center;
  font-family: Pretendard;
  font-weight: 300;
  font-size: 20px;
  line-height: 40px;
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  cursor: pointer;
  padding: 75px 0 15px;
  box-sizing: border-box;
  list-style: none;
  background-color: ${({ isSelected }) => isSelected && "#02204b"};

  & img {
    filter: ${({ isSelected }) =>
      isSelected &&
      "invert(100%) sepia(5%) saturate(0%) hue-rotate(244deg) brightness(104%) contrast(104%)"};
  }
`;

const Img = styled.img`
  position: absolute;
  top: 15px;
  left: 50%;
  width: 60px;
  margin-left: -30px;
`;

interface ServiceTabBtnProps {
  selectedIdx: number;
  onClickLi: Dispatch<SetStateAction<number>>;
}

const ServiceTabBtn: React.FC<ServiceTabBtnProps> = ({
  selectedIdx,
  onClickLi,
}) => {
  return (
    <ServiceTabBtnContainer className="service_tabbtn">
      <Ul>
        {services.map(({ icon, title }, index) => (
          <Li
            key={index}
            isSelected={selectedIdx === index}
            onClick={() => onClickLi(index)}
          >
            <Img src={icon} />
            {title}
          </Li>
        ))}
      </Ul>
    </ServiceTabBtnContainer>
  );
};

export default ServiceTabBtn;
