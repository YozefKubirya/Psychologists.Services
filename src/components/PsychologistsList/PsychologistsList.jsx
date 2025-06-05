import { useMemo, useState } from "react"
import PsychologistItem from "../PsychologistItem/PsychologistItem"
export default function PsychologistsList({ psycologists }) {
   const [sortBy, setSortBy] = useState("");
   const handleSortChange = (e) => {
      setSortBy(e.target.value)
console.log(e.target.value);
   }
  const sortedPsychologists = useMemo(()=>{
   const sortedArray = [...psycologists];
      if(sortBy === 'A-Z'){
         sortedArray.sort((a,b)=>a.name.localeCompare(b.name))
      }else if(sortBy === 'Z-A'){
         sortedArray.sort((a,b)=>b.name.localeCompare(a.name))
      }else if(sortBy === 'PRICE_LOW'){
         sortedArray.sort((a,b)=>b.price_per_hour - a.price_per_hour)
      }else if(sortBy === 'PRICE_HIGH'){
         sortedArray.sort((a,b)=>a.price_per_hour - b.price_per_hour)
      }else if(sortBy === 'POPULAR_HIGH'){
         sortedArray.sort((a,b)=>a.rating - b.rating)
      }else if(sortBy === "POPULAR_LOW"){
         sortedArray.sort((a,b)=>b.rating - a.rating)
      }
      return sortedArray;
   },[sortBy, psycologists])
   return (<>
   <select name="" id="" value={sortBy} onChange={handleSortChange}>
  <option value="A-Z">A to Z</option>
  <option value="Z-A">Z to A</option>
  <option value="PRICE_LOW">Less than 10$</option>
  <option value="PRICE_HIGH">Greater than 10$</option>
  <option value="POPULAR_HIGH">Popular</option>
  <option value="POPULAR_LOW">Not popular</option>
  <option value="">Show all</option>
   </select>
   <ul>
      {sortedPsychologists.map((psy, index)=>{
         return <li key={index}><PsychologistItem name={psy.name} price={psy.price_per_hour} rating={psy.rating} experience={psy.experience} license={psy.license} specialization={psy.specialization} initial_consultation={psy.initial_consultation} about={psy.about} reviews={psy.reviews}/></li>
      })}
   </ul>
   </>)
}