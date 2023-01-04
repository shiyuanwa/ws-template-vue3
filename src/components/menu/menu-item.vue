<script  lang='ts' setup>
import { inject, ref, onMounted } from "vue";
const props = defineProps({
    name: {
        type: String,
        required: true,
    }
})
const active = ref(false)
const SubMenuInstance = inject<SubMenuInstance | null>('SubMenuInstance', null)
const MenuInstance = inject<MenuInstance | null>('MenuInstance', null)

const handleClickItem = () => {
    if (SubMenuInstance) {
        SubMenuInstance.handleMenuItemSelect(props.name)
        return
    }

    MenuInstance && MenuInstance.handleMenuItemSelect(props.name)
}
const handleUpdataActive = (name: string) => {
    active.value = props.name === name
    // if (active.value && SubMenuInstance) SubMenuInstance.handleUpdataActive(name)
}
onMounted(() => MenuInstance?.addMenuItem({ name: props.name }))
</script>

<template>
    <li @click.stop="handleClickItem" class="menu-item ">
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
</style>