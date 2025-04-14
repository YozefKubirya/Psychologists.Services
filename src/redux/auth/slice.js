import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./operations";
const initialState={
   user: {
      name: null,
      email: null,
      password: null
    },
    isLoggedIn: false,
    isRefreshing: false,
}
const authSlice=createSlice({
   name:'auth',
   initialState,
   extraReducers:(builder)=>{
      builder.addCase(registerUser.fulfilled,(state,action)=>{
         state.user=action.payload;
         state.isLoggedIn=true;
      })
   }
})
export default authSlice.reducer;