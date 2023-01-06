<script  lang='ts' setup>
import { onMounted, inject } from "vue";
import useMenu from "./useMenu";
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
})

const { active, instance } = useMenu(props)
const MenuInstance = inject<MenuInstance | null>('MenuInstance')

const handleUpdataActive = (name: string) => {
    active.value = props.name === name
}

const handleClickItem = () => {
    let parent = instance?.parent
    const parents: string[] = []
    while (parent) {
        if (parent.type.name === 'Menu') {
            parents.push(parent.props.name as string)
            return false
        } else if (parent.type.name === 'SubMenu') {
            parents.push(parent.props.name as string)
            parent = parent?.parent
        }

        parent = parent?.parent
    }

    if (MenuInstance) {
        MenuInstance.handleMenuItemSelect(props.name)
        MenuInstance.handleSubMenuSelect(parents)
    }
}

onMounted(() => MenuInstance?.addMenuItem({ name: props.name, handleClick: handleUpdataActive }))
</script>

<template>
    <li @click.stop="handleClickItem" class="menu-item" :class="{ active: active }">
        <i class="scale-[70%]">
            <i-round />
        </i>
        <slot></slot>
    </li>
</template>

<style lang='less' scoped>
.menu-item {

    @apply flex items-center cursor-pointer select-none;

    i {
        @apply p-1;
    }
}

.active {
    @apply bg-slate-500;
}
</style>