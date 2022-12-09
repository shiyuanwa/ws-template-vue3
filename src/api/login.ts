import { get } from '@/plugins/axios'
interface login {
  token: string
}
export interface islogin {
  user: string
  password: string
}
export async function login(data: islogin) {
  return get.request<login>({
    url: 'login',
    method: 'post',
    data,
  })
}
