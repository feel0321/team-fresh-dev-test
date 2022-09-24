import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import NaviContents from "./NaviContents";
import useScroll from "../../hooks/useScroll";
import { CenterDiv } from "../Common";

interface HeaderProps {
  isTop: boolean;
}

const HeaderContainer = styled.div<HeaderProps>`
  position: fixed;
  width: 100%;
  min-width: 1210px;
  background-color: ${({ isTop }) => !isTop && "rgba(2, 21, 48, 0.9)"};
  z-index: 100;
`;

const CustomCenterDiv = styled(CenterDiv)`
  display: flex;
  justify-content: space-between;
`;

const Header: React.FC = () => {
  const isTop = useScroll();

  return (
    <HeaderContainer className="header" isTop={isTop}>
      <CustomCenterDiv>
        <Logo />
        <NaviContents />
      </CustomCenterDiv>
    </HeaderContainer>
  );
};

export default Header;
