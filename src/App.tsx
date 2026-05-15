/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useMotionValue, animate, useInView } from 'motion/react';
import { Music, Calendar, Award, Star, Instagram, Mail, Phone, ArrowRight, Menu, X, ChevronRight, Play, ChevronLeft, MessageCircle, Youtube, MapPin, ExternalLink } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 448 512" 
    className={className} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.8 69.4 27.2 106.2 27.2h.1c122.3 0 222-99.6 222-222 0-59.3-23-115.1-65-157.1zM223.9 446.2c-33.1 0-65.6-8.9-94.1-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.4-29.4-28.1-63.3-28.1-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-82.7 184.6-184.5 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.6 11.8 13.9 4.4 26.5 3.8 36.5 2.3 11.1-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

function StatCounter({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState("0");
  
  const suffix = value.replace(/[0-9]/g, '');
  const target = parseInt(value.replace(/[^0-9]/g, '')) || 0;

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { 
        duration: 2, 
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest).toString() + suffix);
        }
      });
      return controls.stop;
    }
  }, [isInView, count, target, suffix]);

  return <span ref={ref}>{displayValue}</span>;
}

const SERVICES = [
  {
    title: "Casamentos",
    description: "Trilha sonora personalizada desde a entrada triunfal até a recepção festiva. Transformamos cada momento do seu grande dia em uma memória emocionante e eterna através de performances com alma e técnica refinada.",
    icon: <Star className="w-6 h-6" />,
    image: "/images/regenerated_image_1778771880531.jpg"
  },
  {
    title: "Eventos Corporativos",
    description: "Leve sofisticação para coquetéis, jantares e lançamentos. O toque musical exclusivo que valoriza sua marca e proporciona conforto aos seus convidados, garantindo profissionalismo e uma experiência premium.",
    icon: <Award className="w-6 h-6" />,
    image: "/images/regenerated_image_1778771881224.webp"
  },
  {
    title: "Restaurantes",
    description: "Música ambiente de alto nível para criar a atmosfera perfeita em jantares e coquetéis. Saxofone elegante que se integra suavemente à experiência gastronômica, elevando o padrão e o conforto do seu local.",
    icon: <Music className="w-6 h-6" />,
    image: "/images/regenerated_image_1778771962635.jpg"
  },
  {
    title: "Festas",
    description: "Aumente a vibração da sua comemoração com um show dinâmico e contagiante. Hits atuais e clássicos garantem que todos aproveitem cada segundo na pista de dança com a energia única do saxofone.",
    icon: <Play className="w-6 h-6" />,
    image: "/images/regenerated_image_1778772377433.jpg"
  },
  {
    title: "Aniversários",
    description: "Celebre a vida com uma apresentação íntima e envolvente. Do som ambiente no jantar às batidas animadas da festa, criamos a trilha sonora ideal que reflete sua personalidade em uma comemoração marcante.",
    icon: <Calendar className="w-6 h-6" />,
    image: "/images/regenerated_image_1778772378710.jpg"
  },
  {
    title: "Shows e Eventos",
    description: "Performances memoráveis para festivais, inaugurações e grandes palcos. Saxofone virtuoso com arranjos criativos que cativam o público do início ao fim, elevando o nível artístico de qualquer programação.",
    icon: <Music className="w-6 h-6" />,
    image: "/images/regenerated_image_1778772380046.jpg"
  }
];

const YOUTUBE_VIDEOS = [
  "mEkHMSNPvIM",
  "XcbO9tJBZSk",
  "BaWzWqKXBrM",
  "zlHAj3qXsr0",
  "rDMVwgI3Foc",
  "NO02I3XXbTU"
];

const REPERTOIRE = [
  { genre: "MPB", items: ["Chega de Saudade", "Mas que Nada", "Aquarela do Brasil", "Samba de Verão"] },
  { genre: "Lounge & Bossa", items: ["Garota de Ipanema", "Wave", "Corcovado", "Summer Vibe"] },
  { genre: "Internacionais", items: ["Careless Whisper", "Perfect", "Havana", "Blinding Lights"] },
  { genre: "Sax House", items: ["Man with the Red Face", "Jubel", "Changes", "Infinity"] },
  { genre: "Gospel", items: ["Bênçãos Que Não Têm Fim", "Ninguém Explica Deus", "Acalma o Meu Coração", "Ousado Amor"] }
];

const TESTIMONIALS = [
  {
    name: "Juliana & Ricardo",
    text: "O Álefe transformou nossa cerimônia em algo mágico. O som do saxofone dele emocionou todos os convidados.",
    role: "Noivos"
  },
  {
    name: "Marcos Oliveira",
    text: "Contratamos para o evento da nossa empresa e foi um sucesso total. Repertório impecável e muito profissionalismo.",
    role: "Diretor de Marketing"
  },
  {
    name: "Cláudia S.",
    text: "A maestria do Álefe no saxofone elevou o nível do nosso jantar. Recomendo fortemente!",
    role: "Empresária"
  },
  {
    name: "Fábio Lima",
    text: "Incrível como ele consegue ler o ambiente. A música estava perfeita do início ao fim.",
    role: "Organizador de Eventos"
  },
  {
    name: "Ana Paula",
    text: "O melhor saxofonista que já contratamos. Pontual, elegante e extremamente talentoso.",
    role: "Eventos Corporativos"
  },
  {
    name: "Roberto G.",
    text: "Minha festa de 50 anos não seria a mesma sem a energia que ele trouxe com o Sax House.",
    role: "Aniversariante"
  },
  {
    name: "Dra. Beatriz",
    text: "Contratei para a recepção da minha clínica e todos os clientes elogiaram muito a sofisticação.",
    role: "Proprietária"
  },
  {
    name: "Carla & Thiago",
    text: "Um verdadeiro showman. Além de tocar divinamente, ele interage muito bem com o público.",
    role: "Noivos"
  },
  {
    name: "Pr. André",
    text: "Repertório gospel impecável. Foi um momento de muita unção e técnica no nosso casamento.",
    role: "Celebrante"
  },
  {
    name: "Maria Helena",
    text: "A sonoridade dele é de arrepiar. O saxofone parece que fala!",
    role: "Convidada"
  },
  {
    name: "Henrique D.",
    text: "Transformou um simples coquetel em uma experiência de luxo. Vale cada centavo.",
    role: "Diretor Comercial"
  },
  {
    name: "Luciana F.",
    text: "Versatilidade é a palavra. Transitou do Jazz para o Pop com uma facilidade impressionante.",
    role: "Marketing"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [repertoireIndex, setRepertoireIndex] = useState(0);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const targetRef = useRef(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="relative min-h-screen bg-transparent overflow-x-hidden">
      {/* Global Background Video */}
      <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover pointer-events-none"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-wedding-reception-decoration-in-a-garden-at-night-42525-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 lg:px-12 py-6 flex justify-between items-center bg-gradient-to-b from-black/90 via-black/40 to-transparent backdrop-blur-[2px] transition-all duration-500">
        <motion.a 
          onClick={() => scrollToSection('início')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ 
            scale: 1.02,
            textShadow: "0 0 12px rgba(214, 175, 55, 0.6)"
          }}
          className="text-[16px] leading-[25px] font-serif font-bold tracking-tight text-brand-gold cursor-pointer transition-all transition-shadow duration-300"
        >
          Álefe Silva | Saxofonista
        </motion.a>
        
        <div className="hidden lg:flex flex-1 justify-end gap-6 lg:gap-10 text-[14px] lg:text-[15px] uppercase tracking-widest font-serif font-medium items-center leading-[20px]">
          {["Início", "Apresentações", "Serviços", "Sobre", "Depoimentos", "Contato"].map((item) => (
            <motion.button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase() === 'apresentações' ? 'apresentações' : item.toLowerCase())}
              whileHover={{ 
                y: -4,
                scale: 1.05,
                color: "#D6AF37",
                textShadow: "0 0 15px rgba(214, 175, 55, 0.4)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative py-1 text-white/70 hover:text-brand-gold transition-colors duration-300 group cursor-pointer"
            >
              <span className="relative z-10">{item}</span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out shadow-[0_0_8px_rgba(214, 175, 55, 0.6)]" 
              />
            </motion.button>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="lg:hidden text-brand-gold ml-4 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden"
        >
          <button 
            className="absolute top-6 right-6 text-brand-gold"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          {["Início", "Apresentações", "Serviços", "Sobre", "Depoimentos", "Contato"].map((item, idx) => (
            <motion.button 
              key={item} 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ 
                scale: 1.15,
                color: '#D6AF37',
                letterSpacing: '0.1em'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.toLowerCase() === 'apresentações' ? 'apresentações' : item.toLowerCase())}
              className="text-3xl font-serif text-white hover:text-brand-gold cursor-pointer py-2 px-6 transition-all duration-300"
            >
              {item}
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* Hero Section */}
      <section id="início" ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
        </motion.div>

        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-gold uppercase tracking-[0.4em] text-sm mb-6 font-medium"
          >
            Música que transforma momentos
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold mb-8 leading-tight max-w-4xl mx-auto"
          >
            Transformando eventos em experiências <span className="italic text-brand-gold">inesquecíveis</span>.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <motion.a 
              href="https://wa.me/5522988354135?text=Ol%C3%A1%20%C3%81lefe%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20o%20meu%20evento!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(214, 175, 55, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-brand-gold text-black rounded-full font-bold hover:bg-white transition-all duration-300 cursor-pointer shadow-lg shadow-brand-gold/20 inline-flex items-center justify-center text-center"
            >
              SOLICITAR ORÇAMENTO
            </motion.a>
            <motion.button 
              whileHover={{ x: 5 }}
              onClick={() => scrollToSection('apresentações')}
              className="flex items-center gap-2 group text-white/80 hover:text-white transition-colors"
            >
              <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-gold transition-colors">
                <Play className="w-4 h-4 fill-current ml-1" />
              </span>
              <span className="text-sm font-semibold tracking-wider uppercase group-hover:text-brand-gold transition-colors duration-300">Apresentações</span>
            </motion.button>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-50 text-brand-gold"
        >
          <div className="w-px h-12 bg-gradient-to-b from-brand-gold to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Stats / Value Prop */}
      <section className="py-20 bg-brand-dark/40 border-y border-white/5 backdrop-blur-sm px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Anos de Carreira", value: "10+" },
            { label: "Eventos Realizados", value: "500+" },
            { label: "Casamentos", value: "300+" },
            { label: "Clientes Satisfeitos", value: "100%" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-brand-gold mb-2">
                <StatCounter value={stat.value} />
              </div>
              <div className="text-xs uppercase tracking-widest text-white/50 font-times">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-32 px-6 text-[15px]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiências <span className="text-brand-gold italic">Musicais</span></h2>
            <div className="w-16 h-1 bg-brand-gold" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative h-[500px] overflow-hidden rounded-2xl cursor-pointer"
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="bg-brand-gold/20 backdrop-blur-md p-3 rounded-full w-fit mb-6 text-brand-gold">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/70 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <motion.a 
                    href={`https://wa.me/5522988354135?text=Ol%C3%A1%20%C3%81lefe%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20${encodeURIComponent(service.title)}!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-brand-gold font-bold text-sm group-hover:gap-4 transition-all font-times w-fit"
                  >
                    SABER MAIS <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Performances Section */}
      <section id="apresentações" className="py-32 px-6 bg-black/40 backdrop-blur-sm relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
            <div className="text-center md:text-left">
              <p className="text-brand-gold font-bold tracking-[0.2em] text-sm mb-4 uppercase font-times">Galeria de Vídeos</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">Momentos <span className="italic text-brand-gold">Exclusivos</span></h2>
            </div>
            <p className="text-white/50 max-w-md text-center md:text-right font-times text-base md:text-[17px] leading-relaxed">
              Assista a algumas das minhas performances mais memoráveis e sinta a energia do saxofone em diferentes cenários.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {YOUTUBE_VIDEOS.map((videoId, idx) => (
              <motion.div
                key={videoId}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'rgba(214, 175, 55, 0.4)',
                  boxShadow: '0 20px 40px -15px rgba(214, 175, 55, 0.2)'
                }}
                className="w-full relative group rounded-2xl overflow-hidden border border-white/10 aspect-square bg-brand-dark/20 shadow-2xl transition-all duration-500"
              >
                <iframe
                  className="w-full h-full object-cover"
                  src={`https://www.youtube.com/embed/${videoId}?loop=1&playlist=${videoId}`}
                  title={`Performance ${idx + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Premium Overlay Effect on Hover */}
                <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-brand-gold/30 rounded-2xl transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <motion.a 
              href="https://www.youtube.com/@alefemarosax7" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(214, 175, 55, 0.1)',
                borderColor: 'rgba(214, 175, 55, 1)',
                boxShadow: '0 0 30px rgba(214, 175, 55, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 text-brand-gold hover:text-white transition-all group font-serif text-lg py-4 px-10 border border-brand-gold/30 rounded-full"
            >
              <Youtube className="w-6 h-6" />
              <span>VER CANAL COMPLETO</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-32 bg-brand-dark/40 backdrop-blur-sm px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl" />
            <img 
              src="/images/IMG_20251225_131200_830.webp" 
              alt="Álefe Silva tocando"
              className="rounded-2xl relative z-10 border border-white/10"
            />
            <div className="absolute -bottom-6 -right-6 p-8 bg-brand-gold text-black rounded-lg z-20 font-serif italic text-xl hidden md:block">
              "A música é a linguagem da alma."
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-brand-gold font-bold tracking-widest text-sm mb-4 uppercase font-times">Sobre Álefe Silva</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">A Paixão pelo <span className="italic text-brand-gold underline underline-offset-8">Saxofone</span></h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p className="font-times text-[18px]">
                Com mais de uma década dedicada ao saxofone, Álefe Silva consolidou-se como um dos músicos mais requisitados para eventos de alto padrão em sua região.
              </p>
              <p className="font-times text-[18px]">
                Sua sonoridade única mistura a técnica clássica com a sensibilidade contemporânea, permitindo transitar com maestria entre o jazz suave, a bossa nova envolvente e os sucessos do pop moderno.
              </p>
              <p className="font-times text-[18px]">
                Cada apresentação é planejada meticulosamente para se integrar à atmosfera do evento, garantindo que a música seja o fio condutor de experiências inesquecíveis.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex gap-4">
                <div className="w-1 h-12 bg-brand-gold" />
                <div>
                  <h4 className="font-bold mb-1">Repertório</h4>
                  <p className="text-[14px] text-white/50 font-times">Jazz, Bossa, Pop, MPB e Gospel</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 h-12 bg-white/20" />
                <div>
                  <h4 className="font-bold mb-1">Localização</h4>
                  <p className="text-[14px] text-white/50 font-times leading-[17.5px]">Disponível para viagens e eventos nacionais</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Repertoire Section */}
      <section id="repertório" className="py-32 px-6 bg-brand-dark/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
            <div className="text-center md:text-left">
              <p className="text-brand-gold font-bold tracking-[0.2em] text-sm mb-4 uppercase font-times">Versatilidade</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">O <span className="italic text-brand-gold">Repertório</span></h2>
            </div>
            <p className="text-white/50 max-w-md text-center md:text-right font-times text-base md:text-[19px] leading-relaxed">
              Uma seleção refinada que transita entre o clássico e o contemporâneo, adaptando-se perfeitamente a cada momento do seu evento.
            </p>
          </div>

          <div className="relative group">
            {/* Desktop Navigation Buttons */}
            <button 
              onClick={() => setRepertoireIndex(prev => prev > 0 ? prev - 1 : REPERTOIRE.length - 1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 lg:-translate-x-16 z-20 w-12 h-12 bg-white/5 hover:bg-brand-gold text-white hover:text-black rounded-full flex items-center justify-center border border-white/10 hover:border-brand-gold transition-all duration-300 backdrop-blur-md opacity-0 group-hover:opacity-100 hidden md:flex"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setRepertoireIndex(prev => (prev + 1) % REPERTOIRE.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 lg:translate-x-16 z-20 w-12 h-12 bg-white/5 hover:bg-brand-gold text-white hover:text-black rounded-full flex items-center justify-center border border-white/10 hover:border-brand-gold transition-all duration-300 backdrop-blur-md opacity-0 group-hover:opacity-100 hidden md:flex"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Mobile Navigation Buttons */}
            <div className="flex md:hidden justify-center gap-4 mb-8">
              <button 
                onClick={() => setRepertoireIndex(prev => prev > 0 ? prev - 1 : REPERTOIRE.length - 1)}
                className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center border border-brand-gold/20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setRepertoireIndex(prev => (prev + 1) % REPERTOIRE.length)}
                className="w-12 h-12 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center border border-brand-gold/20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-hidden">
              <motion.div 
                animate={{ x: `-${repertoireIndex * (100 / (REPERTOIRE.length))}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex"
                style={{ width: `${REPERTOIRE.length * (100 / 1)}%`, maxWidth: window.innerWidth >= 1024 ? `${(REPERTOIRE.length * 100) / 3}%` : window.innerWidth >= 768 ? `${(REPERTOIRE.length * 100) / 2}%` : `${REPERTOIRE.length * 100}%` }}
              >
                {REPERTOIRE.map((category, idx) => (
                  <div 
                    key={idx}
                    className="w-full px-4"
                    style={{ flex: `0 0 ${100 / REPERTOIRE.length}%` }}
                  >
                    <motion.div 
                      className="p-8 bg-black border border-white/5 rounded-2xl hover:border-brand-gold/30 transition-colors group/card h-full"
                    >
                      <h3 className="text-xl font-bold mb-6 text-brand-gold flex items-center justify-between">
                        {category.genre}
                        <Music className="w-5 h-5 opacity-30 group-hover/card:opacity-100 transition-opacity" />
                      </h3>
                      <ul className="space-y-4">
                        {category.items.map((song, i) => (
                          <li key={i} className="text-sm text-white/60 flex items-center gap-2">
                            <div className="w-1 h-1 bg-brand-gold rounded-full" />
                            {song}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-12">
              {REPERTOIRE.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setRepertoireIndex(idx)}
                  className={`h-1 rounded-full transition-all duration-300 ${idx === repertoireIndex ? 'w-8 bg-brand-gold' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que dizem os <span className="text-brand-gold italic">Clientes</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto text-sm">Histórias reais de momentos que se tornaram eternos através da música.</p>
          </div>

          <div className="overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
            
            <motion.div 
              animate={{ 
                x: [0, "-50%"] 
              }}
              transition={{ 
                duration: 60,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex gap-8 w-max px-6"
            >
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
                <div 
                  key={idx}
                  className="w-[320px] aspect-square p-8 bg-white/5 rounded-2xl border border-white/10 relative flex-shrink-0 flex flex-col justify-center hover:border-brand-gold/30 transition-all duration-500"
                >
                  <div className="absolute top-4 right-6 text-5xl text-brand-gold/10 font-serif">"</div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-brand-gold text-brand-gold" />)}
                  </div>
                  <p className="text-base mb-4 font-medium leading-relaxed italic text-white/90 line-clamp-5">
                    {t.text}
                  </p>
                  <div>
                    <div className="font-bold text-brand-gold text-sm">{t.name}</div>
                    <div className="text-[10px] text-white/30 uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* contact Section */}
      <section id="contato" className="py-32 px-6 bg-gradient-to-b from-black/20 to-brand-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Vamos tornar seu evento <span className="text-brand-gold italic">inesquecível</span></h2>
              <p className="text-white/60 mb-12 text-lg font-times text-[20px]">
                Preencha o formulário baixo ou entre em contato diretamente pelo WhatsApp para receber um orçamento personalizado.
              </p>
              
              <div className="space-y-8">
                {[
                  { 
                    icon: WhatsAppIcon, 
                    label: "Telefone / WhatsApp", 
                    value: "22 98835-4135", 
                    href: "https://wa.me/5522988354135?text=Ol%C3%A1%20%C3%81lefe%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20por%20favor!" 
                  },
                  { 
                    icon: Mail, 
                    label: "E-mail Profissional", 
                    value: "alefsax7@outlook.com", 
                    href: "mailto:alefsax7@outlook.com" 
                  },
                  { 
                    icon: Instagram, 
                    label: "Instagram", 
                    value: "@alefesilvasax", 
                    href: "https://www.instagram.com/alefesilvasax/" 
                  }
                ].map((item, idx) => (
                  <motion.a 
                    key={idx}
                    href={item.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 group cursor-pointer"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-all duration-500 shadow-lg group-hover:shadow-brand-gold/20"
                    >
                      <item.icon className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1 font-bold">{item.label}</p>
                      <p className="text-xl font-bold group-hover:text-brand-gold transition-colors duration-300">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] font-bold text-white/40 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    placeholder="Como podemos te chamar?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-brand-gold/50 outline-none transition-all placeholder:text-white/20"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] font-bold text-white/40 mb-2">Seu E-mail</label>
                  <input 
                    type="email" 
                    placeholder="email@exemplo.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-brand-gold/50 outline-none transition-all placeholder:text-white/20"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] font-bold text-white/40 mb-2">Sua Mensagem</label>
                  <textarea 
                    rows={4}
                    placeholder="Conte-nos um pouco sobre o seu evento..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-brand-gold/50 outline-none transition-all placeholder:text-white/20 resize-none"
                  />
                </div>
                <motion.button 
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "#ffffff",
                    boxShadow: "0 0 30px rgba(214, 175, 55, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-brand-gold text-black rounded-xl font-bold uppercase tracking-widest transition-all shadow-lg shadow-brand-gold/20"
                >
                  Enviar Solicitação
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5522988354135?text=Ol%C3%A1%20%C3%81lefe%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20por%20favor!"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-10 right-10 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl text-white hover:bg-[#20ba5a] transition-all duration-300"
      >
        <WhatsAppIcon className="w-9 h-9" />
      </motion.a>

      {/* Footer */}
      <footer className="bg-black pt-24 pb-12 px-6 border-t border-brand-gold/10 relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] translate-y-1/2" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            {/* Col 1: Brand */}
            <div className="space-y-6">
              <div>
                <motion.button 
                  onClick={() => scrollToSection('início')}
                  className="text-brand-gold font-serif font-bold text-2xl tracking-tighter mb-1 block cursor-pointer"
                >
                  Álefe Silva
                </motion.button>
                <p className="text-brand-gold/60 text-xs uppercase tracking-[0.3em] font-medium">Saxofonista Profissional</p>
              </div>
              <p className="text-white/50 text-[15px] leading-relaxed font-times">
                Transformando eventos em experiências inesquecíveis através da música e da elegância sonora.
              </p>
              <div className="flex gap-4 pt-4">
                {[
                  { icon: Instagram, href: "https://www.instagram.com/alefesilvasax/", name: "Instagram" },
                  { icon: WhatsAppIcon, href: "https://wa.me/5522988354135?text=Ol%C3%A1%20%C3%81lefe%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20por%20favor!", name: "WhatsApp" },
                  { icon: Youtube, href: "https://www.youtube.com/@alefemarosax7", name: "YouTube" }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, backgroundColor: 'rgba(214, 175, 55, 1)', color: 'black' }}
                    className="w-10 h-10 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold/60 transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <h4 className="text-white font-serif font-bold text-lg mb-8 relative">
                Navegação
                <span className="absolute -bottom-2 left-0 w-8 h-[1px] bg-brand-gold" />
              </h4>
              <ul className="space-y-4">
                {["Início", "Apresentações", "Sobre", "Eventos", "Repertório", "Contato"].map((item) => (
                  <li key={item}>
                    <motion.button 
                      onClick={() => scrollToSection(item.toLowerCase() === 'eventos' ? 'serviços' : item.toLowerCase() === 'apresentações' ? 'apresentações' : item.toLowerCase())}
                      whileHover={{ x: 8, color: "#D6AF37" }}
                      className="text-white/40 hover:text-brand-gold transition-all duration-300 text-[15px] font-times cursor-pointer flex items-center gap-3 group"
                    >
                      <motion.span 
                        initial={{ width: 0 }}
                        whileHover={{ width: 16 }}
                        className="h-[1px] bg-brand-gold" 
                      />
                      {item}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Contact */}
            <div>
              <h4 className="text-white font-serif font-bold text-lg mb-8 relative">
                Contato
                <span className="absolute -bottom-2 left-0 w-8 h-[1px] bg-brand-gold" />
              </h4>
              <ul className="space-y-6">
                <li>
                  <a href="https://wa.me/5522988354135" className="group flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-all">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">WhatsApp</p>
                      <p className="text-white/70 font-bold group-hover:text-brand-gold transition-colors">(22) 98835-4135</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:alefsax7@outlook.com" className="group flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-all">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">E-mail</p>
                      <p className="text-white/70 font-bold group-hover:text-brand-gold transition-colors">alefsax7@outlook.com</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Avenida+Maceió,+Tabuleiro+dos+Martins+1021+-+CEP+57061110" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex items-start gap-4 cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-all">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Localização</p>
                      <p className="text-white/70 font-bold group-hover:text-brand-gold transition-colors text-sm">
                        Maceió - AL
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Premium Experience */}
            <div className="space-y-4">
              <h4 className="text-white font-serif font-bold text-lg mb-8 relative">
                Premium
                <span className="absolute -bottom-2 left-0 w-8 h-[1px] bg-brand-gold" />
              </h4>
              {[
                { title: "Experiência Musical Sofisticada", desc: "Curadoria exclusiva para paladares refinados." },
                { title: "Eventos Premium e Memoráveis", desc: "A trilha sonora perfeita para momentos únicos." }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ 
                    y: -5, 
                    borderColor: 'rgba(214, 175, 55, 0.4)',
                    boxShadow: '0 0 20px rgba(214, 175, 55, 0.1)'
                  }}
                  className="p-4 rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-md group cursor-default transition-all duration-500"
                >
                  <p className="text-brand-gold text-xs font-bold mb-1 transition-all">{card.title}</p>
                  <p className="text-white/30 text-[11px] leading-tight">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Final Footer Row */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/20 text-[11px] tracking-[0.2em] font-medium uppercase font-times">
              © 2026 Álefe Silva. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-brand-gold/30 hidden md:block" />
              <p className="text-brand-gold/40 italic font-serif text-[13px]">
                Música, elegância e experiências inesquecíveis.
              </p>
              <span className="w-8 h-[1px] bg-brand-gold/30 hidden md:block" />
            </div>
            <div className="flex items-center gap-4 text-white/20 hover:text-brand-gold/40 transition-colors cursor-pointer group">
              <span className="text-[10px] tracking-widest uppercase font-medium">Elevate Your Concept</span>
              <ExternalLink className="w-3 h-3 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
