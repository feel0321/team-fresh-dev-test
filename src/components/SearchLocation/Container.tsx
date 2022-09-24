import React from "react";
import styled from "styled-components";
import { SearchResultInterface } from "../../types/page";

const ContainerDiv = styled.div`
  width: 420px;
  margin: 20px -2px 20px 0;
  position: relative;
  padding-right: 12px;
  padding-left: 12px;
  box-sizing: border-box;

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }
`;

const Input = styled.input`
  margin: 0px 0px 20px 20px;
  width: 360px;
  height: 40px;
  border: 1px solid #02204a;
  line-height: 40px;
  padding: 0 0 0 10px;
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  box-sizing: border-box;
`;

const ZoneCodeInput = styled(Input)`
  width: 120px;
  height: 40px;
  border: 1px solid #02204a;
  margin: 20px 0 0 20px;
  line-height: 35px;
  padding: 0 0 0 10px;
`;

const RoadAddressInput = styled(Input)`
  margin: 10px 0 10px 20px;
`;

const A = styled.a`
  color: white;
  cursor: pointer;

  width: 380px;
  height: 40px;
  background-color: #02204a;
  color: #fff;
  margin: 0 auto;
  display: block;
  text-align: center;
  line-height: 40px;
  border-radius: 10px;

  font-family: sans-serif;
  font-weight: 600;
  font-size: 14px;
`;

interface ContainerProps {
  searchResult: SearchResultInterface;
}
const Container: React.FC<ContainerProps> = ({ searchResult }) => {
  const { zoneCode, roadAddress } = searchResult;

  return (
    <ContainerDiv className="container">
      <ZoneCodeInput
        className="zipcodebox"
        id="zonecode"
        name="zonecode"
        readOnly
        value={zoneCode}
      />
      <RoadAddressInput
        className="addressbox"
        id="roadAddress"
        name="roadAddress"
        readOnly
        value={roadAddress}
      />
      <Input placeholder="나머지 주소를 입력해주세요." />
      <br />
      <A className="center">주소입력</A>
    </ContainerDiv>
  );
};

export default Container;
