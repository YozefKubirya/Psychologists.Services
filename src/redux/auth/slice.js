import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser , logOutUser} from "./operations";

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
      })
   }
})
export default authSlice.reducer;