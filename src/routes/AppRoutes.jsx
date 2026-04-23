import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import About from "../pages/About"
import Events from "../pages/Events"
import Repertoire from "../pages/Repertoire"
import Contact from "../pages/Contact"
import MentoriaPresenca from "../pages/MentoriaPresenca"
import MentoriaNegocios from "../pages/MentoriaNegocios"

import Header from "../components/Header"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"

export default function AppRoutes(){

 return(

  <BrowserRouter>

   <Header/>

   <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/sobre" element={<About/>}/>
    <Route path="/eventos" element={<Events/>}/>
    <Route path="/repertorio" element={<Repertoire/>}/>

    <Route path="/mentoria-presenca" element={<MentoriaPresenca/>}/>
    <Route path="/mentoria-negocios" element={<MentoriaNegocios/>}/>

    <Route path="/contato" element={<Contact/>}/>

   </Routes>

   <Footer/>

   <WhatsAppButton/>

  </BrowserRouter>

 )

}