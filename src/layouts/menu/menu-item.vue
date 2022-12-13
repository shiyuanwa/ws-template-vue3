<script setup lang="ts">
import { reactive } from 'vue'
import wsMenu from './menu.vue'

const props = withDefaults(defineProps<{ data: menu[] }>(), {
  data: () => [],
})
const data = reactive(props.data)

const menuItemActive = (i: number) => {
  data.map((item, index) => {
    if (index !== i) {
      item.active = false
      return
    }
  })
  data[i].active = !data[i]?.active
}
</script>

<template>
  <div>
    <div v-for="(menu, i) of data">
      <ws-menu v-if="menu?.icon" :data="menu.chidren" />
      <div class="ws-menu-item" v-else :class="{ active: menu.active }" @click="menuItemActive(i)">
        <i-round class="scale-[.7]" />
        <p>{{ menu.title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.ws-menu-item {
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
}
.active {
  @apply bg-gradient-to-r from-blue-300 to-blue-700 rounded-r-3xl text-white;
}
</style>
