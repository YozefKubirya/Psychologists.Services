import Navigation from "../Navigation/Navigation.jsx"
import UserMenu from "../UserMenu/Usermenu.jsx"
import AuthNav from "../AuthNav/AuthNav.jsx"
import { useSelector } from "react-redux"
import {selectIsLoggedIn} from "..//../redux/auth/selectors.js"

export default function AppBar(){
   const isLoggedIn = useSelector(selectIsLoggedIn);
   return(<>
   <header >
   {isLoggedIn ? <UserMenu/>:<AuthNav/>}
      <Navigation/>
      
   </header>
   </>)
}