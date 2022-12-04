import Axios from './axios'

const get = new Axios({
  baseURL: '/api',
  timeout: 100000,
  headers: {},
})

export { get }
