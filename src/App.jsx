import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

export default function App(){
  return(
    <BrowserRouter>
       <Navbar />

       <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="gallery" element={<Gallery />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/contact" element={<Contact />}/>
       </Routes>
    </BrowserRouter>
  )
}