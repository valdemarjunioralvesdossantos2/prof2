import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DamaFlores from '../src/components/DamaFlores/DamaFlores.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={ <App />} />
        <Route path="/dama-flores" element={ <DamaFlores />} />
        <Route path="/contact" element={ <App />} />
    </Routes>
     
    </BrowserRouter>
  </StrictMode>,
)
