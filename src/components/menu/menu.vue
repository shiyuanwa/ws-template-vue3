<script  lang='ts' setup>
import { ref, onMounted, provide } from 'vue';


const menu = ref(null)

provide('MenuInstance', menu.value)


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

</script>

<template>
    <ul ref="menu">
        <slot></slot>
    </ul>
</template>

<style lang='less' scoped>

</style>