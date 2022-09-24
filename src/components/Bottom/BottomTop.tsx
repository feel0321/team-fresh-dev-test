import React from "react";
import styled from "styled-components";
import { LogoImage } from "../../images";
import { bottoms } from "../../utils/constants";

const BottomTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 30px;
`;

const LogoImg = styled.img`
  width: 100px;
`;

const FooterBtnUl = styled.ul`
  display: flex;
`;

const FooterBtnLi = styled.li`
  position: relative;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 300;
  line-height: 25px;
  color: #ccc;
  margin: 0 15px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;

    &::after {
      position: absolute;
      top: 7px;
      left: -15px;
      width: 1px;
      height: 10px;
      background: #ccc;
      content: "";
      opacity: 0.5;
      cursor: none;
    }
  }
`;

const BottomTop: React.FC = () => {
  return (
    <BottomTopContainer>
      <LogoImg src={LogoImage} className="logo" />
      <FooterBtnUl className="footer_btn">
        {bottoms.map((bottom, index) => (
          <FooterBtnLi key={index}>{bottom}</FooterBtnLi>
        ))}
      </FooterBtnUl>
    </BottomTopContainer>
  );
};

export default BottomTop;
