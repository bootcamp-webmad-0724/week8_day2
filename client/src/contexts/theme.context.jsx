import { createContext, useState } from "react"

const ThemeContext = createContext()

function ThemeProviderWrapper(props) {

    const [theme, setTheme] = useState('dark')
    const [invertedTheme, setInvertedTheme] = useState('light')

    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
        invertedTheme === 'dark' ? setInvertedTheme('light') : setInvertedTheme('dark')
    }

    return (
        <ThemeContext.Provider value={{ theme, invertedTheme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProviderWrapper }