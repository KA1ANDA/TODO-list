import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss"



const Header = (props) => {
  // STATE
  const [theme,setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme==='light' ? 'dark' :'light')
  }



  useEffect(() => {
    const mainBackgroundColor = `var(--mainBackground-color-${theme})`
    const itemsBackgroundColor = `var(--itemsBackground-color-${theme})`
    const backgroundImage = `var(--background-image-${theme})`
    const fontColor = `var(--font-color-${theme})`

    document.body.style.setProperty('--mainBackground-color', mainBackgroundColor)
    document.body.style.setProperty('--itemsBackground-color', itemsBackgroundColor)
    document.body.style.setProperty('--background-image', backgroundImage)
    document.body.style.setProperty('--font-color', fontColor)
  },[theme])




  return (
    <div className={styles.header}>
      <div className = {styles.title}>
        <h2>T O D O</h2>
      </div>
      <div className = {styles.themeToggleIcon}>
        {theme === 'light' ? <span onClick={toggleTheme}>🌙</span> : <span onClick={toggleTheme}>☀️</span>}
      </div>
    </div>
  )
}

export default Header;