import { get, post, put, del } from '../utils/Request'

export function listApi(page = 1) {
    return get('/api/test/verify?type=delete&age=18')
}

export function createApi(data) {
    return post('/api/test/verify?type=delete&age=18',data)
}

export function modifyOneApi(id,data) {
    return put('/api/test/verify?type=delete&age=18/${id}',data)
}

export function delOneApi(id,data) {
    return del('/api/test/verify?type=delete&age=18/${id}',data)
}
