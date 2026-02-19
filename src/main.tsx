import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DamaFlores from './components/DamaFlores/DamaFlores.tsx'
import DamaPlaca from './components/DamaPlaca/DamaPlaca.tsx'
import './index.css'
import App from './App.tsx'
import Florista from './components/Florista/Florista.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={ <App />} />
        <Route path="/dama-flores" element={ <DamaFlores />} />
        <Route path="/dama-placa" element={ <DamaPlaca />} />
        <Route path="/florista" element={ <Florista />} />
    </Routes>
     
    </BrowserRouter>
  </StrictMode>,
)
