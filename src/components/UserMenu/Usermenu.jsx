import { useSelector } from "react-redux"
import { selectUserName } from "../../redux/auth/selectors";
import { LogOut } from "../LogOut/LogOut";



export default function UserMenu (){
   const userName=useSelector(selectUserName)

  
   
   return <>
   <div >
   <h2 >Welcome {userName}</h2>
   <LogOut/>
   </div>
   
   </>
}