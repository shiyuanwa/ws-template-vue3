<script setup lang="ts">
import { computed, nextTick, reactive, ref } from 'vue'
import menuItem from './menu-item.vue'
const props = withDefaults(defineProps<{ data: menu[] }>(), {
  data: () => [],
})
const getMenuItem = computed(() => (c: menuItem[] | undefined) => c || [])
const data = reactive(props.data)
let active = ref(false)
const menuActive = (i: number) => {
  active.value = !active.value
  data.map((item, index) => {
    if (index !== i) {
      data[index].active = false
      return
    }
  })
  data[i].active = !data[i]?.active
}
// const menuItem = computed(() => {
//   console.log(ref('aaa'))
//   return 0
// })
</script>

<template>
  <div v-for="(menu, i) of data" class="transition-[height] duration-300">
    <div class="ws-menu rotate" tabindex="0" :class="{ active: menu.active }" @click="menuActive(i)">
      <i-inbox />
      <p>{{ menu.title }}</p>
      <i-right class="rotate" :class="{ 'rotate-90': menu.active }" />
    </div>
    <ws-transition :active="menu.active">
      <menu-item :data="getMenuItem(menu.chidren)" />
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
