import React from "react";
import styled from "styled-components";
import LogoImage from "../../images/logo_w.png";

const Logo = styled.div`
  margin: 20px 0;
`;

const Img = styled.img`
  width: 110px;
`;

const LogoComponent: React.FC = () => {
  return (
    <Logo className="logo">
      <a href="https://www.teamfresh.kr/php/main.htm">
        <Img src={LogoImage} />
      </a>
    </Logo>
  );
};

export default LogoComponent;
