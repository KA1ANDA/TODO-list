import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onEditMode, onRemoveItem, onTuskIsDone } from "../../Redux/Main-container/ListsReducer";
import styles from "./List.module.scss"




const List = (props) => {
  //LOCAL STATE
  const [editing, setEditing] = useState(false);
  const [editInputValue, setEditInputValue] = useState("Empty todo");

  //GET STATE FROM STORE
  const {toDoItems} = useSelector(state => state.lists)

  //DISPATCH ACTIONS
  const dispatch = useDispatch();
  const tuskIsDone = () => dispatch(onTuskIsDone({id:props.id, done:props.isDone}))
  const removeItem = () => dispatch(onRemoveItem({id:props.id}))
  const turnEditMode = () => dispatch(onEditMode({text:editInputValue, id:props.id}))


  const handleStartEditing = () => {
    setEditing(!editing);
    if(editing){
      dispatch(turnEditMode({ text:editInputValue, id:props.id }));
    }
  };


  const onEditModeInputChange = (event) => {
    setEditInputValue(event.target.value)
  };


  return(
    <div className={styles.list}>
      <div className={styles.checkToggle}>
        {props.isDone ? <span onClick={tuskIsDone} >✔️</span> : <span onClick={tuskIsDone}>❌</span>}
      </div>
      <div className={styles.todoText}>
        {editing ? <input placeholder={props.text} value={editInputValue} onChange={onEditModeInputChange} /> : <h3>{props.text}</h3>
 } 
      </div>
      <div className={styles.editMode}>
        <span onClick={handleStartEditing}>✏️</span>
      </div>
      <div className={styles.todoRemove}>
        <span onClick={removeItem}>🚫</span>
      </div>
    </div>
  )

}

export default List; 

