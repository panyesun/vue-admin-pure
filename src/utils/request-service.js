import request from '@/utils/request'
import qs from 'qs'
const GET = 'get'
const POST = 'POST'

function _constructor(p) {
  return new Promise((resolve, reject) => {
    p.then(res => {
      if (res.code === 200 || res.code === 204) {
        resolve(res.data)
      } else {
        reject(res.err)
      }
    }).catch(err => {
      reject(err)
    })
  })
}

function get(url, params) {
  return _constructor(request({ url, params, method: GET }))
}

// 我也不想把配置参数写成不同的啊，axios不允许啊
function post(url, data) {
  return _constructor(request({ url, data: qs.stringify(data), method: POST }))
}

export { get, post }
