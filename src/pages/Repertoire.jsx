import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "../styles/repertoire.css"

export default function Repertorio() {
  const [active, setActive] = useState(null)

  const repertorio = [
    {
      title: "MPB",
      songs: [
        "Trem-Bala - Ana Vilela",
        "Meu Abrigo - Melim",
        "Ainda Bem - Marisa Monte",
        "Burguesinha - Seu Jorge",
        "Pra Você Guardei o Amor - Nando Reis",
        "Abrigo - Roberta Campos",
        "Mais Ninguém - Banda do Mar",
        "Velha Infância - Tribalistas",
        "Garota de Ipanema - Tom Jobim",
        "Oceano - Djavan"
      ]
    },
    {
      title: "Internacional",
      songs: [
        "Uptown Funk - Bruno Mars",
        "Shape of You – Ed Sheeran",
        "Die With A Smile – Lady Gaga & Bruno Mars:",
        "Midnight Feelings",
        "Happy – Pharrell Williams",
        "Hello – Adele",
        "All of Me – John Legend",
        "Thinking Out Loud – Ed Sheeran",
        "Can’t Stop the Feeling – Justin Timberlake",
        "Just the Way You Are – Bruno Mars"
      ]
    },
    {
      title: "Românticas",
      songs: [
        "Perfect – Ed Sheeran",
        "Love Yourself – Justin Bieber",
        "Pérola – Belo",
        "Eu Sei Que Vou Te Amar – Tom Jobim",
        "A Thousand Years – Christina Perri",
        "I Will Always Love You – Whitney Houston",
        "My Heart Will Go On – Celine Dion",
        "Fico assim Sem Você – Claudinho e Buchecha",
        "Quando a Chuva Passar – Ivete Sangalo",
        "Pra Você Guardei o Amor – Nando Reis",

      ]
    },
    {
      title: "Gospel",
      songs: [
        "Bênçãos Que Não Têm Fim - Isadora Pompeo",
        "Ninguém Explica Deus - Preto no Branco",
        "Acalma o Meu Coração - Bruna Karla",
        "Ousado Amor - Isaias Saad",  
        "Sonda-me, Usa-me - Aline Barros",
        "Raridade - Anderson Freire",
        "Deus de Promessas - Davi Sacer",
        "A Vitória é do Senhor - Ministério Apascentar de Nova Iguaçu",
        "Ele Vem - Fernandinho",
        "Tudo É Perda – Felipe Rodrigues"

      ]
    },
    {
      title: "Jazz",
      songs: [
        "My Favorite Things – John Coltrane",
        "So What – Miles Davis",
        "Take Five – Dave Brubeck",
        "All Blues – Miles Davis",
        "Blue in Green – Bill Evans",
        "Freddie Freeloader – Miles Davis",
        "Round Midnight – Thelonious Monk",
        "Cantaloupe Island – Herbie Hancock",
        "Maiden Voyage – Herbie Hancock",
        "AThe Girl From Ipanema – Stan Getz & João Gilberto"

      ]
    },
    {
      title: "Pop",
      songs: [
        "Flowers – Miley Cyrus",
        "Birds of a Feather – Billie Eilish",
        "As It Was – Harry Styles",
        "Blinding Lights – The Weeknd",
        "Levitating – Dua Lipa",
        "Watermelon Sugar – Harry Styles",
        "Don’t Start Now – Dua Lipa",
        "Bad Romance – Lady Gaga",
        "Can’t Stop the Feeling – Justin Timberlake",
        "Happy – Pharrell Williams"
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