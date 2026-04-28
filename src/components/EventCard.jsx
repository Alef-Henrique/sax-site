import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export default function EventCard({ icon: Icon, title, type }) {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/events#${type}`) // ✅ corrigido (rota correta)
  }

  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }} // 👈 efeito de clique
      style={{ cursor: "pointer" }}
      onClick={handleClick}
    >
      {Icon && (
        <div className="icon">
          <Icon size={50} />
        </div>
      )}

      <h3>{title}</h3>
    </motion.div>
  )
}