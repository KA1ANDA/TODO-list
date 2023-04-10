import {configureStore } from '@reduxjs/toolkit'
import HeaderReducer from "./HeaderBLL/HeaderReducer";
import ListsReducer from './Main-container/ListsReducer';



let store = configureStore({
  reducer:{
    header:HeaderReducer,
    lists:ListsReducer
  },
  devTools:true,
})


export default store