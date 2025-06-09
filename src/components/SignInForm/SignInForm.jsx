import { Formik, Form, Field } from "formik";
import { loginUser } from "../../redux/auth/operations.js";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import css from './SignInForm.module.css'
export const SignInForm = ({closeModal}) => {
   const dispatch = useDispatch();
   const handleSubmit = (values,action)=>{
         console.log(values);
         dispatch(loginUser(values))
         action.resetForm();
         closeModal();
      }
   return(<>
  
   <Formik initialValues={
   {
   email:'',
   password:''
   }   
} onSubmit={handleSubmit}>
   <Form className={css.form}>
      <h2 className={css.title}>Log In</h2>
      <p className={css.text}>Welcome back! Please enter your credentials <br />to access your account and continue your search for a psychologist.</p>
      <Field type='email' name="email" className={css.formInput} placeholder='Email'/>
      <Field type='password' name="password" className={css.formInput} placeholder='Password'/>
   <button type="submit" className={css.logInButton}>Log In</button>
   <button type="button" onClick={closeModal} className={css.closeButton}><IoMdClose className={css.icon}/></button>
   </Form>
</Formik>

   
   </>)
}