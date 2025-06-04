import { Formik, Form, Field } from "formik";
import { registerUser } from "../../redux/auth/operations.js";
import { useDispatch } from "react-redux";


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
   <Form>
      <Field type='text' name='name'/>
      <Field type='email' name="email"/>
      <Field type='password' name="password"/>

   <button type="submit">Submit</button>
   <button type="button" onClick={closeModal}>X</button>
   </Form>
</Formik>


   </>)
}