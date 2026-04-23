import { useEffect } from "react"
import "../styles/casamentos.css"

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
      <div id="casamentos" className="casamentos-container">
        <div className="header-section">
          <h2>Casamentos 💍</h2>
          <p>Música ao vivo que transforma momentos em memórias inesquecíveis.</p>
        </div>

        <div className="event-grid">
          {weddingImages.map((item, index) => (
            <div className="image-card" key={index}>
              <img src={item.src} alt="" />
              <div className="overlay">
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RESTAURANTES */}
      <div id="restaurantes" className="casamentos-container">
        <div className="header-section">
          <h2>Restaurantes 🍽️</h2>
          <p>Ambiente elegante com música ao vivo.</p>
        </div>

        <div className="event-grid">
          {restaurantImages.map((item, index) => (
            <div className="image-card" key={index}>
              <img src={item.src} alt="" />
              <div className="overlay">
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ANIVERSÁRIOS */}
      <div id="aniversarios" className="casamentos-container">
        <div className="header-section">
          <h2>Aniversários 🎉</h2>
          <p>Momentos especiais com trilha sonora única.</p>
        </div>

        <div className="event-grid">
          {birthdayImages.map((item, index) => (
            <div className="image-card" key={index}>
              <img src={item.src} alt="" />
              <div className="overlay">
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CORPORATIVOS */}
      <div id="corporativos" className="casamentos-container">
        <div className="header-section">
          <h2>Corporativos 🏢</h2>
          <p>Eventos sofisticados e profissionais.</p>
        </div>

        <div className="event-grid">
          {corporateImages.map((item, index) => (
            <div className="image-card" key={index}>
              <img src={item.src} alt="" />
              <div className="overlay">
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="corporativos" className="casamentos-container">
        <div className="header-section">
          <h2>Festas gerais 🎉</h2>
          <p>Eventos sofisticados e profissionais.</p>
        </div>

        <div className="event-grid">
          {corporateImages.map((item, index) => (
            <div className="image-card" key={index}>
              <img src={item.src} alt="" />
              <div className="overlay">
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

            <div id="corporativos" className="casamentos-container">
        <div className="header-section">
          <h2>Shows e Eventos 🎤</h2>
          <p>Eventos sofisticados e profissionais.</p>
        </div>

        <div className="event-grid">
          {corporateImages.map((item, index) => (
            <div className="image-card" key={index}>
              <img src={item.src} alt="" />
              <div className="overlay">
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}