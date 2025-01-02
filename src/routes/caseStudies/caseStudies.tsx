import { Outlet, } from "react-router";
import { menuList } from "../../data/data";

export default function CaseStudies() {

  

  return(
    <>
    <section className="w-full flex flex-col items-center sectionScrollMarginTop snap-start my-16" id={menuList[0].anchor}>
      <div className="text-darkpoop mt-4 text-base w-11/12 sm:w-10/12 md:w-8/12 xl:w-1/2">
      <h1 className="font-heading text-xl">Case Studies</h1>
      </div>
    <Outlet />
    </section>
    </>
  )
}