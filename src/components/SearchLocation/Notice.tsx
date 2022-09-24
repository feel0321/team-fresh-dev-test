import React from "react";
import styled from "styled-components";

const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const NoticeContent = styled.div`
  background-color: rgb(229, 232, 239);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0.6rem;
`;

const NoticeHeader = styled.div`
  display: flex;
  flex-direction: column;
  box-pack: center;
  justify-content: center;
  box-align: center;
  align-items: center;
  width: 100%;
  padding-top: 0.8rem;
  height: max-content;
`;

const NoticeHeaderTitle = styled.span`
  color: red;
  font-size: 1.2rem;
  font-weight: 800;

  & + span {
    margin-top: 1rem;
  }
`;

const NoticeHeaderText = styled.span`
  color: rgb(96, 96, 96);
  font-size: 0.75rem;
  line-height: 1rem;
`;

const Hr = styled.hr`
  border: 0;
  border-top: 2px solid rgb(2, 32, 74);
  margin: 1.6rem 0px;
`;

const NoticeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  align-items: flex-start;
  width: 100%;
  height: max-content;
`;

const Pre = styled.pre`
  color: rgb(96, 96, 96);
  font-size: 87.5%;
  line-height: 1rem;
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  white-space: pre-wrap;
`;

const Notice: React.FC = () => {
  return (
    <NoticeContainer>
      <NoticeContent>
        <NoticeHeader>
          <NoticeHeaderTitle>배송 불가 장소 안내</NoticeHeaderTitle>
          <NoticeHeaderText>[하단 리스트 참고]</NoticeHeaderText>
          <NoticeHeaderText>
            관공서/군사지역/학교/병원/시장/백화점/산업단지/도서산간지역
          </NoticeHeaderText>
        </NoticeHeader>
        <Hr />
        <NoticeText>
          <Pre>
            <p>
              일부 장소가 배송 가능으로 검색될 수 있으나
              <br />
              배송불가지역이므로 참고 바랍니다.
            </p>
            <br />
            <p>
              [공공시설]
              <br />
              관공서: 국회, 우체국, 수자원공사 등<br />
              군사지역: 군부대, 군인아파트, 위병소 등<br />
              교정시설: 교도소, 구치소 등{" "}
            </p>
            <br />
            <p>
              [차량출입제한]
              <br />
              학교: 초등학교, 중학교, 고등학교
              <br />
              지하철, 공원, 유원지
              <br />그 외 차량 통제 지역
            </p>
            <br />
            <p>
              [기타]
              <br />
              대학교, 백화점, 병원(임시 지정), 시장, 마트, 공터,
              <br />
              가건물(가로판매대, 비닐하우스 등), 공사장, 산업단지,
              <br />
              물류단지, 고속도로 휴게소, 공공시설 무인택배함,
              <br />
              도서산간지역 등
            </p>
          </Pre>
        </NoticeText>
      </NoticeContent>
    </NoticeContainer>
  );
};

export default Notice;
