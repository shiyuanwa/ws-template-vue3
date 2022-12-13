<script setup lang="ts">
import { computed, reactive } from 'vue'
import menuItem from './menu-item.vue'
const props = withDefaults(defineProps<{ data: menu }>(), {
  data: function () {
    return {} as menu
  },
})
const data = reactive(props.data)
const getMenuItem = computed(() => (c: menu[] | undefined) => c || [])
</script>

<template>
  <div class="transition-[height] duration-300">
    <div class="ws-menu rotate" tabindex="0" :class="{ active: data.active }" @click="data.active = !data.active">
      <i-inbox />
      <p>{{ data.title }}</p>
      <i-right class="rotate" :class="{ 'rotate-90': data.active }" />
    </div>
    <ws-transition :active="data.active">
      <menu-item :data="menuItem" v-for="menuItem of getMenuItem(data.chidren)" />
    </ws-transition>
  </div>
</template>

<style scoped lang="less">
.ws-menu {
  @apply cursor-pointer flex items-center px-4 mr-4 mt-2 h-10 relative overflow-hidden hover:bg-gray-200 rounded-r-3xl;
  &::after {
    content: '';
    @apply absolute inset-0 opacity-0;
    background-image: radial-gradient(circle, #ccc 10%, transparent 10.1%);
    transform: scale(10);
    transition: all 1s;
  }
  &:active::after {
    @apply opacity-50;
    transform: scale(0);
    transition: 0s;
  }
  p {
    @apply whitespace-nowrap overflow-hidden text-ellipsis ml-4 flex-1;
  }
  .rotate {
    @apply transition duration-300;
  }
}
.active {
  @apply bg-gray-200 rounded-r-3xl;
}
</style>
