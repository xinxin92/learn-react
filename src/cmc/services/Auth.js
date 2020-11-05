import { get, post } from '../utils/Request'

/**
 * 用户登录
 * @param {*} data
 * username
 * password 
 */
export function loginApi(data) {
    return post('/api/admin/login', data)
}

/**
 * 用户登出
 */
export function logoutApi() {
    return get('/api/admin/logout')
}