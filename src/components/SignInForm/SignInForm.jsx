import { Formik, Form, Field } from "formik";
import { loginUser } from "../../redux/auth/operations.js";

import { useDispatch } from "react-redux";
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
   <Form>
      <Field type='email' name="email"/>
      <Field type='password' name="password"/>
   <button type="submit">Submit</button>
   <button type="button" onClick={closeModal}>X</button>
   </Form>
</Formik>

   
   </>)
}