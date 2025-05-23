
import { createAsyncThunk } from "@reduxjs/toolkit";
import { db, ref , get } from "../../firebase/firebase.js";
export const fetchPsycologists = createAsyncThunk(
   "psycologists/fetchAll",
   async (_, thunkAPI) => {
     try {
       
       const dbRef = ref(db, "/"); // або ref(db) — це корінь
      const snapshot = await get(dbRef);
      
      const data = snapshot.val();
      console.log(data);
      const psycologistsArray = Object.values(data);
      console.log("DATA:", psycologistsArray);
      return psycologistsArray;
     } catch (error) {
       return thunkAPI.rejectWithValue(error.message);
     }
   }
 );