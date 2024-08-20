import axios from 'axios'

class CoastersServices {

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

    getAllCoasters() {
        return this.axiosApp.get(`/coasters`)
    }

    getOneCoaster(coasterId) {
        return this.axiosApp.get(`/coasters/${coasterId}`)
    }

    saveCoaster(coasterData) {
        return this.axiosApp.post(`/coasters`, coasterData)
    }
}

export default new CoastersServices()