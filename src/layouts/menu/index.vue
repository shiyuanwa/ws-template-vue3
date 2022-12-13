<script setup lang="ts">
import wsMenu from './menu.vue'
import wsMenuItem from './menu-item.vue'

const props = withDefaults(defineProps<{ data: menu[] }>(), {
  data: () => [],
})
const getComponentName = (menu: menu) => (menu.icon ? wsMenu : wsMenuItem)
</script>

<template>
  <div v-for="(menu, i) of props.data" :key="i">
    <component :is="getComponentName(menu)" :data="menu" />
  </div>
</template>

<style scoped lang="less"></style>
