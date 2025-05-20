import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   psycologists: [],
   loading: false,
   error: null,
};

const psycologistsSlice = createSlice({
name: "psycologists",
initialState,

})