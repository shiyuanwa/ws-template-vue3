<script lang='ts' >
export default {
    name: 'SubMenu'
}
</script>

<script lang='ts' setup>
import { computed, onMounted } from "vue";
import collapseTransition from "@/components/collapse-transition.vue";
import useMenu from "./useMenu";
const props = defineProps({
    icon: {
        type: String,
        // required: true,
        default() {
            return 'i-round';
        }
    },
    name: {
        required: true,
        type: String,
    },
})

let { opened, MenuInstance, instance } = useMenu(props)

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
        <div class="sub-menu" @click.stop="handleClickItem">
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