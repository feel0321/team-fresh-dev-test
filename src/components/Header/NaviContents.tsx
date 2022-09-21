import React from "react";
import styled from "styled-components";
import SubMenu from "./SubMenu";

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

  &:hover {
    &::after {
      width: 100%;
    }
    div {
      display: block;
    }
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

const menus = [
  { title: "회사소개" },
  { title: "서비스소개", subMenus: ["물류", "유통", "프랜차이즈", "보험"] },
  { title: "인재채용" },
  {
    title: "고객지원",
    subMenus: ["공지사항", "팀프뉴스", "문의하기", "자주 묻는 질문"],
  },
];

const NaviContentsComponent: React.FC = () => {
  return (
    <NaviContents className="navicontents">
      <Ul>
        {menus.map(({ title, subMenus }, index) => (
          <Li key={index}>
            <A>{title}</A>
            {subMenus !== undefined && <SubMenu menus={subMenus} />}
          </Li>
        ))}
      </Ul>
    </NaviContents>
  );
};

export default NaviContentsComponent;
