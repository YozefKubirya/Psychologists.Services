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
      return await signOut(auth);   
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }

})


export const refreshUser = createAsyncThunk('auth/refreshUser', async(_, thunkAPI) => {
  try {
    const user = auth.currentUser;
    if (user) {
      return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
      };
    } else {
      return thunkAPI.rejectWithValue("No authenticated user");
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});