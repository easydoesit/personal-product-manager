import { MenuListI } from "../types/types";

export function handleScrollClick(menuItem:MenuListI) {

  const element = document.getElementById(menuItem.anchor);
  
  element?.scrollIntoView ({
    behavior:'smooth'
  })
  
}