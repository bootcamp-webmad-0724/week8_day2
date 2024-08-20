import { Routes, Route } from 'react-router-dom'
import CoastersGalleryPage from '../pages/CoastersGalleryPage/CoastersGalleryPage'
import CoasterDetailsPage from '../pages/CoasterDetailsPage/CoasterDetailsPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import PrivateRoute from './PrivateRoutes'

const AppRoutes = () => {

    return (
        <div className="AppRoutes">
            <Routes>
                <Route path={'/'} element={<h1>INICIO</h1>} />
                <Route path={'/galeria'} element={<CoastersGalleryPage />} />
                <Route path={'/detalles/:id'} element={<CoasterDetailsPage />} />
                <Route path={'/registro'} element={<SignupPage />} />
                <Route path={'/inicio-sesion'} element={<LoginPage />} />

                <Route element={<PrivateRoute />} >
                    <Route path={'/perfil'} element={<ProfilePage />} />
                </Route>


            </Routes>
        </div>
    )
}

export default AppRoutes