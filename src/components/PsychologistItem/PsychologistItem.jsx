import { useState } from "react";
export default function PsychologistItem ({name,price,rating,experience,license,specialization,initial_consultation,about,reviews}) {
   const [showReviews, setShowReviews] = useState(false);
   const toggleReviews = ()=>{
      setShowReviews(!showReviews)
   }

   return (<>
   <p>name:{name}</p>
   <p>rating:{rating}</p>
   <p>price:{price}</p>
   <p>experience:{experience}</p>
   <p>license:{license}</p>
   <p>specialization:{specialization}</p>
   <p>initial_consultation:{initial_consultation}</p>
   <p>about:{about}</p>
<button onClick={toggleReviews}>
    {showReviews ? 'Hide reviews' : 'Show reviews'}
  </button>

   {showReviews && <div>
      <p>Reviews:</p>
   <ul>reviews:{reviews.map((review,index)=>{
      return <li key={index}>
            <p>reviewer:{review.reviewer}</p>
            <p>rating:{review.rating}</p>
            <p>comment:{review.comment}</p>
         </li>
      
   })}</ul>
   <button>Make appointment</button>
      </div>}
   
   </>)
}