import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import NaviContents from "./NaviContents";
import useScroll from "../../hooks/useScroll";

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

const CenterDiv = styled.div`
  width: 1210px;
  padding: 0 30px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const Header: React.FC = () => {
  const isTop = useScroll();

  return (
    <HeaderContainer className="header" isTop={isTop}>
      <CenterDiv className="centerdiv">
        <Logo />
        <NaviContents />
      </CenterDiv>
    </HeaderContainer>
  );
};

export default Header;
