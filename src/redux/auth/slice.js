import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, logOutUser, refreshUser } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
    password: null
  },
  isLoggedIn: false,
  isRefreshing: false, 
  isLoading: false 
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      
      .addCase(registerUser.pending, (state) => {
        state.isLoggedIn = false; 
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
      })

      
      .addCase(loginUser.pending, (state) => {
        state.isLoggedIn = false;
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false; 
      })

      
      .addCase(logOutUser.fulfilled, () => {
        return initialState; 
      })

      
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true; 
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false; 
      })
  }
})

export default authSlice.reducer;