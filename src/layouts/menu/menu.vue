<script setup lang="ts">
import { ref } from 'vue'
import wMenuItem from './Menu-item.vue'
import menu from './menu'

let menuTree = menu.menu
let state = ref(true)
</script>

<template>
  <div class="h-screen transition-[width]" :class="[state ? 'w-60' : 'w-14']">
    <w-menu-item :data="menuTree" />
  </div>
</template>

<style scoped lang="less"></style>
