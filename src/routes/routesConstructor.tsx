import { BrowserRouter, Routes, Route } from 'react-router';
import Index from './index.tsx';
import AIAgents from '../routes/caseStudies/AIAgents.tsx';

export default function RoutesConstructor() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Index />} />
       <Route path="case-studies" element={<Index />}>
          <Route path='How-I-used-Narrative-Design-NeuroScience-an-Improv-Theatre-To-Develop-an-MVP-AI-Agent-that-stayed-Entertaining-12X-longer-than-the-competition-for-Matrix-Labs' element= {<AIAgents />} />        
       </Route>
    </Routes>
  </BrowserRouter>
  )
}