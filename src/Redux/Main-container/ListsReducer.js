import {createSlice} from "@reduxjs/toolkit";



const listsSlice = createSlice({
  name:'lists',
  initialState:{
    toDoItems:[],
    sort:'all',
    value:"",
  },
  reducers:{
    onItemPush (state,action){
      action.payload.text.length && 
        state.toDoItems.push({
          id:action.payload.id,
          text:action.payload.text,
          isDone:false,
        })
        state.value = ''      
    },

    onTuskIsDone (state,action){ 
      
      const { id, done } = action.payload;
      const todo = state.toDoItems.find((todo) => todo.id === id);
      if (todo) {
        todo.isDone = !done;
      }
      
      // const todo = state.toDoItems.find(item => item.id === action.payload.id);

    },


    onRemoveItem (state,action){
      // let removeItemIndex = state.toDoItems.findIndex(item => item.id === action.payload.id)
      // state.toDoItems.splice(removeItemIndex,1)
      state.toDoItems = state.toDoItems.filter(item => item.id !== action.payload.id);
    },


    onSort(state,action){
      state.sort=action.payload
    },


    onClearAllDoneToDos (state,action){
      state.toDoItems = state.toDoItems.filter(item => item.isDone === false)
    },

    onInputChange(state,action){
      state.value=action.payload.text
    },




    onEditMode(state,action){

      const { id, text } = action.payload;
      const todo = state.toDoItems.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }

      // state.toDoItems.filter(item => item.id === action.payload.id ? item.text = action.payload.text : null)
      // state.toDoItems.filter(item => item.id === action.payload.id ? item.editMode = !item.editMode : null )
      
      // if (editiUnda > 0){
      //   alert ("ragaca aris")
      // }
      // if(state.editInputValue.length > 0){
      //   editiUnda.text = action.payload.text
      // }
      
    }

   
  }
})




export const {onItemPush,onTuskIsDone,onRemoveItem,onSort,onClearAllDoneToDos,onInputChange,onEditMode} = listsSlice.actions;



export default listsSlice.reducer;