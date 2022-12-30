<script  lang='ts' setup>
import { ref } from 'vue'
import { env } from '@/utils/helper'
import Menu from '@/components/menu/menu.vue'
import subMenu from '@/components/menu/sub-menu.vue'

const title = env.VITE_APP_TITLE

</script>

<template>
    <Menu>
        <sub-menu>
           <div class="h-[80vh] bg-black"> 123</div>
        </sub-menu>
    </Menu>
</template>

<style lang='less' scoped>

</style>