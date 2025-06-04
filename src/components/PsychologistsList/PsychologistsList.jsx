import PsychologistItem from "../PsychologistItem/PsychologistItem"
export default function PsychologistsList({ psycologists }) {
   return (<>
   <ul>
      {psycologists.map((psy, index)=>{
         return <li key={index}><PsychologistItem name={psy.name} price={psy.price_per_hour} rating={psy.rating} experience={psy.experience} license={psy.license} specialization={psy.specialization} initial_consultation={psy.initial_consultation} about={psy.about} reviews={psy.reviews}/></li>
      })}
   </ul>
   </>)
}