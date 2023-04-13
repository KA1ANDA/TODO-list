import React from "react";
import { useSelector } from "react-redux";
import List from "./List";
import styles from "./Lists.module.scss"


const Lists = (props) => {
  //GET STATE
  const {toDoItems,sort} = useSelector(state => state.lists)

  

  return(
    <div className={styles.listsWrapper}>
      {sort==='active' && toDoItems.map(item => item.isDone === false && <List  key={item.id} id={item.id} text={item.text} isDone={item.isDone}/>)}
      {sort==='all' && toDoItems.map(item => <List  key={item.id} id={item.id} text={item.text} isDone={item.isDone}/>) }
      {sort==='completed' && toDoItems.map(item => item.isDone === true && <List  key={item.id} id={item.id} text={item.text} isDone={item.isDone}/>)}

      {toDoItems.length === 0 && 
        <div className={styles.waitingForTodo}>
          <div> 
            <h2 className={styles.loaderTitle}> Waiting For Your todo !</h2>
          </div>
          <div className={styles.loader}>  </div>
        </div>
      }

    </div>
  )

}


export default Lists;
