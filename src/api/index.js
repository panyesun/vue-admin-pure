import { get, post } from '@/utils/request-service'
export const get_list = (params) => get('/list', params)
export const req_list = (params) => post('/list', params)
