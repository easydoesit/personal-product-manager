import { MenuListI } from "../types/types";

export default function Projects({title, anchor}:MenuListI) {
  
  return (
    <div className="pb-96 snap-start sectionScrollMarginTop" id={anchor}>
      <h1>{title}</h1>

    </div>
  )
}