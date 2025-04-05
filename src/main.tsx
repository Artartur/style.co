import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Header from './Components/Header/Header.tsx'
import HeaderBanner from './Components/Header/HeaderBanner.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeaderBanner />
    <Header />
    <App />
  </StrictMode>,
)
