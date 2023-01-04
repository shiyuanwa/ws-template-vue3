<script  lang='ts' setup>
import { ref, provide, watchEffect, onMounted, reactive } from 'vue';
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
const submenuList = reactive([])
const menuItemList = reactive([])

const currentActiveName = ref(props.activeName)
const currentOpenNames = reactive([...props.openNames])

const handleMenuItemSelect = (name: string) => {
    currentActiveName.value = name
}
const addSubItem = (sub: any) => {
    submenuList.push(sub)
}

const addMenuItem = (menuItem: any) => {
    menuItemList.push(menuItem)
}

const MenuInstance = {
    addSubItem,
    addMenuItem,
    handleMenuItemSelect,
} as MenuInstance

const updateOpened = () => {
    const items = submenuList.map(item => item);
    items.forEach(item => {
        let opened = currentOpenNames.includes(item.name)
        item.handleClick(opened);
    });
}

watchEffect(() => console.log(currentActiveName.value))

provide('MenuInstance', MenuInstance)

onMounted(() => {
    console.log('submenuList:', submenuList, menuItemList, currentOpenNames);
    updateOpened()
})
</script>

<template>
    <ul ref="menu">
        <slot></slot>
    </ul>
</template>

<style lang='less' scoped>

</style>