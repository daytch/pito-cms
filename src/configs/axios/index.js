import axios from 'axios';
import errorHandler from './errorHandler';

const instance = axios.create({
    baseURL: 'http://pitoapi-env.eba-r7biicer.ap-southeast-1.elasticbeanstalk.com/'
})

instance.interceptors.response.use((response) => response.data, errorHandler)

export {
    default as setAuthorizationHeader
} from './setAuthorizationHeader'
export default instance;