import axios from 'axios'

class AuthServices {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/api`
        })

        this.axiosApp.interceptors.request.use(config => {

            const storedToken = localStorage.getItem('userToken');

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }

            return config
        })
    }

    signupUser(userData) {
        return this.axiosApp.post('/auth/signup', userData)
    }

    loginUser(userData) {
        return this.axiosApp.post('/auth/login', userData)
    }

    verifyToken() {
        return this.axiosApp.get('/auth/verify')
    }

}

export default new AuthServices()