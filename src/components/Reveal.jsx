import { motion } from "framer-motion"

export default function Reveal({ children, delay = 0 }){

 return(

  <motion.div

   initial={{
    opacity: 0,
    y: 80,
    filter: "blur(8px)"
   }}

   whileInView={{
    opacity: 1,
    y: 0,
    filter: "blur(0px)"
   }}

   viewport={{ once: true, margin: "-100px" }}

   transition={{
    duration: 1.2,
    delay: delay,
    ease: [0.25, 0.1, 0.25, 1] // ease elegante
   }}

  >

   {children}

  </motion.div>

 )

}