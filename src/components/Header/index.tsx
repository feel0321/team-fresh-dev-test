import React from "react";
import styled from "styled-components";
import LogoComponent from "./Logo";
import NaviContentsComponent from "./NaviContents";

const Header = styled.div`
  position: fixed;
  width: 100%;
  min-width: 1210px;
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
  return (
    <Header className="header">
      <CenterDiv className="centerdiv">
        <LogoComponent />
        <NaviContentsComponent />
      </CenterDiv>
    </Header>
  );
};

export default HeaderComponent;
