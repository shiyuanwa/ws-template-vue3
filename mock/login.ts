import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: 'success',
        data: {
          token: Random.string(18),
        },
      }
    },
  },
] as MockMethod[]
