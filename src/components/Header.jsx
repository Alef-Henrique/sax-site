import { Link } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Header(){

 const [menuOpen, setMenuOpen] = useState(false)

 return(

  <motion.header

   className="header"

   initial={{ y: -80, opacity: 0 }}

   animate={{ y: 0, opacity: 1 }}

   transition={{ duration: .6 }}

  >

   <h2 className="logo">

    Álefe|Saxofonista

   </h2>

   <nav className={menuOpen ? "nav active" : "nav"}>

    <Link to="/">Home</Link>

    <Link to="/sobre">Sobre</Link>

    <Link to="/eventos">Eventos</Link>

    <Link to="/repertorio">Repertório</Link>

    <Link to="/mentoria-presenca">Mentoria</Link>

    <Link to="/contato">Contato</Link>

   </nav>

   <button

    className="menu-btn"

    onClick={()=>setMenuOpen(!menuOpen)}

   >

    ☰

   </button>

  </motion.header>

 )

}