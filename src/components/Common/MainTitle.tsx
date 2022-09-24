import React from "react";
import styled from "styled-components";
import type { CommonComponentProps } from "./CommonComponentType";

export const MainTitleContainer = styled.div`
  width: 100%;
  font-family: Pretendard;
  text-align: center;
  font-weight: 700;
  font-size: 55px;
  line-height: 45px;
  color: #000;
`;

const MainTitle: React.FC<CommonComponentProps> = ({ children, className }) => {
  let resultClassName = "main_title";
  if (className !== undefined) {
    resultClassName += ` ${className}`;
  }

  return (
    <MainTitleContainer className={resultClassName}>
      {children}
    </MainTitleContainer>
  );
};

export default MainTitle;
