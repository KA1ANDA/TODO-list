import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {switchLightMode} from "../../Redux/HeaderBLL/HeaderReducer";



const Header = (props) => {

  const lightMode = useSelector (state => state.header.lightMode)
  const dispatch = useDispatch ()

  const toggleLightMode = () => dispatch(switchLightMode())

  return (
    <div>
      <div>
        <h2>T O D O</h2>
      </div>
      <div>
        {lightMode ? <span onClick={toggleLightMode}>🌙</span> : <span onClick={toggleLightMode}>☀️</span>}
      </div>
    </div>
  )
}

export default Header;