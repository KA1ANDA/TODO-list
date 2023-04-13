import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onClearAllDoneToDos, onSort } from "../../Redux/Main-container/ListsReducer";
import styles from "./Navbar.module.scss"


const Navbar = (props) => {

  const {toDoItems,sort} = useSelector(state => state.lists)

  const dispatch = useDispatch();
  const sortToDos = (category) => dispatch(onSort(category))
  const clearAllDoneToDos = () => dispatch(onClearAllDoneToDos())

  let countNotDoneItems = toDoItems.filter(item => item.isDone === false)

  return(
    <div className={styles.navbar}>
      <div>
        {countNotDoneItems.length > 0 ? <h5>{countNotDoneItems.length} : todos left</h5> : <h5>You Have no Task todo !</h5>}
      </div>
      <div className={styles.categories}>
        <div className={sort === 'all' ? styles.currentCategory  : styles.all}>
          <h5 onClick={()=>sortToDos('all')}>All</h5>
        </div>
        <div className={sort === 'active' ? styles.currentCategory  : styles.active}>
          <h5 onClick={()=>sortToDos('active')}>Active</h5>
        </div>
        <div className={sort === 'completed' ? styles.currentCategory  : styles.completed}>
          <h5 onClick={()=>sortToDos('completed')} >Completed</h5>
        </div>
      </div>
      <div className={styles.clearChecked}>
        <h5 onClick={clearAllDoneToDos}>Clear Completed</h5>
      </div>
    </div>
  )
}

export default Navbar;