import React from "react";
import styled from "styled-components";
import type { CommonComponentProps } from "./CommonComponentType";

export const CenterDivContainer = styled.div`
  width: 1210px;
  margin: 0 auto;
  padding: 0 30px;
  box-sizing: border-box;
`;

const CenterDiv: React.FC<CommonComponentProps> = ({ children, className }) => {
  let resultClassName = "centerdiv";
  if (className !== undefined) {
    resultClassName += ` ${className}`;
  }

  return (
    <CenterDivContainer className={resultClassName}>
      {children}
    </CenterDivContainer>
  );
};

export default CenterDiv;
