
import { createAsyncThunk } from "@reduxjs/toolkit";
import { db, ref , get } from "../../firebase/firebase.js";
// export const fetchPsycologists = createAsyncThunk(
//    "psycologists/fetchAll",
//    async (_, thunkAPI) => {
//      try {
       
//        const dbRef = ref(db, "/"); // або ref(db) — це корінь
//       const snapshot = await get(dbRef);
      
//       const data = snapshot.val();
//       console.log(data);
//       const psycologistsArray = Object.values(data);
//       console.log("DATA:", psycologistsArray);
//       return psycologistsArray;
//      } catch (error) {
//        return thunkAPI.rejectWithValue(error.message);
//      }
//    }
//  );
export const fetchPsycologists = createAsyncThunk(
  "psycologists/fetchAll",
  async (_, thunkAPI) => {
    try {
      const dbRef = ref(db, "/");
      const snapshot = await get(dbRef);
      const data = snapshot.val();

      if (!data) {
        return [];
      }

      let psycologistsArray;

      if (Array.isArray(data)) {
        // Генеруємо унікальні id для кожного елемента масиву
        psycologistsArray = data.map((item) => ({
          id: crypto.randomUUID(),
          ...item,
        }));
      } else {
        // Якщо дані у вигляді об'єкта
        psycologistsArray = Object.entries(data).map(([id, item]) => ({
          id,
          ...item,
        }));
      }

      console.log("DATA:", psycologistsArray);
      return psycologistsArray;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
