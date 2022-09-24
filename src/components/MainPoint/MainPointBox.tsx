import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { mainPoints } from "../../utils/constants";

interface StyledProps {
  isSelected: boolean;
}

const MainPointBoxContainer = styled.div`
  margin: 50px 0 0 0;
  display: flex;

  & * {
    transition: all 0.4s ease;
  }
`;

const PointContent = styled.div<StyledProps>`
  position: relative;
  width: ${({ isSelected }) => (isSelected ? "54.7%" : "14.7%")};
  height: 500px;
  margin: 0 0.15%;
  background: #000;
  overflow: hidden;
`;

const PointText = styled.div<StyledProps>`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: ${({ isSelected }) =>
    isSelected && "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))"};
  padding: ${({ isSelected }) => (isSelected ? "40px 40px 30px 40px" : "20px")};
  box-sizing: border-box;
`;

const PointTitle = styled.div`
  font-family: Pretendard;
  font-size: 25px;
  font-weight: 500;
  line-height: 25px;
  color: #fff;
`;

const PointComment = styled.div<StyledProps>`
  width: ${({ isSelected }) => (isSelected ? "100%" : 0)};
  height: ${({ isSelected }) => (isSelected ? "60px" : 0)};
  font-family: "Pretendard";
  font-size: 17px;
  font-weight: 300;
  line-height: 20px;
  color: #fff;
  opacity: 0;
  border-top: 1px solid #fff;
  padding: 10px 0 0 0;
  margin: 10px 0 0 0;
  overflow: hidden;
  opacity: ${({ isSelected }) => isSelected && 1};
`;

interface PointImgProps extends StyledProps {
  img: string;
}

const PointImg = styled.div<PointImgProps>`
  height: 100%;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.3)};
  background: ${({ img }) =>
    img !== "" && `url(http://localhost:17481${img}) no-repeat center`};
`;

const MainPointBox: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <MainPointBoxContainer className="main_point_box">
      {mainPoints.map(({ title, comment, img }, index) => {
        const isSelected = selectedIdx === index;

        return (
          <PointContent
            key={index}
            isSelected={isSelected}
            onMouseOver={() => setSelectedIdx(index)}
            className={`point_contents point${index + 1}`}
          >
            <PointText isSelected={isSelected} className="point_text">
              <PointTitle>{title}</PointTitle>
              <PointComment isSelected={isSelected}>
                {comment.split("/").map((commentOne, index) => (
                  <Fragment key={index}>
                    {commentOne}
                    <br />
                  </Fragment>
                ))}
              </PointComment>
            </PointText>
            <PointImg isSelected={isSelected} img={img} className="point_img" />
          </PointContent>
        );
      })}
    </MainPointBoxContainer>
  );
};

export default MainPointBox;
