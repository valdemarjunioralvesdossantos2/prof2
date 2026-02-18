import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  Route, BrowserRouter } from 'react-router-dom';
import './assets/fonts/anastasia_script/368-font.otf'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
