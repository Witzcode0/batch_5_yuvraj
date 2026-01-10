import React, { createContext, useState } from 'react'

// Step 1 : create your context
const ThemeContext =  createContext();

export function TheamProvider({children}) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme) === "light" ? "dark" : "light");
    };

    return (
        // step 2: provide a context
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext