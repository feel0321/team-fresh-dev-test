import React from "react";
import styled from "styled-components";
import BottomTop from "./BottomTop";
import { companies } from "../../utils/constants";
import { CenterDiv } from "../Common";

const BottomContainer = styled.div`
  min-width: 1210px;
  background: #191919;
  padding: 50px 0;
  margin: 0;
`;

const CompanyInfo = styled.div`
  width: 100%;
  font-size: 0;
`;

const CompanyInfoLi = styled.li`
  display: inline-block;
  margin: 0 30px 0 0;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 300;
  line-height: 25px;
  color: #ccc;

  &:last-child {
    width: 100%;
    margin: 10px 0 0 0;
  }
`;

const Bottom: React.FC = () => {
  return (
    <BottomContainer className="bottom">
      <CenterDiv>
        <BottomTop />
        <CompanyInfo className="company_info">
          <ul>
            {companies.map((company, index) => (
              <CompanyInfoLi key={index}>{company}</CompanyInfoLi>
            ))}
            <CompanyInfoLi>
              Copyrightⓒ
              <a>TeamFresh Co.,Ltd.</a> All Rights Reserved.
            </CompanyInfoLi>
          </ul>
        </CompanyInfo>
      </CenterDiv>
    </BottomContainer>
  );
};

export default Bottom;
