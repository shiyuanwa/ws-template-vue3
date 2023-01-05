<script  lang='ts' setup>
import { getCurrentInstance, inject, ref, onMounted } from "vue";
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
})
const active = ref(false)
const SubMenuInstance = inject<SubMenuInstance | null>('SubMenuInstance', null)
const MenuInstance = inject<MenuInstance | null>('MenuInstance', null)
const instance = getCurrentInstance()
const handleClickItem = () => {
    let parent = instance?.parent
    const parents = []
    while (parent) {
        if (parent?.type.__name === 'menu') {
            parents.push(parent.props.name as string)
            return false
        } else if (parent?.type.__name === 'sub-menu') {
            parents.push(parent.props.name as string)
            parent = parent?.parent
        }
        parent = parent?.parent
    }

    if (SubMenuInstance) {
        SubMenuInstance.handleMenuItemSelect(props.name, parents)
        return
    }

    MenuInstance && MenuInstance.handleMenuItemSelect(props.name, parents)
}

const handleUpdataActive = (name: string) => {
    active.value = props.name === name
}

onMounted(() => MenuInstance?.addMenuItem({ name: props.name, handleUpdataActive }))

</script>

<template>
    <li @click.stop="handleClickItem" class="menu-item" :class="{ active: active }">
        <i class="scale-[70%]">
            <i-round />
        </i>
        <slot></slot>
        <p>{{ active }}</p>
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