import { motion } from "framer-motion"
import "../styles/contact.css"

export default function Contact() {
  return (
    <section className="contact-container">

      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Contato</h1>

        <p className="contact-subtitle">
          Vamos tornar o seu evento ainda mais especial 
        </p>

        <p className="contact-description">
          Entre em contato para solicitar um orçamento personalizado.
          Será um prazer levar música ao vivo com elegância e emoção
          para o seu momento.
        </p>

        <div className="contact-info">
          <p> Atendimento em: sua cidade e região</p>
          <p> Eventos: Casamentos, Restaurantes, Corporativos e mais</p>
        </div>

        <a
          href="https://wa.me/5522988354135?text=Olá, tudo bem? Gostaria de solicitar um orçamento de um evento por favor!"
          target="_blank"
          className="btn-contact"
        >
          Falar no WhatsApp
        </a>

      </motion.div>

    </section>
  )
}