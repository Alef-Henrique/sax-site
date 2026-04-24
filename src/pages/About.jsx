import { motion } from "framer-motion"
import "../styles/about.css"
import saxImg from "../assets/photo-about.webp"

export default function About() {
  return (
    <section className="about-container">

      <div className="about-content">

        {/* TEXTO */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1>Sobre mim</h1>

            <p>
            Olá, meu nome é Álefe Silva. Sou músico saxofonista há mais de 13 anos,
            com 9 anos de experiência profissional atuando em eventos como casamentos,
            restaurantes, aniversários e corporativos.
            </p>

            <p>
            Ao longo dessa trajetória, compreendi que tocar sax vai muito além de executar notas.
            A música exige presença, sensibilidade, controle e postura para transmitir emoção
            e criar uma conexão verdadeira com o público.
            </p>

            <p>
            Em cada apresentação, meu objetivo é proporcionar uma experiência marcante,
            levando elegância, personalidade e sentimento para transformar cada momento
            em algo único e inesquecível.
            </p>

          <ul>
            <li>✔ Mais de 500 eventos realizados</li>
            <li>✔ Repertório personalizado para cada momento</li>
            <li>✔ Atendimento profissional e organizado</li>
            <li>✔ Experiência em casamentos e eventos de alto padrão</li>
          </ul>

            <a
            href="https://wa.me/5522988354135?text=Olá, tudo bem? Gostaria de solicitar um orçamento de um evento por favor!"
            target="_blank"
            className="btn-primary"
            >
            Solicitar orçamento
            </a>
        </motion.div>

        {/* IMAGEM */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={saxImg} alt="Saxofonista" />
        </motion.div>

      </div>

    </section>
  )
}