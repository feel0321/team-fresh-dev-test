export interface PageInterface {
  title: string;
  path: string;
}

export interface MenuInterface extends PageInterface {
  subMenus?: PageInterface[];
}
