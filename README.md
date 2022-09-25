# 팀프레시 프론트엔드 채용 과제

## 요구사항

1. 과제1: [팀프레시 홈페이지 클론코딩](https://www.teamfresh.kr/php/main.htm)

- 메인 페이지 전부 클론 코딩
- 각 상세 메뉴는 하지 않음

2. 과제2: 상단 메뉴바에 새벽배송검색 가능 페이지 추가

## 실행 방법

### 실행하기 전에 잠깐!

과제2의 api 요청을 위해 **.env 파일**을 생성하고

```
REACT_APP_BASE_URL = 팀프레시 api 주소
```

처럼 저장해주세요

### 실행방법

```
npm install
npm start
```

## 과제 설명

### 보시기 전에

- css나 dom 구조가 100% 동일하지 않습니다
- float는 사용하지 않았습니다
- 과제1의 Slide에 해당하는 부분을 클릭해도 멈추지 않고 계속 돌아갑니다
- 컴포넌트 네이밍은 가급적 기존의 class를 참고했습니다
- className은 홈페이지와 과제 결과물의 dom 구조를 비교하실 경우 편하게끔 추가한것이므로 css에는 영향이 없습니다
- 최하단 snslink 부분은 다른 유틸성 라이브러리를 사용해야 할 것 같아서 진행하지 않았습니다

### 진행 순서

과제1을 위에서부터 큰부분으로 나눈 후 각 기능을 정리했습니다<br />
이후 화면의 위쪽부터 아래쪽으로 개발을 진행했습니다

### components

- Common

  - 뒤늦게 파악했지만 main_title 등 여러 파트에서 계속 사용되는 부분이 있어서 공통 컴포넌트로써 사용하는 곳입니다

- 그 외
  - Page에 들어가는 컴포넌트입니다

### hooks

- useScroll

  - 스크롤이 최상단에 있는지 아닌지 여부를 반환하는 훅입니다
  - 아래로 스크롤을 10까지 했을 경우 최상단에 있다고 보고, 10을 초과해서 스크롤하면 최상단이 아니라고 봅니다
  - 최상단 여부로 Header의 배경색을 조절합니다

- useSetTimeout
  - 입력 second 초 뒤에 index를 증가시키고, index가 증가하면 다시 second 초 뒤에 index를 증가시킵니다. 기능만 보면 setInterval처럼 쓰고 있습니다
  - Slide의 화면이 자동으로 넘어가도록 하는데 사용합니다
  - setTimeout을 setInterval처럼 사용한 이유는 [팀프레시 홈페이지](https://www.teamfresh.kr/php/main.htm)의 Slide는 특정 Slide 클릭 시 멈추는데, 저는 계속 돌아가게 하고 싶어서 하다 보니 setTimeout을 setInterval처럼 사용하게 되었습니다
  - ex) slide1에서 3초뒤 slide2로 넘어가고 2초 뒤 slide1을 고르면, 그 시점에서부터 3초 뒤 slide2로 넘어가고 반복합니다

## 초기 설계

과제1

- [x] header
  - 최상단에 위치
  - 좌측 로고, 우측 메뉴로 구성 - 좌측 로고 클릭 시 홈 - 우측 메뉴 클릭 시 특정 페이지로 이동만 하고 빈 페이지 노출
  - 스크롤 내리면 fixed
- [x] main_images
  - 글씨
  - 슬라이드
    - 자동으로 넘어감
    - 특정 슬라이드로 이동하는 추가 조작 가능
- [x] main_introduce
  - 글씨
- [x] main_business
  - 글씨
  - 이미지
  - 비디오
- [x] main_service
  - 글씨
  - 이미지
  - 서비스 클릭 시 변경
- [x] main_point
  - 이미지
  - 이미지 hover 시 css 변경
- [x] main_link
  - 이미지
  - 이미지 hover 시 css 변경
- [x] bottom

과제2

- react-daum-postcode 라이브러리 사용해서 새벽배송 가능여부 조회 사이트 클론코딩
- [x] header의 우측 메뉴에 **배송지역검색** 추가
  - 배송 가능 / 불가능 여부에 따라 안내창 노출
