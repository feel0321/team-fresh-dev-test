import type {
  MenuInterface,
  PageInterface,
  BusinessProcessInterface,
} from "../types/page";
import Icon1 from "../images/icon01.png";
import Icon2 from "../images/icon02.png";
import Icon3 from "../images/icon03.png";
import Icon4 from "../images/icon04.png";
import Icon5 from "../images/icon05.png";
import Icon6 from "../images/icon06.png";
import Icon7 from "../images/icon07.png";
import Icon8 from "../images/icon08.png";
import MainBusinessImg1 from "../images/main_business_img01.jpg";
import MainBusinessImg2 from "../images/main_business_img02.jpg";
import MainBusinessImg3 from "../images/main_business_img03.jpg";
import MainBusinessImg4 from "../images/main_business_img04.jpg";

export const emptyPageNames: PageInterface[] = [
  { title: "회사소개", path: "/sub0101" },
  { title: "서비스소개_물류", path: "/sub0201_1" },
  { title: "서비스소개_유통", path: "/sub0202" },
  { title: "서비스소개_프랜차이즈", path: "/sub0203" },
  { title: "서비스소개_보험", path: "/sub0204" },
  { title: "인재채용", path: "/sub0301" },
  { title: "고객지원_공지사항", path: "/sub0401_1" },
  { title: "고객지원_팀프뉴스", path: "/sub0402" },
  { title: "고객지원_문의하기", path: "/sub0403" },
  { title: "고객지원_자주 묻는 질문", path: "/sub0404" },
];

export const menus: MenuInterface[] = [
  { title: "회사소개", path: "/sub0101" },
  {
    title: "서비스소개",
    path: "/sub0201_1",
    subMenus: [
      { title: "물류", path: "/sub0201_1" },
      { title: "유통", path: "/sub0202" },
      { title: "프랜차이즈", path: "/sub0203" },
      { title: "보험", path: "/sub0204" },
    ],
  },
  { title: "인재채용", path: "/sub0301" },
  {
    title: "고객지원",
    path: "/sub0401_1",
    subMenus: [
      { title: "공지사항", path: "/sub0401_1" },
      { title: "팀프뉴스", path: "/sub0402" },
      { title: "문의하기", path: "/sub0403" },
      { title: "자주 묻는 질문", path: "/sub0404" },
    ],
  },
];

export const processes1: BusinessProcessInterface[] = [
  { title: "새벽배송", img: Icon1 },
  { title: "보관", img: Icon2 },
  { title: "출고", img: Icon3 },
  { title: "화물주선", img: Icon4 },
];

export const processes2: BusinessProcessInterface[] = [
  { title: "고객", img: Icon5 },
  { title: "보험", img: Icon6 },
  { title: "프랜차이즈", img: Icon7 },
  { title: "식자재 유통", img: Icon8 },
];

interface ServiceInterface {
  icon: string;
  title: string;
  content: string;
  comment: string;
  img: string;
}

export const services: ServiceInterface[] = [
  {
    icon: Icon3,
    title: "물류",
    content: "상품의 관리,/보관부터 배송까지/완벽하게",
    comment:
      "이커머스 운영에 최적화된 풀필먼트 센터와/새벽배송망을 보유한 팀프레시의/이커머스 전문 물류 서비스를 제공받으세요.",
    img: MainBusinessImg1,
  },
  {
    icon: Icon4,
    title: "유통",
    content: "식자재 제안,/업장 운영 형태에 맞는 최적의 형태로",
    comment:
      "주기적인 단가 관리 시스템을 통해 합리적인 가격의 상품을 제공하고, 자체 물류 역량으로 상품을 안정적으로 공급하고 있습니다.",
    img: MainBusinessImg2,
  },
  {
    icon: Icon6,
    title: "프랜차이즈",
    content: "외식 창업,/적은 자본으로/빠르고 간편하게",
    comment:
      "외식 전문 브랜드 팀프에프앤비가/소형, 소자본으로도 쉽고 편리하게/점포를 운영할 수 있도록/가맹 패키지를 제안해드립니다.",
    img: MainBusinessImg3,
  },
  {
    icon: Icon7,
    title: "보험",
    content: "기업 대상 전문 보험,/상해보험부터 재산종합보험까지 똑똑하게",
    comment:
      "기업 전문 보험 GA와 만나/팀프인슈어런스가 탄생했습니다./기업 맞춤형, 최적의 보험 상품을 추천받아보세요.",
    img: MainBusinessImg4,
  },
];
