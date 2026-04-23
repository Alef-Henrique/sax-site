import { motion } from "framer-motion"
import img1 from "../assets/event-weddings.jpg"
import img2 from "../assets/event-weddings2.jpg"
import img3 from "../assets/event-weddings3.jpg"
import img4 from "../assets/event-weddings7.jpg"
import img5 from "../assets/event-weddings14.jpeg"
import img6 from "../assets/event-weddings10.jpg"
import img7 from "../assets/event-weddings11.jpg"
import img8 from "../assets/event-weddings12.jpg"
import img9 from "../assets/event-weddings13.jpg"

export default function Casamentos() {

  const imagens = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
  ]

  return (
         <section className="casamentos-container">

      {/* TÍTULO */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="header-section"
      >
        <h1>Casamentos 💍</h1>
        <p>
          Torne seu casamento ainda mais emocionante com sax ao vivo na entrada da noiva,
          cerimônia e recepção. Música que marca momentos únicos e inesquecíveis.
        </p>
      </motion.div>



      {/* GALERIA */}
      <div className="casamentos-grid">
        {imagens.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt="Casamento"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>

    </section>
  )
}


