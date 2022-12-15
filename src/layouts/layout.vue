<script setup lang="ts">
import { env } from '@/utils/helper'
import { ref } from 'vue'
import wsMenu from './menu/Menu.vue'

const title = env.VITE_APP_TITLE
let fold = ref(false)
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
      <!-- <div class="flex items-center justify-start min-h-[64px] pl-4">
        <i-github class="text-2xl" />
        <p class="text-xl ml-2" @click="fold = !fold">{{ title }}</p>
      </div> -->
      <!-- menu -->
      <ws-menu />
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
