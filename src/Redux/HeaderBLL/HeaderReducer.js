import { createSlice } from "@reduxjs/toolkit";


const headerSlice = createSlice({
  name:'header',
  initialState:{
    lightMode:true
  },
  reducers:{
    switchLightMode(state,action){
      state.lightMode = !state.lightMode
    }
  }
})

export const {switchLightMode} = headerSlice.actions;
export default headerSlice.reducer;