import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   favorites: [],
}

const favoritesSlice = createSlice({
   name: 'favorites',
   initialState,
   reducers:{
      toggleFavorites: (state, action)=>{
         const psycologistsId = action.payload;
         if(state.favorites.includes(psycologistsId)){
            state.favorites = state.favorites.filter(id=> id !== psycologistsId)
         }else{
            state.favorites.push(psycologistsId)
         }
      }
   }
})

export const { toggleFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;