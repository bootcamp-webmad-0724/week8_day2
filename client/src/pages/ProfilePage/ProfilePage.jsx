import { useContext } from "react"
import { AuthContext } from './../../contexts/auth.context'

const ProfilePage = () => {

    const { loggedUser } = useContext(AuthContext)

    return (
        <div className="ProfilePage">
            <h1>¡Bienvenido/a {loggedUser.username}</h1>
            <hr />
        </div>
    )
}

export default ProfilePage