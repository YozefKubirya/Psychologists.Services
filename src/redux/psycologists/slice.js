import { createSlice } from "@reduxjs/toolkit";
import { fetchPsycologists } from "./operations";
const initialState = {
   psycologists: [],
   loading: false,
   error: null,
};

const psycologistsSlice = createSlice({
name: "psycologists",
initialState,
extraReducers: (builder) => {
builder.addCase(fetchPsycologists.pending, (state)=>{
   state.loading = true;
   state.error = null;
})
.addCase(fetchPsycologists.fulfilled, (state, action)=>{
   state.loading = false;
   state.psycologists = action.payload;

})
.addCase(fetchPsycologists.rejected, (state, action)=>{
   state.loading = false;
   state.error = action.payload;
})
}})

export default psycologistsSlice.reducer;