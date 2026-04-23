import { useEffect } from "react"

export default function Repertoire(){

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

   <div id="mpb">
    <h2>MPB</h2>
   </div>

   <div id="internacional">
    <h2>Internacional</h2>
   </div>

   <div id="romanticas">
    <h2>Românticas</h2>
   </div>

   <div id="gospel">
    <h2>Gospel</h2>
   </div>

   <div id="jazz">
    <h2>Jazz</h2>
   </div>

   <div id="pop">
    <h2>Pop</h2>
   </div>

  </section>
 )
}