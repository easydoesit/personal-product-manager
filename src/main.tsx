import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import RoutesConstructor from './routes/routesConstructor';

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <StrictMode>
    <RoutesConstructor />
  </StrictMode>
);