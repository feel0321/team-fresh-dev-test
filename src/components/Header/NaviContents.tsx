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

interface Props {
  isLast: boolean;
}

const Li = styled.li<Props>`
  margin: ${({ isLast }) => (isLast ? "0 0 0 20px" : "0 20px")};
  list-style: none;
  cursor: pointer;
`;

const A = styled.a`
  /* font-family: Pretendard; */
  /* font-weight: 300; */
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
          <Li key={index} isLast={index === menus.length - 1}>
            <A>{menu}</A>
          </Li>
        ))}
      </Ul>
    </NaviContents>
  );
};

export default NaviContentsComponent;
