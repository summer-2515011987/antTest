import qs from 'qs'
import { post } from './axiosTool'
export default {
    LoginSys(params) {
        return post('/hs/api/login', qs.stringify(params))
    }
}