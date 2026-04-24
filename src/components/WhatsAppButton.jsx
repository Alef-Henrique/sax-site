import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  return (
    <a
href="https://wa.me/5522988354135?text=Olá, tudo bem? Gostaria de solicitar um orçamento de um evento por favor!"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}