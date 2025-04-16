import Navigation from "../Navigation/Navigation"
import UserMenu from "../UserMenu/Usermenu"
import AuthNav from "../AuthNav/AuthNav"
import { useSelector } from "react-redux"
import { selectIsLoggedIn} from "../../redux/auth/selectors"

export default function AppBar(){
   const isLoggedIn=useSelector(selectIsLoggedIn)
   return<>
   <header >
      <Navigation/>
      {isLoggedIn ?  <UserMenu/>: <AuthNav/>}
     
     
   </header>
   </>
}