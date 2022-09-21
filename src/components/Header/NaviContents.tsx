import React from "react";
import styled from "styled-components";

const NaviContents = styled.div`
  margin: 13px 0 0 0;
  height: 100%;
`;

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
`;

const Li = styled.li`
  position: relative;
  margin: 0 20px;
  list-style: none;
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

  &:hover&::after {
    width: 100%;
  }
`;

const A = styled.a`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  padding: 5px 0;
  color: white;
`;

const menus = ["회사소개", "서비스소개", "인재채용", "고객지원"];

const NaviContentsComponent: React.FC = () => {
  return (
    <NaviContents className="navicontents">
      <Ul>
        {menus.map((menu, index) => (
          <Li key={index}>
            <A>{menu}</A>
          </Li>
        ))}
      </Ul>
    </NaviContents>
  );
};

export default NaviContentsComponent;
