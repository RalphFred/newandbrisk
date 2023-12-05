import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import GalleryPage from './pages/GalleryPage'
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'

export default function App(){
  return(
    <BrowserRouter>
       <Navbar />

       <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/gallery" element={<GalleryPage />}/>
        <Route path="/pricing" element={<PricingPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
       </Routes>

      <Footer />
    </BrowserRouter>
  )
}