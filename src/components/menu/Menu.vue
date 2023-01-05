<script lang='ts' >
export default {
    name: 'Menu'
}
</script>
<script  lang='ts' setup>
import { ref, reactive, provide, nextTick, watch, onMounted } from 'vue';
import useMenu from './useMenu';

const props = defineProps({
    activeName: {
        type: String,
        required: true,
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

let { submenuList, menuItemList } = useMenu(props)
const currentActiveName = ref(props.activeName)
let currentOpenNames = ref([...props.openNames])

provide<MenuInstance>('MenuInstance', {
    addSubItem: (s) => {
        submenuList.push(s)
    },
    addMenuItem: (m) => {
        menuItemList.push(m)
    },
    handleSubMenuSelect: (parentName) => {
        console.log(parentName);
        currentOpenNames.value = [...parentName]
    },
    handleMenuItemSelect: (name) => {
        currentActiveName.value = name
    },
})

const updateOpened = () => {
    submenuList.map(item => item).forEach(item => {
        let opened = currentOpenNames.value.includes(item.name)
        item.handleClick(opened);
    });
}

const updateActived = (menuItemName: string) => menuItemList.forEach(item => item.handleClick(menuItemName));

watch(currentActiveName, (c, o) => {
    // props.openNames && updateOpened()
    updateActived(c)
    updateOpened()
}, { deep: true })

watch(currentOpenNames, (c, o) => {
    console.log(c, 'console.log(parentName);');
    // props.openNames && updateOpened()
    updateOpened()
}, { deep: true })

onMounted(async () => {
    updateOpened()
    await nextTick()
    updateActived(currentActiveName.value)
})
</script>

<template>
    <ul>
        <slot></slot>
    </ul>
</template>

<style lang='less' scoped>

</style>