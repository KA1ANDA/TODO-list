import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {switchLightMode} from "../../Redux/HeaderBLL/HeaderReducer";
import styles from "./Header.module.scss"



const Header = (props) => {

  const lightMode = useSelector (state => state.header.lightMode)
  const dispatch = useDispatch ()

  const toggleLightMode = () => dispatch(switchLightMode())

  return (
    <div className={styles.header}>
      <div className = {styles.title}>
        <h2>T O D O</h2>
      </div>
      <div className = {styles.themeToggleIcon}>
        {lightMode ? <span onClick={toggleLightMode}>🌙</span> : <span onClick={toggleLightMode}>☀️</span>}
      </div>
    </div>
  )
}

export default Header;