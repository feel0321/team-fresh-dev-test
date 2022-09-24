export interface PageInterface {
  title: string;
  path: string;
}

export interface MenuInterface extends PageInterface {
  subMenus?: PageInterface[];
}

export interface BusinessProcessInterface {
  title: string;
  img: string;
}

export interface SearchResultInterface {
  zoneCode: string;
  roadAddress: string;
}
