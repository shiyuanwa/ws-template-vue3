<script  lang='ts' setup>
import { env } from '@/utils/helper'
import Menu from '@/components/menu/Menu.vue'
import Submenu from '@/components/menu/Sub-Menu.vue'
import MenuItem from '@/components/menu/Menu-Item.vue';
const title = env.VITE_APP_TITLE

</script>

<template>
    <div class="w-[260px]">
        <Menu active-name="1-1" :open-names="['1']">
            <Submenu name="1">
                <template #title>
                    Navigation One
                </template>
                <MenuItem name="1-1">Option 1</MenuItem>
                <MenuItem name="1-2">Option 2</MenuItem>
                <MenuItem name="1-3">Option 3</MenuItem>
                <MenuItem name="1-4">Option 4</MenuItem>
            </Submenu>
            <Submenu name="2">
                <template #title>
                    Navigation Two
                </template>
                <MenuItem name="2-1">Option 5</MenuItem>
                <MenuItem name="2-2">Option 6</MenuItem>
                <Submenu name="3">
                    <template #title>Submenu</template>
                    <MenuItem name="3-1">Option 7</MenuItem>
                    <MenuItem name="3-2">Option 8</MenuItem>
                </Submenu>
            </Submenu>
            <Submenu name="4">
                <template #title>
                    Navigation Three
                </template>
                <MenuItem name="4-1">Option 9</MenuItem>
                <MenuItem name="4-2">Option 10</MenuItem>
                <MenuItem name="4-3">Option 11</MenuItem>
                <MenuItem name="4-4">Option 12</MenuItem>
            </Submenu>
        </Menu>
    </div>
</template>

<style lang='less' scoped>

</style>