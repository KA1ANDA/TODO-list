import React from "react";
import { onInputChange } from "../../Redux/Main-container/ListsReducer";
import { useDispatch, useSelector } from "react-redux";
import { onItemPush } from "../../Redux/Main-container/ListsReducer";
import shortid from "shortid";


const Input = (props) => {
  // GET STATE
  const valueFromState = useSelector(state => state.lists.value)

  // DISPATCHE ACTIONS
  const dispatch = useDispatch();
  const oninputValue = (event) => dispatch(onInputChange({text:event.target.value}))
  const itemPush = () => dispatch(onItemPush({
    text:valueFromState,
    id:shortid.generate(),
  }))

  return (
    <div>
      <div>
        <input placeholder="Create a new todo.." value={valueFromState} onChange={oninputValue}></input>
      </div>  
      <div>
        <button onClick={itemPush}>add todo</button>
      </div>
    </div>
  )
}

export default Input;