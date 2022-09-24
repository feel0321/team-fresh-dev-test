import React from "react";
import styled from "styled-components";
import type { CommonComponentProps } from "./CommonComponentType";

export const MainSectionContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  padding: 150px 0;
`;

const MainSection: React.FC<CommonComponentProps> = ({
  children,
  className,
}) => {
  let resultClassName = "main_section";
  if (className !== undefined) {
    resultClassName += ` ${className}`;
  }

  return (
    <MainSectionContainer className={resultClassName}>
      {children}
    </MainSectionContainer>
  );
};

export default MainSection;
