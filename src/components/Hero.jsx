import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Hero(){

 return(

  <section className="hero">

   <motion.div
    className="hero-content"

    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}

    transition={{ duration: 1 }}
   >

    <span className="hero-tag">

     SAXOFONISTA PROFISSIONAL

    </span>

    <h1>

     Transforme seu evento em uma experiência inesquecível

    </h1>

    <p>

     Apresentações sofisticadas para casamentos,
     eventos corporativos e celebrações especiais.

    </p>

    <div className="hero-buttons">

     <Link to="contact" className="btn">

      Ver disponibilidade

     </Link>

     <Link to="about" className="btn-outline">

      Sobre mim

     </Link>

    </div>

   </motion.div>

  </section>

 )

}