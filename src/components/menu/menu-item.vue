<script  lang='ts' setup>
import { inject } from "vue";

const SubMenuInstance = inject<Function>('SubMenuInstance')
const handleClickItem = () => {
    SubMenuInstance && SubMenuInstance()
}
</script>

<template>
    <li @click.stop="handleClickItem">
        <slot></slot>
    </li>
</template>

<style lang='less' scoped>

</style>