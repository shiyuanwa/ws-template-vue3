<script  lang='ts' setup>
import { ref, provide } from 'vue';
const props = defineProps({
    activeName: {
        type: [String, Number]
    },
    openNames: {
        type: Array,
        default() {
            return [];
        }
    },
})

const menu = ref(null)

const MenuInstance = () => {
    console.log('触发父组件-MenuInstance');
}

provide('MenuInstance', MenuInstance)

</script>

<template>
    <ul ref="menu">
        <slot></slot>
    </ul>
</template>

<style lang='less' scoped>

</style>