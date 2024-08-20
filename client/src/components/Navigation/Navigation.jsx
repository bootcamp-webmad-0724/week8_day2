import { useContext } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../contexts/theme.context'
import { AuthContext } from '../../contexts/auth.context'

const Navigation = () => {

    const { theme, toggleTheme } = useContext(ThemeContext)
    const { loggedUser, logoutUser } = useContext(AuthContext)

    return (
        <Navbar bg={theme} data-bs-theme={theme} className='mb-5' expand="lg">

            <Container>

                <Navbar.Brand href="#home">CoastersApp_</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className='nav-link'>Inicio</Link>
                        <Link to={'/galeria'} className='nav-link'>Galería</Link>

                        {
                            loggedUser ?
                                <>
                                    <Link to={'/perfil'} className='nav-link'>Perfil</Link>
                                    <span className='nav-link' onClick={logoutUser}>Cerrar sesión</span>

                                </>
                                :
                                <>
                                    <Link to={'/registro'} className='nav-link'>Registro</Link>
                                    <Link to={'/inicio-sesion'} className='nav-link'>Inicio de sesión</Link>
                                </>
                        }

                    </Nav>

                    <div className="justify-content-end">
                        <Navbar.Text onClick={toggleTheme}>

                            {
                                loggedUser && `¡Bienvend@, ${loggedUser.username}! - `
                            }

                            Tema {theme === 'dark' ? 'oscuro' : 'claro'}
                        </Navbar.Text>
                    </div>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    )
}

export default Navigation