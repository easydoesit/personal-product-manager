interface HeroI {
  anchor:string
}

export default function Hero({anchor}:HeroI) {
// h-[48rem] sm:h-[54rem] md:h-[28rem] lg:h-[34rem] xl:h-[40rem] 2xl:h-[48rem]

  return (
    <div className="flex justify-center sectionScrollMarginTop snap-start mt-16 pt-2 w-full bg-grasshopper md:items-center" id={anchor}>
      <div className="flex flex-col md:flex-row-reverse w-11/12 mt-4 items-start">
        <div className="flex flex-col w-full md:w-2/3 text-slate-100 bg-slate-500 pl-2 font-heading text-midnightblue md:mt-24 lg:mt-36 xl:mt-48 items-center">
          <h1 className="font-heading text-2xl lg:text-3xl xl:text-4xl tracking-[.25em] sm:tracking-[.65em] md:tracking-[.3em] xl:tracking-[.35em] text-center">MICHAEL GRILLS</h1>
          <div className="w-full flex justify-center md:relative text-center text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl">
            <h2 className="tracking-[.14em] sm:tracking-[.28em] md:tracking-[.2em] lg:tracking-[.18em] font-black animate-loop-product-visibility absolute top-28 md:-top-4">PRODUCT</h2>
            <h2 className="tracking-[.02em] sm:tracking-[.14em] md:tracking-[.09em] lg:tracking-[.06em] font-black animate-loop-branding-visibility opacity-0 absolute top-28 md:-top-4">BRANDING</h2>
            <h2 className="tracking-[.11em] sm:tracking-[.23em] md:tracking-[.17em] lg:tracking-[.14em] font-black animate-loop-creative-visibility opacity-0 absolute top-28 md:-top-4">CREATIVE</h2>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-20 md:mt-0 mb-8">
          <img src="/img/Michael_Grills_Product_Managment_Hero.png"></img>
        </div>
      </div>

    </div>
  )
}