import React from "react";
import styled from "styled-components";
import { PageInterface } from "../../types/page";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
  position: absolute;
  width: 140px;
  top: 50px;
  left: 50%;
  margin-left: -70px;
  margin-top: -20px;
  padding-top: 20px;
  display: none;

  &:hover {
    display: block;
  }
`;

const Ul = styled.ul`
  padding: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Li = styled.li`
  text-align: center;
  padding: 5px 0;
  margin: 0;
  font-family: Pretendard;
  font-weight: 600;
  color: white;
  font-size: 14px;
  cursor: pointer;
  list-style: none;
  line-height: 40px;
`;

interface SubMenuProps {
  menus: PageInterface[];
}

const SubMenu: React.FC<SubMenuProps> = ({ menus }) => {
  const navigate = useNavigate();

  return (
    <Div>
      <Ul>
        {menus.map(({ title, path }, index) => (
          <Li key={index} onClick={() => navigate(path)}>
            {title}
          </Li>
        ))}
      </Ul>
    </Div>
  );
};

export default SubMenu;
