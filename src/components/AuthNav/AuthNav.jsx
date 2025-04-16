import { NavLink } from "react-router-dom"
import { useState } from "react";
import { SignInForm } from "../SignInForm/SignInForm";
import { SignUpForm } from "../SignUpForm/SignUpForm";
import ModalWraper from "../ModalWraper/ModalWraper";
export default function AuthNav (){
   const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState(null); 
  const openModal = (form) => {
    setFormType(form); 
    setIsModalOpen(true); 
   };

  
  const closeModal = () => {
    setIsModalOpen(false);
    setFormType(null); 
  };
   return<>
   <div>
      <div>
        <button onClick={() => openModal("SignUp")}>Registration</button>
        <button onClick={() => openModal("SignIn")}>Log In</button>
      </div>

      
      <ModalWraper isOpen={isModalOpen} handleClose={closeModal}>
        {formType === "SignUp" && <SignUpForm />}
        {formType === "SignIn" && <SignInForm />}
      </ModalWraper>
   </div>
   </>
}