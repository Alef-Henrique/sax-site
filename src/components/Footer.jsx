import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Footer(){

 return(

  <motion.footer

   className="footer"

   initial={{ opacity: 0 }}
   whileInView={{ opacity: 1 }}

   transition={{ duration: .8 }}

  >

   <div className="footer-grid">

    <div>

     <h3>Menu</h3>

     <Link to="/">Home</Link>
     <Link to="/sobre">Sobre</Link>
     <Link to="/eventos">Eventos</Link>
     <Link to="/repertorio">Repertório</Link>
     <Link to="/contato">Contato</Link>

    </div>

    <div>

     <h3>Empresa</h3>

     <p>CNPJ: 00.000.000/0001-00</p>

     <p>Política de privacidade</p>

     <p>Endereço: sua cidade</p>

    </div>

    <div>

     <h3>Redes sociais</h3>

     <p>Instagram</p>

     <p>YouTube</p>

     <p>TikTok</p>

    </div>

   </div>

   <p className="copyright">

    © 2026 Alefe Sax

   </p>

  </motion.footer>

 )

}