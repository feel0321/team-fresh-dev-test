import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Notice from "./Notice";

const Wrapper = styled.div`
  width: 420px;
  height: 800px;
  border: 1px solid #ccc;
  margin: 0 auto;
  overflow: hidden;
`;

const Header = styled.div`
  width: 400px;
  height: 50px;
  margin: 0 auto;
  position: relative;
  line-height: 50px;
`;

const A = styled.a`
  display: inline-block;
  font-weight: 400;
  color: #6c757d;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.45rem 0.9rem;
  font-size: 0.9rem;
  line-height: 1.5;
  border-radius: 0.15rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const Img = styled.img`
  padding-top: 13px;
  vertical-align: middle;
`;

const H4 = styled.h4`
  display: inline-block;
  vertical-align: bottom;
  margin: 10px 0;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.1;
  color: #6c757d;
`;

const Hr = styled.hr`
  width: 400px;
  height: 5px;
  background-color: rgb(2, 32, 74);
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
`;

const SearchLocation: React.FC = () => {
  return (
    <Wrapper className="wrapper">
      <Header className="header">
        <A className="btn left">
          <Img
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAVCAYAAACzK0UYAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACJUlEQVRIia3TT0jTYRzH8ffn2XSbodsILDDcFBXqGtGhoJ2khMjo4qFdvEh0ywiJqEtIdOrYKQqCTkEE/TMIEyIoIpHsj9tMmjbIgv1My2j+vh0ySESZbt/Lw8P3eZ7X8+X5PqLsSAVJhPc4dMw3d4tP916Vu9OVt+xQiObwUcldNdSFv/S7/MuVizS7HklXwEKG9TP98M1GEK2b3dbZSCTQL3QCY8T80gD5oQ0BAME1M8mDSee7CxjdYHd9c+fJD01uFIC1Kkl2bZfZTcFepGt+afEy009mNgPAqkpSQRLhTsElpKjv+6fRzxtMDy9uFliNJOvSMk5hbDHfzpBfvA3DpUqA/5DdNSQa04JB4LNhJ8k/eAT4lQIAIpmKOYucM+gDRs23i5Tc+2ocDkDohxekFOogoF5BxGQhOQ1Qa1UzRORFkOCvCazuOtCHqQ14JvG1Wojv28vlFt5VS6I5LWkQY8aks0zdH6JKbxL4O8wu4WVfE+v4JrRf0E20vYDX9AGmKoYCK2bFhnFidZOSDkgcpiEwj7djHKYqauOVCAUfL5sh2npHKCWpl3jtVuqTY8xNfq8Sshxebp5424gz1yjokQIJi7WM4uWK1UMAitmihVueK+jChqVFYCfR1jG83Gz1EICF3IJ5mcfEOwrCjkvuCPH2HMXMJFD2Z1of+RfFtndE3Uc59snoor79KXOZL9VFyC7hNU0Q1aiDGpN7i5cplIv8AY12wKKU1jaJAAAAAElFTkSuQmCC"
            }
            alt="뒤로가기"
          />
        </A>
        <H4>다시 주소 검색하기</H4>
        <Hr />
      </Header>
      <Container />
      <Notice />
    </Wrapper>
  );
};

export default SearchLocation;
