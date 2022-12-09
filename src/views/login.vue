<script setup lang='ts'>
import { reactive } from 'vue';
import { login as onlogin } from '@/api/login';
import loacl from '@/utils/local';
import { env } from '@/utils/helper';
import { useRouter } from 'vue-router'
const form = reactive({
  user: '',
  password: ''
})
const router = useRouter()
const login = async (values: any) => {
  let { data: { token } } = await onlogin(values)
  loacl.set('token',
    {
      time: env.VITE_EXPIRE_TIME,
      token
    }
  )
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="bg-white dark:bg-gray-900">
    <div class="flex justify-center h-screen">
      <div class="hidden bg-cover lg:block lg:w-2/3 img"></div>
      <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
        <div class="flex-1">
          <div class="text-center">
            <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">{{ env.VITE_APP_TITLE }}</h2>
            <p class="mt-3 text-gray-500 dark:text-gray-300">登录访问您的帐户</p>
          </div>
          <div class="mt-8">
            <div>
              <label for="text" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">账户</label>
              <ws-input v-model="form.user" placeholder="请输入账户" />
            </div>
            <div class="mt-6">
              <div class="flex justify-between mb-2">
                <label for="password" class="text-sm text-gray-600 dark:text-gray-200">密码</label>
                <a href="#"
                  class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">忘记密码？</a>
              </div>
              <ws-input v-model="form.password" type="password" placeholder="请输入密码" />
            </div>
            <div class="mt-6">
              <button @click="login(form)"
                class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                登陆
              </button>
            </div>
            <p class="mt-6 text-sm text-center text-gray-400">还没有账户? <a href="#"
                class="text-blue-500 focus:outline-none focus:underline hover:underline">点击注册</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped >
.img {
  background-image: url('../assets/img/bg-login.png');
}
</style>