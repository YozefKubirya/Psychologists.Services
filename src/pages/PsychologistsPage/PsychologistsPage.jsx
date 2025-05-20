import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPsycologists } from "../../redux/psycologists/operations";
import { selectPsycologists } from "../../redux/psycologists/selectors";
import { useSelector } from "react-redux";
const PsychologistsPage = () => {
   const psycologists = useSelector(selectPsycologists);
   const dispatch = useDispatch();
   useEffect(()=>{
      dispatch(fetchPsycologists());
   }, [dispatch])
   useEffect(() => {
      console.log('Fetched psycologists:', psycologists);
    }, [psycologists]);
   
   return(<>
   <h2>Psychologist Page</h2>
   </>)
}
export default PsychologistsPage;