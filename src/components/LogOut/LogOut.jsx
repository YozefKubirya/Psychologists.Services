import { useDispatch } from "react-redux";
import { logOutUser } from "../../redux/auth/operations";
export const LogOut = () => {
   const dispatch  = useDispatch();
   const handleButton = () => {
   dispatch(logOutUser())   

   }
   return(<>
<button type="button" onClick={handleButton}>Log Out</button>
   </>)
}