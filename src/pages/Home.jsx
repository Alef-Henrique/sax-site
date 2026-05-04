import Hero from "../components/Hero"
import EventCard from "../components/EventCard"
import TestimonialCard from "../components/TestimonialCard"
import RepertorioCard from "../components/RepertorioCard"


import { GiDiamondRing } from "react-icons/gi"
import { FaBriefcase, FaBirthdayCake, FaGlassCheers, FaMusic } from "react-icons/fa"
import { MdRestaurant } from "react-icons/md"
import { GiSaxophone } from "react-icons/gi"
import { MdFavorite } from "react-icons/md"
import { FaGuitar } from "react-icons/fa"
import { FaPray } from "react-icons/fa"
import { FaStar } from "react-icons/fa"
import Reveal from "../components/Reveal"

import evento1 from "../assets/event-weddings2.jpg"
import evento2 from "../assets/event-weddings11.jpg"
import evento3 from "../assets/event-weddings12.jpg"
import evento4 from "../assets/event-weddings8.jpeg"
import evento5 from "../assets/event-weddings14.jpeg"
import evento6 from "../assets/event-weddings10.jpg"

export default function Home(){

 return(

  <>

   <Hero/>

   {/* EVENTOS */}
   


    <Reveal>
        <section className="container">

                <h2 className="section-title">
                Eventos que realizo
                </h2>

                <div className="events-grid">

                    <EventCard icon={GiDiamondRing} title="Casamentos" type="casamentos"/>
                    <EventCard icon={FaBriefcase} title="Corporativos" type="corporativos"/>
                    <EventCard icon={MdRestaurant} title="Restaurantes" type="restaurantes"/>
                    <EventCard icon={FaBirthdayCake} title="Aniversários" type="aniversarios"/>
                    <EventCard icon={FaGlassCheers} title="Festas" type="festas"/>
                    <EventCard icon={FaMusic} title="Shows e Eventos" type="shows"/>

                </div>

            </section>
    </Reveal>

    <Reveal>
            <section class="videos">
            <h2>Minhas Apresentações</h2>

            <div class="videos-grid">
                
                <div class="video-card">
                <iframe 
                    src="https://www.youtube.com/embed/zlHAj3qXsr0" 
                    title="Sax performance"
                    frameborder="0"
                    allowfullscreen>
                </iframe>
                </div>

                <div class="video-card">
                <iframe 
                    src="https://www.youtube.com/embed/rDMVwgI3Foc"
                    frameborder="0"
                    allowfullscreen>
                </iframe>
                </div>

                <div class="video-card">
                <iframe 
                    src="https://www.youtube.com/embed/BaWzWqKXBrM" 
                    title="Sax performance"
                    frameborder="0"
                    allowfullscreen>
                </iframe>
                </div>
                                <div class="video-card">
                <iframe 
                    src="https://www.youtube.com/embed/Z-8GVXz2454" 
                    title="Sax performance"
                    frameborder="0"
                    allowfullscreen>
                </iframe>
                </div>
                <div class="video-card">
                <iframe 
                    src="https://www.youtube.com/embed/XcbO9tJBZSk" 
                    title="Sax performance"
                    frameborder="0"
                    allowfullscreen>
                </iframe>
                </div>
                <div class="video-card">
                <iframe 
                    src="https://www.youtube.com/embed/NO02I3XXbTU" 
                    title="Sax performance" 
                    frameborder="0"
                    allowfullscreen>
                </iframe>
                </div>

            </div>
            </section>
    </Reveal>
        

        {/* DEPOIMENTOS */}
        <Reveal>
            <section className="container">

            <h2 className="section-title">
            O que meus clientes dizem
            </h2>

            <div className="testimonial-grid">

            <TestimonialCard name="Juliana Martins" role="Cliente" text="Experiência incrível! Tornou nosso evento inesquecível." />
            <TestimonialCard name="Carlos Eduardo" role="Empresa" text="Evento sofisticado e elegante. Superou todas as expectativas!" />
            <TestimonialCard name="Restaurante Bella Vista" role="Restaurante" text="Ambiente perfeito com música ao vivo. Fez toda a diferença!" />
            <TestimonialCard name="Fernanda Lima" role="Cliente" text="Profissional talentoso e muito atencioso. Recomendo!" />

            <TestimonialCard name="Ozeias & Paula" role="Casamento" text="Nosso casamento ficou ainda mais especial com esse som incrível!" />
            <TestimonialCard name="Roberto Almeida" role="Cliente" text="Repertório impecável e muito bom gosto. Todos amaram!" />
            <TestimonialCard name="Naiane & Max" role="Cliente" text="Música de altíssima qualidade e com muita sensibilidade!" />
            <TestimonialCard name="Eventos Prime" role="Empresa" text="Transformou nosso evento corporativo em algo memorável." />

            <TestimonialCard name="Churrascaria de Arraial" role="Cliente" text="Pontual, profissional e um talento fora do comum!" />
            <TestimonialCard name="Chefe do Crepe" role="Restaurante" text="Criou a atmosfera perfeita para nosso jantar." />
            <TestimonialCard name="Patrícia Gomes" role="Cliente" text="Superou todas as expectativas. Emocionou a todos!" />
            <TestimonialCard name="Metodista contagiante" role="Igreja" text="Excelente músico! Técnica e carisma impressionantes." />

            </div>

            </section>
        </Reveal>

        

        {/* GALERIA */}
        <Reveal>
             <section className="container">

                    <h2 className="section-title">
                    Eventos realizados
                    </h2>

                    <div className="gallery-grid">

                        <div className="gallery-item">
                        <img src={evento1} alt="Evento 1" />

                         <div className="overlay">
                            <p>"Álefe, seu trabalho ficou excelente, adoramos demais!"</p>
                        </div>

                        </div>

                        <div className="gallery-item">
                        <img src={evento2} alt="Evento 2" />
                         <div className="overlay">
                            <p>"Agedecemos demais Álefe, você foi incrível!"</p>
                        </div>
                        </div>

                        <div className="gallery-item">
                        <img src={evento3} alt="Evento 3" />
                         <div className="overlay">
                            <p>"Ficamos gratos por atender o nosso pedido, ficou incrível!"</p>
                        </div>
                        </div>

                        <div className="gallery-item">
                        <img src={evento4} alt="Evento 4" />
                         <div className="overlay">
                            <p>"Amamos demais o seu trabalho, que Deus abençoe!"</p>
                        </div>
                        </div>
                        <div className="gallery-item">
                        <img src={evento5} alt="Evento 5" />
                         <div className="overlay">
                            <p>"Agradecemos pelo excelente trabalho, ficou tudo lindo!"</p>
                        </div>
                        </div>
                        <div className="gallery-item">
                        <img src={evento6} alt="Evento 6" />
                         <div className="overlay">
                            <p>"Álefe, você foi incrível, fez um trabalho de excelência!"</p>
                        </div>
                        </div>

                    </div>

               
             </section>
            
        </Reveal>

       
        {/* REPERTÓRIO */}

        <Reveal>
            <section id="repertorio" className="container">

            <h2 className="section-title">
                <a href="#repertorio">Repertório</a>
            </h2>

            <div className="repertorio-grid">

            <RepertorioCard
                icon={FaMusic}
                title="MPB"
                description="Clássicos brasileiros elegantes"
                type="mpb"
            />

            <RepertorioCard
                icon={FaStar}
                title="Internacional"
                description="Hits internacionais sofisticados"
                type="internacional"
            />

            <RepertorioCard
                icon={MdFavorite}
                title="Românticas"
                description="Perfeitas para casamentos"
                type="romanticas"
            />

            <RepertorioCard
                icon={FaPray}
                title="Gospel"
                description="Músicas que tocam o coração"
                type="gospel"
            />

            <RepertorioCard
                icon={FaGuitar}
                title="Jazz"
                description="Clássicos instrumentais sofisticados"
                type="jazz"
            />

            <RepertorioCard
                icon={GiSaxophone}
                title="Pop"
                description="Sucessos modernos e animados"
                type="pop"
            />

            </div>

            </section>
        </Reveal>
  </>

 )
}