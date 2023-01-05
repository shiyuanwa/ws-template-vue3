<script  lang='ts' setup>
import { ref, provide, watchEffect, nextTick, watch, onMounted, reactive } from 'vue';
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
    accordion: {
        type: Boolean,
        default: true
    }
})

const submenuList = reactive([])
const menuItemList = reactive([])

const currentActiveName = ref(props.activeName)
let currentOpenNames = reactive([...props.openNames])

const addSubItem = (sub: any) => {
    submenuList.push(sub)
}

const addMenuItem = (menuItem: any) => {
    menuItemList.push(menuItem)
}
const handleSubMenuSelect = (name: string) => {
    currentOpenNames.push(name)
}
const handleMenuItemSelect = (name: string, parentName: string[]) => {
    currentOpenNames = parentName
    currentActiveName.value = name
}

const MenuInstance = {
    addSubItem,
    addMenuItem,
    handleSubMenuSelect,
    handleMenuItemSelect,
} as MenuInstance

const updateOpened = () => {
    const items = submenuList.map(item => item);
    items.forEach(item => {
        let opened = currentOpenNames.includes(item.name)
        item.handleClick(opened);
    });
}

const updateActived = (name) => menuItemList.forEach(item => item.handleUpdataActive(name));

watch(currentActiveName, (c, o) => {
    props.openNames && updateOpened()
    updateActived(c)
}, { deep: true })

provide('MenuInstance', MenuInstance)

onMounted(async () => {
    updateOpened()
    await nextTick()
    updateActived(currentActiveName.value)
})

</script>

<template>
    <ul ref="menu">
        <slot></slot>
    </ul>
</template>

<style lang='less' scoped>

</style>