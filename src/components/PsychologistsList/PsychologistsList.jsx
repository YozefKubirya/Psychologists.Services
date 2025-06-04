export default function PsychologistsList({ psycologists }) {
   return (<>
   <ul>
      {psycologists.map((psy, index)=>{
         return <li key={index}></li>
      })}
   </ul>
   </>)
}