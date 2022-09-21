import { MenuInterface, PageInterface } from "../types/page";

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
