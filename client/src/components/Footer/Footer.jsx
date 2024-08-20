import { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/theme.context'

const Footer = () => {

    const { theme, invertedTheme } = useContext(ThemeContext)

    return (
        <footer
            data-bs-theme={theme}
            className={`bg-${theme} text-${invertedTheme}`}
        >
            Todos los derechos reservados | Tema activo: {theme}
        </footer>
    )
}

export default Footer