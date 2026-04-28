import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Footer(){
  return(
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}   // ✅ corrigido
      transition={{ duration: 0.8 }}
    >
      <div className="footer-grid">

        <div>
          <h3>Menu</h3>

          <Link to="/">Home</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/events">Eventos</Link>
          <Link to="/repertorio">Repertório</Link>
          <Link to="/contact">Contato</Link>

        </div>

        <div>
          <h3>Empresa</h3>

          <p>CNPJ:66.352.293.0001-84</p>
          <p>Política de privacidade</p>
          <p>Endereço: sua cidade</p>
        </div>

        <div>
          <h3>Redes sociais</h3>

          <p>
            <a href="https://www.instagram.com/alefesilvasax/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </p>

          <p>
            <a href="https://www.youtube.com/@alefemarosax7" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </p>

          <p>
            <a href="https://www.tiktok.com/@alefe_sax" target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
          </p>
        </div>

      </div>

      <p className="copyright">
        © 2026 Alefe Sax
      </p>

    </motion.footer>
  )
}