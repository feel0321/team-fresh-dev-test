import React from "react";
import styled from "styled-components";
import SubMenu from "./SubMenu";
import { Link } from "react-router-dom";
import { menus } from "../../utils/constants";

const NaviContentsContainer = styled.div`
  margin: 13px 0 0 0;
  height: 100%;
`;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  position: relative;
  margin: 0 20px;
  cursor: pointer;

  &:last-child {
    margin: 0 0 0 20px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 29px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: white;
    transition: width 0.1s ease;
  }

  &:hover {
    &::after {
      width: 100%;
    }
    div {
      display: block;
    }
  }
`;

const StyledLink = styled(Link)`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  padding: 5px 0;
  color: white;
  text-decoration: none;
`;

const NaviContents: React.FC = () => {
  return (
    <NaviContentsContainer className="navicontents">
      <Ul>
        {menus.map(({ title, path, subMenus }, index) => (
          <Li key={index}>
            <StyledLink to={path}>{title}</StyledLink>
            {subMenus !== undefined && <SubMenu menus={subMenus} />}
          </Li>
        ))}
      </Ul>
    </NaviContentsContainer>
  );
};

export default NaviContents;
