import axios from 'axios';
import errorHandler from './errorHandler';

const instance = axios.create({
    baseURL: 'https://pito-api.herokuapp.com/'
})
const UNAUTHORIZED = 401;

instance.interceptors.request.use(function (config) {
    let token = (localStorage.getItem('PITO:token')) ? localStorage.getItem('PITO:token') : localStorage.getItem('PITO:merchant-token');
    config.headers.common["x-access-token"] = token

    return config;
})
instance.interceptors.response.use((response) => response.data, error => {
    const { status } = error.response;
    if (status === UNAUTHORIZED) {
        if (localStorage.getItem('PITO:token')) {
            localStorage.removeItem('PITO:token')
            window.location.href = "/login"
        } else {
            localStorage.removeItem('PITO:merchant-token')
            window.location.href = "/merchant/login"
        }
    }
}, errorHandler)

export {
    default as setAuthorizationHeader
} from './setAuthorizationHeader'
export default instance;