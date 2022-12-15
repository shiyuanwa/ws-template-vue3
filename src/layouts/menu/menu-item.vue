<script setup lang="ts">
import { nextTick, ref } from 'vue'
import wMenuItem from './Menu-item.vue'
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})
let active = ref(false)
let activeChildren = ref(false)
let container = ref<HTMLDivElement | null>(null)
let MenuItemHeight = ref('0px')

const toggleMenu = () => {
  active.value = !active.value
  if (!activeChildren.value) {
    activeChildren.value = true
    nextTick(() => {
      MenuItemHeight.value = `${container.value?.scrollHeight || 0}px`
      setTimeout(() => {
        MenuItemHeight.value = 'fit-content'
        container.value && (container.value.style.overflow = 'visible')
      }, 300)
    })
  } else {
    MenuItemHeight.value = `${container.value?.scrollHeight || 0}px`
    container.value && (container.value.style.overflow = 'hidden')
    setTimeout(() => {
      MenuItemHeight.value = `0px`
    }, 0)
    setTimeout(() => {
      activeChildren.value = false
    }, 300)
  }
}
</script>

<template>
  <div class="menu-item" @click="toggleMenu">
    <div class="label">
      <div class="left">
        <i>
          <component v-if="props.data.icon" :is="props.data.icon" />
        </i>
        <span>{{ props.data.title }}</span>
      </div>
      <div class="right expand">
        <i :class="{ 'rotate-90': active }"><i-right /></i>
      </div>
    </div>
  </div>
  <div class="items-container transition-[height] duration-300" :style="{ height: MenuItemHeight }" ref="container">
    <w-menu-item v-if="activeChildren" v-for="(item, index) of props.data.children" :key="index" :data="item" />
  </div>
</template>

<style scoped lang="less">
.menu-item {
  @apply relative w-full;
  .label {
    @apply flex flex-row items-center justify-between select-none whitespace-nowrap box-border h-12 py-5 transition duration-300;
    > div {
      @apply flex flex-row items-center gap-2;
      i {
        @apply text-lg transition duration-300;
        &.expand {
          @apply text-sm;
        }
      }
    }
    &:hover {
      @apply bg-slate-500 cursor-pointer;
    }
  }
}
.items-container {
  @apply w-full overflow-hidden;
}
</style>
