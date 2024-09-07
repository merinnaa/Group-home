import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { About, ContactUs, Service, LandingPage } from './components/pages'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/about' element={ <About />} />
      <Route path='/service' element={ <Service />} />
      <Route path='/ContactUs' element={ <ContactUs />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
