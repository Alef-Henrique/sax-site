import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "../styles/repertoire.css"

export default function Repertorio() {
  const [active, setActive] = useState(null)

  const repertorio = [
    {
      title: "MPB",
      songs: [
        "Velho Horizonte",
        "Luz do Mar",
        "Caminhos do Amor",
        "Noite Serena"
      ]
    },
    {
      title: "Internacional",
      songs: [
        "Endless Dreams",
        "Golden Sky",
        "Love in Paris",
        "Midnight Feelings"
      ]
    },
    {
      title: "Românticas",
      songs: [
        "Amor Perfeito",
        "Dois Destinos",
        "Para Sempre Nós",
        "Coração em Paz"
      ]
    },
    {
      title: "Gospel",
      songs: [
        "Luz Divina",
        "Caminho da Fé",
        "Graça Eterna",
        "Espírito Santo"
      ]
    },
    {
      title: "Jazz",
      songs: [
        "Blue Night",
        "Smooth Sax",
        "Golden Jazz",
        "Urban Groove"
      ]
    },
    {
      title: "Pop",
      songs: [
        "Summer Lights",
        "Feel the Beat",
        "City Vibes",
        "Dancing Stars"
      ]
    }
  ]

  const toggle = (index) => {
    setActive(active === index ? null : index)
  }

  return (
    <section className="repertorio-container">

      {repertorio.map((item, index) => (
        <div key={index} className="repertorio-item">
            <h2
            onClick={() => toggle(index)}
            className={`repertorio-title ${active === index ? "active" : ""}`}
            >
            {item.title}
            </h2>

          <AnimatePresence>
            {active === index && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="repertorio-list"
              >
                {item.songs.map((song, i) => (
                  <li key={i}>{song}</li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

        </div>
      ))}

    </section>
  )
}