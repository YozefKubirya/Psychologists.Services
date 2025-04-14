import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase.js';


export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);


      await updateProfile(userCredential.user, {
        displayName: name,
      });


      return {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        name: userCredential.user.displayName,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password},thunkAPI)=>{
   try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      return {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        name: userCredential.user.displayName,
      };
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

export const logOutUser = createAsyncThunk('auth/logOutUser', async(_,thunkAPI)=>{
   try {    
      return signOut();   
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }

})
