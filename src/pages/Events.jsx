import { useEffect } from "react"
import { motion } from "framer-motion"
import "../styles/events.css"
import "../styles/responsive.css"

// CASAMENTOS (6 imagens)
import w1 from "../assets/event-weddings.jpg"
import w2 from "../assets/event-weddings2.jpg"
import w3 from "../assets/event-weddings8.jpeg"
import w4 from "../assets/event-weddings10.jpg"
import w5 from "../assets/event-weddings11.jpg"
import w6 from "../assets/event-weddings12.jpg"

// RESTAURANTES (3 imagens)
import r1 from "../assets/event-weddings.jpg"
import r2 from "../assets/event-weddings.jpg"
import r3 from "../assets/event-weddings.jpg"

// ANIVERSÁRIOS (3 imagens)
import b1 from "../assets/event-weddings.jpg"
import b2 from "../assets/event-weddings.jpg"
import b3 from "../assets/event-weddings.jpg"

// CORPORATIVOS (3 imagens)
import c1 from "../assets/event-weddings.jpg"
import c2 from "../assets/event-weddings.jpg"
import c3 from "../assets/event-weddings.jpg"

export default function Events(){

  const weddingImages = [
    { src: w1, text: "Casamento na praia" },
    { src: w2, text: "Cerimônia elegante" },
    { src: w3, text: "Momento especial" },
    { src: w4, text: "Entrada da noiva" },
    { src: w5, text: "Recepção sofisticada" },
    { src: w6, text: "Noite inesquecível" }
  ]

const restaurantImages = [
  { src: "https://source.unsplash.com/400x300/?restaurant", text: "Ambiente sofisticado" },
  { src: "https://source.unsplash.com/400x300/?dinner", text: "Clima elegante" },
  { src: "https://source.unsplash.com/400x300/?food", text: "Experiência única" }
]

  const birthdayImages = [
  { src: "https://source.unsplash.com/400x300/?restaurant", text: "Ambiente sofisticado" },
  { src: "https://source.unsplash.com/400x300/?dinner", text: "Clima elegante" },
  { src: "https://source.unsplash.com/400x300/?food", text: "Experiência única" }
  ]

  const corporateImages = [
  { src: "https://source.unsplash.com/400x300/?restaurant", text: "Ambiente sofisticado" },
  { src: "https://source.unsplash.com/400x300/?dinner", text: "Clima elegante" },
  { src: "https://source.unsplash.com/400x300/?food", text: "Experiência única" }
  ]
  
  const partyImages = [
    { src:"https://source.unsplash.com/400x300/?restaurant", text: "Festa especial" },
    { src:"https://source.unsplash.com/400x300/?party", text: "Evento animado" },
    { src:"https://source.unsplash.com/400x300/?celebration", text: "Celebração única" }
  ]



  const showsImages = [
  { src: "https://source.unsplash.com/400x300/?restaurant", text: "Ambiente sofisticado" },
  { src: "https://source.unsplash.com/400x300/?dinner", text: "Clima elegante" },
  { src: "https://source.unsplash.com/400x300/?food", text: "Experiência única" }
  ]

  useEffect(() => {
    const hash = window.location.hash
    if(hash){
      const element = document.querySelector(hash)
      if(element){
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [])

  return (
    <section className="container">

{/* CASAMENTOS */}
<div id="casamentos" className="events-container">

  <motion.div
    className="header-section"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2>Casamentos</h2>
    <p>
      Transforme a entrada da noiva em um momento inesquecível com o som envolvente do sax.
      Cada nota é pensada para emocionar e marcar para sempre esse dia único.
    </p>
  </motion.div>

  <div className="event-grid">
    {weddingImages.map((item, index) => (
      <motion.div
        className="image-card"
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={item.src} alt="Casamento" />
        <div className="overlay">
          <span>{item.text}</span>
        </div>
      </motion.div>
    ))}
  </div>

</div>


{/* RESTAURANTES */}
<div id="restaurantes" className="events-container">

  <motion.div
    className="header-section"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2>Restaurantes</h2>
    <p>
      Crie uma atmosfera sofisticada e acolhedora para seus clientes,
      com música ao vivo que transforma a experiência e valoriza cada momento.
    </p>
  </motion.div>

  <div className="event-grid">
    {restaurantImages.map((item, index) => (
      <motion.div
        className="image-card"
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={item.src} alt="Restaurante" />
        <div className="overlay">
          <span>{item.text}</span>
        </div>
      </motion.div>
    ))}
  </div>

</div>


{/* ANIVERSÁRIOS */}
<div id="aniversarios" className="events-container">

  <motion.div
    className="header-section"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2>Aniversários</h2>
    <p>
      Celebre com estilo e emoção, criando momentos únicos com música ao vivo
      que envolvem e encantam todos os convidados.
    </p>
  </motion.div>

  <div className="event-grid">
    {birthdayImages.map((item, index) => (
      <motion.div
        className="image-card"
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={item.src} alt="Aniversário" />
        <div className="overlay">
          <span>{item.text}</span>
        </div>
      </motion.div>
    ))}
  </div>

</div>


{/* CORPORATIVOS */}
<div id="corporativos" className="events-container">

  <motion.div
    className="header-section"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2>Corporativos</h2>
    <p>
      Impressione clientes e colaboradores com uma experiência musical elegante,
      elevando o nível do seu evento corporativo.
    </p>
  </motion.div>

  <div className="event-grid">
    {corporateImages.map((item, index) => (
      <motion.div
        className="image-card"
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={item.src} alt="Corporativo" />
        <div className="overlay">
          <span>{item.text}</span>
        </div>
      </motion.div>
    ))}
  </div>

</div>

{/* FESTAS */}
<div id="festas" className="events-container">

  <motion.div
    className="header-section"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2>Festas</h2>
    <p>
      Transforme sua festa em uma experiência única com música ao vivo,
      criando um ambiente animado, elegante e inesquecível para todos os convidados.
    </p>
  </motion.div>

  <div className="event-grid">
    {partyImages.map((item, index) => (
      <motion.div
        className="image-card"
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={item.src} alt="Festa" />
        <div className="overlay">
          <span>{item.text}</span>
        </div>
      </motion.div>
    ))}
  </div>

</div>


{/* SHOWS */}
<div id="shows" className="events-container">

  <motion.div
    className="header-section"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2>Shows e Eventos</h2>
    <p>
      Performances ao vivo que criam conexão com o público,
      trazendo energia, sofisticação e identidade para o seu evento.
    </p>
  </motion.div>

  <div className="event-grid">
    {showsImages.map((item, index) => (
      <motion.div
        className="image-card"
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img src={item.src} alt="Show" />
        <div className="overlay">
          <span>{item.text}</span>
        </div>
      </motion.div>
    ))}
  </div>

</div>
 
    </section>
  )
}