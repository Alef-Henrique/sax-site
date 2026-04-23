import { useEffect } from "react"
import SectionTitle from "../components/SectionTitle"
import EventCard from "../components/EventCard"
import TestimonialCard from "../components/TestimonialCard"
import { motion } from "framer-motion"

export default function Events(){

 // SCROLL AUTOMÁTICO
 useEffect(() => {

  const hash = window.location.hash

  if(hash){
   const element = document.querySelector(hash)

   if(element){
    element.scrollIntoView({ behavior: "smooth" })
   }
  }

 }, [])

 return(

  <section className="container">

   <SectionTitle title="Eventos"/>

   {/* GRID RESUMO (SE QUISER MANTER) */}

   <motion.div
    className="grid"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: .6 }}
   >

    <EventCard title="Casamentos"/>
    <EventCard title="Restaurantes"/>
    <EventCard title="Aniversários"/>
    <EventCard title="Corporativos"/>

   </motion.div>

   {/* SEÇÕES DETALHADAS */}

   <div id="casamentos" style={{ marginTop: "80px" }}>
    <SectionTitle title="Casamentos" />
    <p>Entrada da noiva, cerimônia e recepção com música emocionante.</p>
   </div>

   <div id="corporativos" style={{ marginTop: "80px" }}>
    <SectionTitle title="Corporativos" />
    <p>Eventos empresariais sofisticados com ambiente elegante.</p>
   </div>

   <div id="restaurantes" style={{ marginTop: "80px" }}>
    <SectionTitle title="Restaurantes" />
    <p>Música ambiente para criar uma experiência única aos clientes.</p>
   </div>

   <div id="aniversarios" style={{ marginTop: "80px" }}>
    <SectionTitle title="Aniversários" />
    <p>Momentos especiais com trilha sonora personalizada.</p>
   </div>

   <div id="festas" style={{ marginTop: "80px" }}>
    <SectionTitle title="Festas" />
    <p>Animação e energia para festas inesquecíveis.</p>
   </div>

   <div id="shows" style={{ marginTop: "80px" }}>
    <SectionTitle title="Shows e Eventos" />
    <p>Apresentações ao vivo com presença e estilo profissional.</p>
   </div>

   {/* DEPOIMENTOS */}

   <SectionTitle title="Depoimentos"/>

   <motion.div
    className="grid"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: .6 }}
   >

    <TestimonialCard
     name="Cliente"
     text="Excelente apresentação!"
    />

    <TestimonialCard
     name="Empresa"
     text="Evento elegante."
    />

   </motion.div>

  </section>

 )

}