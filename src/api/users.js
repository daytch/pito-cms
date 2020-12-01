import axios from 'configs/axios'

export default {
    login: (credentials) => axios.post("/user/login", credentials),
    merchantLogin: (credentials) => axios.post("/user/login", credentials),
}