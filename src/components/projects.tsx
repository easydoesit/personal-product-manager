import { MenuListI } from "../types/types";
import { Link } from "react-router";

export default function Projects({title, anchor}:MenuListI) {
  
  return (
    <div className="pb-96 snap-start sectionScrollMarginTop" id={anchor}>
      <h1>{title}</h1>
      <h2><Link to="/case-studies/How-I-used-Narrative-Design-NeuroScience-an-Improv-Theatre-To-Develop-an-MVP-AI-Agent-that-stayed-Entertaining-12X-longer-than-the-competition-for-Matrix-Labs">How I Used Narrative Design, NeuroScience and Improv Theatre To Develop an MVP AI Agent that Stayed Entertaining 12X Longer than the Competition for Matrix Labs</Link></h2>

    </div>
  )
}