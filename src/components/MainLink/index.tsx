import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ArrowIcon2 } from "../../images";
import { mainLinks } from "../../utils/constants";
import { CenterDiv, MainSection } from "../Common";

const MainLinkContainer = styled(MainSection)`
  & * {
    transition: all 0.2s ease;
  }
`;

const Relattive = styled(CenterDiv)`
  display: flex;
`;

const LinkContent = styled.div`
  position: relative;
  width: 30.33%;
  height: 500px;
  margin: 0 1.5%;
  border-radius: 15px;
  background: #333;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    & div div:last-child {
      margin-top: 250px;
      opacity: 1;
    }
    & div div:first-child::before {
      top: 60px;
      opacity: 1;
    }
    & div:last-child {
      transform: scale(1.05);
      opacity: 1;
    }
  }
`;

const LinkText = styled.div`
  position: absolute;
  top: 15%;
  left: 20%;
  width: 60%;
  text-align: center;
  border: 1px solid transparent;
  z-index: 1;
`;

const LinkTitle = styled.div`
  position: relative;
  width: 100%;
  font-family: Pretendard;
  font-size: 40px;
  font-weight: 500;
  line-height: 40px;
  color: #fff;

  &::before {
    position: absolute;
    top: 90px;
    left: 50%;
    width: 1px;
    height: 70px;
    background: #fff;
    content: "";
    opacity: 0;
  }
`;

const MoreButton = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 100%;
  padding: 5px 0 0 0;
  margin: 280px auto 0;
  opacity: 0;
  box-sizing: border-box;
`;

const Img = styled.img`
  width: 20px;
  filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(137deg)
    brightness(104%) contrast(101%);
`;

interface LinkImgProps {
  img: string;
}

const LinkImg = styled.div<LinkImgProps>`
  background: ${({ img }) =>
    `url(http://localhost:3000${img}) no-repeat center`};
  background-size: cover;
  width: 100%;
  height: 100%;
  opacity: 0.4;
`;

const MainLink: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MainLinkContainer className="main_link">
      <Relattive className="relattive">
        {mainLinks.map(({ title, img, path }, index) => (
          <LinkContent
            key={index}
            className={`link_contents link${index + 1}`}
            onClick={() => navigate(path)}
          >
            <LinkText className="link_text">
              <LinkTitle className="link_title">{title}</LinkTitle>
              <MoreButton className="more_btn">
                <Img src={ArrowIcon2} />
              </MoreButton>
            </LinkText>
            <LinkImg img={img} className="link_image" />
          </LinkContent>
        ))}
      </Relattive>
    </MainLinkContainer>
  );
};

export default MainLink;
