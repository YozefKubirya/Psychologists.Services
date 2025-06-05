import { useMemo, useState } from "react"
import PsychologistItem from "../PsychologistItem/PsychologistItem"
import sortPsychologists from "../../utils/helpers";
import SortedDropDown from "../SortedDropDown/SortedDropDown";
export default function PsychologistsList({ psycologists }) {
   const [sortBy, setSortBy] = useState("");
   
  const sortedPsychologists = useMemo(()=>{
   return sortPsychologists(psycologists, sortBy)
   },[sortBy, psycologists])
   return (<>
  <SortedDropDown sortBy={sortBy} setSortBy={setSortBy}/>

   <ul>
      {sortedPsychologists.map((psy, index)=>{
         return <li key={index}><PsychologistItem name={psy.name} price={psy.price_per_hour} rating={psy.rating} experience={psy.experience} license={psy.license} specialization={psy.specialization} initial_consultation={psy.initial_consultation} about={psy.about} reviews={psy.reviews}/></li>
      })}
   </ul>
   </>)
}