import { BrowserRouter, Routes, Route } from 'react-router';
import App from '../App.tsx';
import CaseStudies from '../routes/caseStudies/caseStudies.tsx';
import AIAgents from '../routes/caseStudies/AIAgents.tsx';

export default function RoutesConstructor() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<App />} />
       <Route path="case-studies" element={<CaseStudies />}>
          <Route path='How-I-used-Narrative-Design-NeuroScience-an-Improv-Theatre-To-Develop-an-MVP-AI-Agent-that-stayed-Entertaining-12X-longer-than-the-competition-for-Matrix-Labs' element= {<AIAgents />} />        
       </Route>
    </Routes>
  </BrowserRouter>
  )
}