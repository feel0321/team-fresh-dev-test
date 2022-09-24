import React from "react";
import styled from "styled-components";
import useSetTimeout from "../../hooks/useSetTimeout";
import { MainImage1, MainImage2, MainImage3 } from "../../images";

const SlidesContainer = styled.div`
  min-width: 1150px;
  max-width: 2000px;
  height: 100vh;
  position: relative;
  /* text-align: center; */
  overflow: hidden;
`;

interface SlideProps {
  selectedIndex: number;
}

const Slide = styled.div<SlideProps>`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  left: ${({ selectedIndex }) =>
    selectedIndex === 0 ? 0 : selectedIndex === 1 ? "-100%" : "-200%"};
  top: 0;
  transition: left 0.5s ease;
`;

interface SlideItemProps {
  image: string;
}

const SlideItem = styled.div<SlideItemProps>`
  background: ${({ image }) =>
    `url(http://localhost:3000${image}) no-repeat 50% 50%`};
  background-size: cover;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
`;

const Ul = styled.ul`
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

const slideImages = [MainImage1, MainImage2, MainImage3];
const menus = [0, 1, 2];

const Slides: React.FC = () => {
  const [idx, setCount] = useSetTimeout(3000);

  return (
    <SlidesContainer id="slides1" className="sliders">
      <Slide className="slidesjs-container" selectedIndex={idx}>
        {slideImages.map((image, index) => (
          <SlideItem key={index} className="slide_contents" image={image} />
        ))}
      </Slide>
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
