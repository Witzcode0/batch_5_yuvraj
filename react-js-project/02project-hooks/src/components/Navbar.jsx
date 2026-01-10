import React, { useContext } from 'react'
import ThemeContext from './Hook03useContext';


function Navbar() {
    // Step - 3 : use context here 
    const {theme, toggleTheme} = useContext(ThemeContext);
    console.log(theme, toggleTheme);
  return (
    <>
        <nav className={`navbar ${theme}`}>
            <h2>Theme Switcher</h2>
            <button onClick={toggleTheme}>
                {theme === "light" ? "Switch to Dark" : "Switch to Light"} 
            </button>
        </nav>

    </>
  )
}

export default Navbar