import { MenuListI } from "../types/types";

export function handleScrollClick(menuItem:MenuListI) {

  const scrollToElement = () => {
    const element = document.getElementById(menuItem.anchor);
    if(element) {
      
      element.scrollIntoView ({
        behavior:'auto'
      })

      window.history.pushState(menuItem.title, '', `#${menuItem.anchor}`);
    } 
};

const observer = new MutationObserver((mutations) => {
  //observer only runs if something has changed.
  const isRelevant = mutations.some(
      (mutation) => mutation.type === "childList" || mutation.type === "attributes"
  );

  if (isRelevant) {
      scrollToElement();
      observer.disconnect(); // Stop observing once the element is scrolled into view
  }
});

const body = document.body;
observer.observe(body, { childList: true, subtree: true });

scrollToElement();
    
}