export interface MenuListI {
  title:string,
  anchor:string,
}

export type MenuListT = MenuListI[]

export interface AnchorIDI {
  anchorID:string;
}

export interface SectionI extends MenuListI {
  topOffset:string
}