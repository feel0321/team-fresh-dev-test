import React from "react";
import styled from "styled-components";
import LogoComponent from "./Logo";
import NaviContentsComponent from "./NaviContents";
import useScroll from "../../hooks/useScroll";

interface HeaderProps {
  isTop: boolean;
}

const Header = styled.div<HeaderProps>`
  position: fixed;
  width: 100%;
  min-width: 1210px;
  background-color: ${({ isTop }) => !isTop && "rgba(2, 21, 48, 0.9)"};
`;

const CenterDiv = styled.div`
  width: 1210px;
  padding: 0 30px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const HeaderComponent: React.FC = () => {
  const isTop = useScroll();

  return (
    <Header className="header" isTop={isTop}>
      <CenterDiv className="centerdiv">
        <LogoComponent />
        <NaviContentsComponent />
      </CenterDiv>
    </Header>
  );
};

export default HeaderComponent;
