
import { createAsyncThunk } from "@reduxjs/toolkit";
import { db, ref , get , child } from "../../firebase/firebase";
export const fetchPsycologists = createAsyncThunk('psycologists/fetchPsycologists', async (_,thunkAPI) => {
   try {
const dbref = ref(db, 'psycologists');
const snapshot = await get(dbref);
if (!snapshot.exists()){
return thunkAPI.rejectWithValue('No data available');

}
const psycologists = [];

snapshot.forEach((psychologistsSnapshot) => {
   psycologists.push({
     ...psychologistsSnapshot.val(),
     id: psychologistsSnapshot.key,
   });
 });
 return psycologists;

     

   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
})
