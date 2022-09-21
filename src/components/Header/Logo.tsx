import React from "react";
import { Link } from "react-router-dom";
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
      <Link to="/">
        <Img src={LogoImage} />
      </Link>
    </Logo>
  );
};

export default LogoComponent;
