import { MenuListI } from "../types/types";

export function handleScrollClick(menuItem:MenuListI) {

  const element = document.getElementById(menuItem.anchor) as Element;
    
    element.scrollIntoView ({
      behavior:'smooth'
    })
  
}