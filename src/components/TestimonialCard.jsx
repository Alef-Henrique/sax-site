export default function TestimonialCard({ name, role, text }){

 return(

  <div className="testimonial-card">

   <div className="stars">
    ★★★★★
   </div>

   <p className="testimonial-text">
    "{text}"
   </p>

   <h4 className="testimonial-name">
    {name}
   </h4>

   <span className="testimonial-role">
    {role}
   </span>

  </div>

 )
}