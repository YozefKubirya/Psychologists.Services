import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPsycologists } from "../../redux/psycologists/operations";
import { selectPsycologists } from "../../redux/psycologists/selectors";
import { useSelector } from "react-redux";
import PsychologistsList from "../../components/PsychologistsList/PsychologistsList";
const PsychologistsPage = () => {
   const dispatch = useDispatch();
   const psycologists = useSelector(selectPsycologists);
  useEffect(()=>{
   dispatch(fetchPsycologists());
  }, [dispatch]);

   
   return(<>
   <h2>Psychologist Page</h2>
  <PsychologistsList psycologists={psycologists} />
   </>)
}
export default PsychologistsPage;