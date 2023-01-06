<script lang='ts' >
export default {
    name: 'SubMenu'
}
</script>

<script lang='ts' setup>
import { computed, onMounted, inject } from "vue";
import collapseTransition from "@/components/collapse-transition.vue";
import useMenu from "./useMenu";
const props = defineProps({
    icon: {
        type: String,
        default() {
            return 'i-round';
        }
    },
    name: {
        type: String,
        required: true,
    },
})

let { opened, instance } = useMenu(props)
const MenuInstance = inject<MenuInstance | null>('MenuInstance')

const handleClick = (state: boolean) => {
    opened.value = state
}
const handleClickItem = () => {
    let parent = instance?.parent
    const parents: string[] = []
    while (parent) {
        if (parent.type.name === '') {
            parents.push(parent.props.name as string)

            return false
        } else if (parent.type.name === 'SubMenu') {
            parents.push(parent.props.name as string)
            parent = parent?.parent
        }

        parent = parent?.parent
    }

    if (MenuInstance) MenuInstance.handleSubMenuSelect([props.name, ...parents])
}

const getStyle = computed(() => opened.value ? 'transition-transform duration-300 transform rotate-90' : 'transition-transform duration-300 transform')
const leftIcon = computed(() => props.icon ? props.icon : 'i-round')

onMounted(() => MenuInstance?.addSubItem({ name: props.name, handleClick }))
</script>


<template>
    <li>
        <div class="sub-menu" @click.stop="handleClickItem" :class="{open:opened}">
            <i>
                <component :is="leftIcon" />
            </i>
            <div>
                <slot name="title"></slot>
            </div>
            <span :class="getStyle">
                <i-right />
            </span>
        </div>
        <collapse-transition>
            <ul v-show="opened">
                <slot></slot>
            </ul>
        </collapse-transition>
    </li>
</template>

<style lang='less' scoped>
@import url(./style/menu.less);
</style>