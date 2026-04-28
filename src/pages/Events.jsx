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

// RESTAURANTES (3 imagens)"../assets/event-restaurant3.jpg"
import r1 from "../assets/event-restaurant1.jpg"
import r2 from "../assets/event-romantic3.jpg"
import r3 from "../assets/event-romantic2.jpg"

// ANIVERSÁRIOS (3 imagens)
import b1 from "../assets/event-niver.jpg"
import b2 from "../assets/event-niver3.jpg"
import b3 from "../assets/event-niver2.jpg"

// CORPORATIVOS (3 imagens)
import c1 from "../assets/event-corporation3.webp"
import c2 from "../assets/event-corporation2.jpg"
import c3 from "../assets/event-corporation4.webp"

// FESTAS (3 imagens)
import f1 from "../assets/event-festas2.jpg"
import f2 from "../assets/event-festas.jpg"
import f3 from "../assets/event-festas3.webp"

// SHOWS E EVENTOS (3 imagens)
import s1 from "../assets/event-events.jpeg"
import s2 from "../assets/event-romantic4.jpg"
import s3 from "../assets/event-romantic2.jpg"

export default function Events(){

  const weddingImages = [
    { src: w1, text: "Momentos únicos embalados por emoção e elegância"},
    { src: w2, text: "Trilha sonora perfeita para o dia mais especial" },
    { src: w3, text: "Cada nota marcando um amor inesquecível" },
    { src: w4, text: "Uma melodia que eterniza cada instante do seu amor" },
    { src: w5, text: "A música certa para um momento que será lembrado para sempre" },
    { src: w6, text: "Sons que transformam sentimentos em memórias inesquecíveis" }
  ]

const restaurantImages = [
    { src: r1, text: "Atmosfera envolvente com música ao vivo" },
    { src: r2, text: "Seu jantar com um toque de sofisticação" },
    { src: r3, text: "Experiência sensorial além do paladar" },
]

  const birthdayImages = [
    { src: b1, text: "Celebre a vida com música e emoção" },
    { src: b2, text: "Momentos felizes que ficam na memória" },
    { src: b3, text: "Cada aniversário merece uma trilha especial" },
  ]

  const corporateImages = [
    { src: c1, text: "Ambiente sofisticado para eventos profissionais" },
    { src: c2, text: "Elegância sonora que valoriza sua marca" },
    { src: c3, text: "Experiência musical alinhada ao seu evento" },
  ]
  
  const partyImages = [
    { src: f1, text: "Energia e animação para sua celebração" },
    { src: f2, text: "Música que conecta e contagia" },
    { src: f3, text: "A trilha sonora perfeita para sua festa" },
  ]

  const showsImages = [
    { src: s1, text: "Performances marcantes que encantam o público" },
    { src: s2, text: "Presença musical que transforma o ambiente" },
    { src: s3, text: "Experiência ao vivo com identidade e emoção" },
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