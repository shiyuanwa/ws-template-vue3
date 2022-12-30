<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import wMenuItem from './Menu-item.vue'
import menu from './menu'
import collapseTransition from '@/components/collapse-transition.vue';
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  style: {
    type: String,
    default: () => '',
  },
})
const height = 40

const leftIcon = computed(() => (icon: string | undefined) => icon ? icon : 'i-round')

const getClass = computed(() => (menuItem: menu) => {
  let len = menuItem?.children?.length || 0
  return menuItem.open ? `height: ${len * height}px` : 'height: 0px'
})
const active = ref(false)
</script>

<template>
  <ul class="menu transition-[height]" :style="props.style">
    <li class="menu-item" v-for="(menuItem, i) of props.data" :key="i">
      <div :style="{ height: height + 'px' }">
        <div
          class="flex items-center h-full px-2 mr-6 gap-2 whitespace-nowrap overflow-hidden cursor-pointer select-none text-base hover:bg-gray-200 rounded-r-3xl"
          @click="active = !active">
          <!-- @click="menu.toggleMenu(menuItem)"> -->
          <i :class="leftIcon(menuItem?.icon) === 'i-round' && 'scale-[70%]'">
            <component :is="leftIcon(menuItem?.icon)" />
          </i>
          <p class="block w-full">{{ menuItem.title }}</p>
          <i v-if="menuItem?.icon" class="transition-transform duration-300" :class="{ 'rotate-90': active }">
            <!-- <i v-if="menuItem?.icon" class="transition-transform duration-300" :class="{ 'rotate-90': menuItem.open }"> -->
            <i-right />
          </i>
        </div>
      </div>
      <collapseTransition>
        <div v-show="active">
          <w-menu-item :data="menuItem.children || []" :style="getClass(menuItem)" />
        </div>
      </collapseTransition>
    </li>
  </ul>
</template>

<style scoped lang="less">
.menu {
  @apply overflow-hidden duration-300;

  .menu-item {
    >div {
      @apply pt-1;
    }
  }
}
</style>
