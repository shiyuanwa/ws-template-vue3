import { get } from '@/plugins/axios'
interface login {
  token: string
  name: string
}

export async function login() {
  return get.request<login>({
    url: 'login',
  })
}
