import React from "react";
import { onInputChange } from "../../Redux/Main-container/ListsReducer";
import { useDispatch, useSelector } from "react-redux";
import { onItemPush } from "../../Redux/Main-container/ListsReducer";
import shortid from "shortid";
import styles from "./input.module.scss"


const Input = (props) => {
  // GET STATE
  const valueFromState = useSelector(state => state.lists.value)

  // DISPATCHE ACTIONS
  const dispatch = useDispatch();
  const oninputValue = (event) => dispatch(onInputChange({text:event.target.value}))
  const handleKeyUp = (event) => {
    if(event.keyCode === 13){
      dispatch(onItemPush({
        text:valueFromState,
        id:shortid.generate(),
      }))
    }

  }
  
  return (
    <div className={styles.todoInput}>
        <input placeholder="Create a new todo.." value={valueFromState} onChange={oninputValue} onKeyUp={handleKeyUp}></input>
    </div>
  )
}

export default Input;

