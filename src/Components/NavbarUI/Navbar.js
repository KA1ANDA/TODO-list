import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onClearAllDoneToDos, onSort } from "../../Redux/Main-container/ListsReducer";


const Navbar = (props) => {

  const {toDoItems} = useSelector(state => state.lists)

  const dispatch = useDispatch();
  const sort = (category) => dispatch(onSort(category))
  const clearAllDoneToDos = () => dispatch(onClearAllDoneToDos())

  let countNotDoneItems = toDoItems.filter(item => item.isDone === false)

  return(
    <div>
      <div>
        {countNotDoneItems.length > 0 ? <h5>{countNotDoneItems.length} : todos left</h5> : <h5>You Have no Task todo !</h5>}
      </div>
      <div>
        <h5 onClick={()=>sort('all')}>All</h5>
      </div>
      <div>
        <h5 onClick={()=>sort('active')}>Active</h5>
      </div>
      <div>
        <h5 onClick={()=>sort('completed')} >Completed</h5>
      </div>
      <div>
        <h5 onClick={clearAllDoneToDos}>Clear Completed</h5>
      </div>
    </div>
  )
}

export default Navbar;