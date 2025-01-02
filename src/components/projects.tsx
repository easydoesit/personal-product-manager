import { MenuListI } from "../types/types";
import { Link } from "react-router";

export default function Projects({title, anchor}:MenuListI) {

  return (
    <section className="flex flex-col items-center snap-start sectionScrollMarginTop w-full my-16" id={anchor}>
      <article className=" text-darkpoop my-4 text-base w-11/12 sm:w-10/12  xl:w-1/2">
        <h1 className="font-heading text-3xl">{title}</h1>
        <p className="font-reading py-3">I've gathered case studies around product management, design and branding. These show my unique perspective around product development and how I use my experience to solve complex problems.</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4">
        <Link className="cursor-pointer" to="/case-studies/How-I-used-Narrative-Design-NeuroScience-an-Improv-Theatre-To-Develop-an-MVP-AI-Agent-that-stayed-Entertaining-12X-longer-than-the-competition-for-Matrix-Labs">
          <div className="flex flex-col justify-end border-2 rounded-xl bg-[url('/img/AIAgents-BG.png')] bg-cover bg-center h-96">
            <h2 className="font-heading text-l bg-beach bg-opacity-35 p-4">How I Used Narrative Design, NeuroScience and Improv Theatre To Develop an MVP AI Agent that Stayed Entertaining 12X Longer than the Competition for Matrix Labs</h2>
          </div>
        </Link>
          <div>
      
          </div>
        </div>  
      </article>
    </section>
  )
}