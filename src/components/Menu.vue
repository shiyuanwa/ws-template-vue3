<script setup lang="ts">
import { ref } from 'vue'
import wMenuItem from '../layouts/menu/Menu-item.vue'

let menuTree = ref([
  { title: 'L1', icon: 'i-bill', children: [{ title: 'L1-1' }, { title: 'L1-3' }] },
  { title: 'L2', icon: 'i-bill', children: [{ title: 'L2-1' }] },
])
</script>

<template>
  <div class="fixed h-screen w-60 left-0 right-0 transition-all overflow-auto;">
    <w-menu-item v-for="(menu, index) of menuTree" :key="index" :data="menu" />
  </div>
</template>

<style scoped lang="less"></style>
