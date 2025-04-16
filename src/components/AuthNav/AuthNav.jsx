import { NavLink } from "react-router-dom"
import { useState } from "react";
import { SignInForm } from "../SignInForm/SignInForm";
import { SignUpForm } from "../SignUpForm/SignUpForm";
import ModalWraper from "../ModalWraper/ModalWraper";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
export default function AuthNav (){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState(null); 
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const openModal = (form) => {
    setFormType(form); 
    setIsModalOpen(true); 
   };

  
  const closeModal = () => {
    setIsModalOpen(false);
    setFormType(null); 
  };

  if (isLoggedIn) {
   closeModal();
  };
   return<>
   <div>
      <div>
        
        <button onClick={() => openModal("SignUp")}>Registration</button>
        <button onClick={() => openModal("SignIn")}>Log In</button>
      </div>

      
      <ModalWraper isOpen={isModalOpen} handleClose={closeModal}>
        {formType === "SignUp" && <SignUpForm closeModal = {closeModal}/>}
        {formType === "SignIn" && <SignInForm closeModal = {closeModal}/>}
      </ModalWraper>
   </div>
   </>
}