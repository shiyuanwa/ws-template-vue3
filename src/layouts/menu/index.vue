<script setup lang="ts">
import wsMenu from './menu.vue'

const props = withDefaults(defineProps<{ data: menu[] }>(), {
  data: () => [],
})
</script>

<template>
  <ws-menu :data="props.data" />
</template>

<style scoped lang="less"></style>
