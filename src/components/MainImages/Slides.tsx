import React from "react";
import styled from "styled-components";
import useSetTimeout from "../../hooks/useSetTimeout";

const SlidesContainer = styled.div`
  min-width: 1150px;
  max-width: 2000px;
  height: 100vh;
  /* position: relative; */
  /* text-align: center; */

  border: solid black 1px;
`;

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -575px;
  font-size: 0;
  z-index: 90;
  margin-top: 120px;
  display: flex;
`;

const Li = styled.li`
  margin: 0 3px;
  list-style: none;
`;

interface AProps {
  isSelected: boolean;
}

const A = styled.a<AProps>`
  display: block;
  width: 45px;
  height: 7px;
  font-size: 0;
  background-color: ${({ isSelected }) => (isSelected ? "#005cdf" : "white")};
  border-radius: 100px;
  cursor: pointer;
`;

const menus = [0, 1, 2];

const Slides: React.FC = () => {
  const [idx, setCount] = useSetTimeout(3000);

  return (
    <SlidesContainer id="slides1">
      <Ul className="slidesjs-pagination">
        {menus.map((menu, index) => (
          <Li key={index} onClick={() => setCount(index)}>
            <A isSelected={idx === index}>{menu}</A>
          </Li>
        ))}
      </Ul>
    </SlidesContainer>
  );
};

export default Slides;
