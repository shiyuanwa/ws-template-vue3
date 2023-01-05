<script  lang='ts' setup>
import { getCurrentInstance, provide, inject, ref, computed, onMounted } from "vue";
import collapseTransition from "@/components/collapse-transition.vue";
const props = defineProps({
    icon: {
        type: String,
        // required: true,
        default() {
            return 'i-round';
        }
    },
    name: {
        type: String,
        required: true,
    },
})
let opened = ref(false)
const MenuInstance = inject<MenuInstance | null>('MenuInstance')

let instance = getCurrentInstance()

const handleMenuItemSelect = (name: string, parentName: string[]) => {
    MenuInstance?.handleMenuItemSelect(name, parentName)
}

const SubMenuInstance = {
    handleMenuItemSelect,
} as SubMenuInstance

provide('SubMenuInstance', SubMenuInstance)

const handleClick = (state: boolean) => {
    opened.value = state
}

const getStyle = computed(() => opened.value ? 'transition-transform duration-300 transform rotate-90' : 'transition-transform duration-300 transform')
const leftIcon = computed(() => props.icon ? props.icon : 'i-round')

onMounted(() => MenuInstance?.addSubItem({ name: props.name, handleClick }))
</script>

<template>
    <li>
        <div class="sub-menu" ref="reference" @click.stop="handleClick(!opened)">
            <i :class="leftIcon === 'i-round' && 'scale-[70%]'">
                <component :is="leftIcon" />
            </i>
            <slot name="title"></slot>
            <div :class="getStyle">
                <i-right />
            </div>
        </div>
        <collapse-transition>
            <ul v-show="opened">
                <slot></slot>
            </ul>
        </collapse-transition>
    </li>
</template>

<style lang='less' scoped>
.sub-menu {
    @apply flex items-center;

    i {
        @apply p-1;
    }

}
</style>