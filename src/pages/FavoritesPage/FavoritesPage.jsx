import { selectFavorites } from "../../redux/favorites/selectors.js";
import { useSelector } from "react-redux";
import PsychologistItem from "../../components/PsychologistItem/PsychologistItem";
import { selectPsycologists  } from "../../redux/psycologists/selectors.js";

const FavoritesPage = () => {
const favorites = useSelector(selectFavorites);
const psycologists = useSelector(selectPsycologists );
const favoritesPsychologists = psycologists.filter (psychologist => favorites.includes(psychologist.id));
   return(<>
   <h2>Here is your favorites psychologists</h2>
   <ul>
      {favoritesPsychologists.map((psy)=>{
         return <li key={psy.id}>
            <PsychologistItem name={psy.name} price={psy.price_per_hour} rating={psy.rating} experience={psy.experience} license={psy.license} specialization={psy.specialization} initial_consultation={psy.initial_consultation} about={psy.about} reviews={psy.reviews}/>
            </li>
      })}
   </ul>
   </>)
};
export default FavoritesPage;