import { SectionI } from "../types/types"

export default function Hero({title, anchor, topOffset}:SectionI) {
  const cssReplace = `pb-96 mt-20 scroll-mt-${topOffset} snap-start`

  return (
    <div className={cssReplace} id={anchor}>
      <h1>Product | Branding | Creative</h1>
      <h2>Direction</h2>
    </div>
  )
}