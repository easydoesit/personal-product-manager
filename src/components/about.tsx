import { SectionI } from "../types/types";

export default function About({title, anchor, topOffset}:SectionI) {
  const cssReplace = `pb-96 scroll-mt-${topOffset} snap-start`
  
  return (
    <div className={cssReplace} id={anchor}>
      <h1>{title}</h1>

    </div>
  )
}