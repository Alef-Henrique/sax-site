import { useNavigate } from "react-router-dom"

export default function RepertorioCard({ icon: Icon, title, description, type }){

 const navigate = useNavigate()

 const handleClick = () => {
  navigate(`/repertorio#${type}`)
 }

 return(

  <div className="repertorio-card" onClick={handleClick}>

   <Icon className="rep-icon"/>

   <h3>{title}</h3>

   <p>{description}</p>

  </div>

 )
}