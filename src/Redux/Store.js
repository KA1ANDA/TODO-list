import {configureStore } from '@reduxjs/toolkit'
import ListsReducer from './Main-container/ListsReducer';



let store = configureStore({
  reducer:{
    lists:ListsReducer
  },
  devTools:true,
})


export default store