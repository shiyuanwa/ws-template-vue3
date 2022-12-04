import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/login',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'success',
        data: {
          token: 'vben',
          name: '前段脚手架',
        },
      }
    },
  },
] as MockMethod[]
