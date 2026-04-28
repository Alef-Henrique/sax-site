import { BrowserRouter, Routes, Route } from "react-router-dom"
import ScrollToTop from "../components/ScrollToTop"

import Home from "../pages/Home"
import About from "../pages/About"
import Events from "../pages/Events"
import Repertoire from "../pages/Repertoire"
import Contact from "../pages/Contact"

import Header from "../components/Header"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"

export default function AppRoutes(){
  return(
    <BrowserRouter>

      <ScrollToTop />

      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/repertorio" element={<Repertoire/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      <Footer/>
      <WhatsAppButton/>

    </BrowserRouter>
  )
}