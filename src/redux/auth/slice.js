import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser , logOutUser, refreshUser} from "./operations";

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
      }).addCase(loginUser.fulfilled,(state,action)=>{
         state.user = action.payload;
         state.isLoggedIn = true;
      }).addCase(logOutUser.fulfilled, ()=>{
         return initialState;
      }).addCase(refreshUser.pending,(state)=>{
         state.isRefreshing=true;})
         .addCase(refreshUser.fulfilled,(state, action)=>{
         state.user = action.payload;
         state.isRefreshing = false;
         state.isLoggedIn = true;
      })
   }
})
export default authSlice.reducer;