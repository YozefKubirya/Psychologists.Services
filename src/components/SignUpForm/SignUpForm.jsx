import { Formik, Form, Field } from "formik";
import { registerUser } from "../../redux/auth/operations.js";
import { useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";
import css from './SignUpForm.module.css';

export const SignUpForm = ({closeModal}) => {
   const dispatch = useDispatch();
   
   
   
   const handleSubmit = (values,action)=>{
      console.log(values);
      dispatch(registerUser(values))
      action.resetForm();
      closeModal();
   }
   return(<>

   <Formik initialValues={
   {
   name: '',
   email:'',
   password:''
   }   
} onSubmit={handleSubmit}>
   <Form className={css.form}>
      <h2 className={css.title}>Registration</h2>
      <p className={css.text}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us <br /> with the following information.</p>
      <Field type='text' name='name' className={css.formInput} placeholder='Name'/>
      <Field type='email' name="email" className={css.formInput} placeholder='Email'/>
      <Field type='password' name="password" className={css.formInput} placeholder='Password'/>

   <button type="submit" className={css.signUpButton}>Submit</button>
   <button type="button" onClick={closeModal} className={css.closeButton}><IoMdClose className={css.icon}/></button>
   </Form>
</Formik>


   </>)
}