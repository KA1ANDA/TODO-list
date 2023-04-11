import React from "react";
import { useSelector } from "react-redux";
import List from "./List";
import styles from "./Lists.module.scss"


const Lists = (props) => {
  //GET STATE
  const {toDoItems,sort} = useSelector(state => state.lists)


  return(
    <div className={styles.listsWrapper}>
      {/* {toDoItems.map(item => <List  key={item.id} id={item.id} text={item.text} isDone={item.isDone}/>)} */} 
      {sort==='active' && toDoItems.map(item => item.isDone === false && <List  key={item.id} id={item.id} text={item.text} isDone={item.isDone}/>)}
      {sort==='all' && toDoItems.map(item => <List  key={item.id} id={item.id} text={item.text} isDone={item.isDone}/>) }
      {sort==='completed' && toDoItems.map(item => item.isDone === true && <List  key={item.id} id={item.id} text={item.text} isDone={item.isDone}/>)}
    </div>
  )

}


export default Lists;