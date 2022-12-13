<script setup lang="ts">
import { env } from '@/utils/helper'
import { ref } from 'vue'
import wsMenu from './menu/index.vue'

const title = env.VITE_APP_TITLE
let fold = ref(false)
const menu = [
  { title: '404', active: true },
  {
    title: '错误页面1',
    icon: 'i-github',
    active: true,
    chidren: [
      { title: '404', active: true },
      { title: '403' },
      { title: '405' },
      { title: '406' },
      {
        title: '错误页面2',
        icon: 'i-github',
        chidren: [{ title: '404', active: false }, { title: '403' }, { title: '405' }, { title: '406' }],
      },
    ],
  },
  {
    title: '错误页面2',
    icon: 'i-github',
    chidren: [{ title: '404', active: false }, { title: '403' }, { title: '405' }, { title: '406' }],
  },
  {
    title: '错误页面3',
    icon: 'i-github',
  },
] as menu[]
</script>
<script lang="ts">
export default {
  route: {
    meta: {
      auto: true,
    },
  },
}
</script>
<template>
  <div class="flex h-screen bg-zinc-100">
    <div class="flex-none w-[260px] overflow-x-hidden">
      <!-- title -->
      <div class="flex items-center justify-start min-h-[64px] pl-4">
        <i-github class="text-2xl" />
        <p class="text-xl ml-2" @click="fold = !fold">{{ title }}</p>
      </div>
      <!-- menu -->
      <ws-menu :data="menu" />
    </div>
    <div class="flex-grow min-h-screen min-w-0 flex flex-col">
      <header>header</header>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less"></style>
