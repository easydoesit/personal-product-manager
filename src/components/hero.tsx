interface HeroI {
  anchor:string
}

export default function Hero({anchor}:HeroI) {

  return (
    <div className="sectionScrollMarginTop snap-start h-80 mt-20 bg-slate-300" id={anchor}>
      <div className="w-full h-28 flex">
        <div className="w-1/3">
          <p className="font-jost text-6xl">FOR THE</p>
        </div>
        <div className="w-2/3 mt-24 text-slate-100 bg-slate-500 h-24">
          <h2 className="font-jost text-8xl font-black mb-8 animate-loop-product-visibility absolute">PRODUCT</h2>
          <h2 className="font-jost text-8xl font-black mb-8 animate-loop-branding-visibility absolute opacity-0">BRANDING</h2>
          <h2 className="font-jost text-8xl font-black animate-loop-creative-visibility opacity-0">CREATIVE</h2>
        </div>
      </div>
    </div>
  )
}