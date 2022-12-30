<script  lang='ts' setup>
import { getCurrentInstance, inject, ref } from "vue";
import collapseTransition from "@/components/collapse-transition.vue";

let opened = ref(false)

const instance = getCurrentInstance();

const MenuInstance = inject('MenuInstance', null)
const handleClick = () => {
    opened.value = !opened.value;
    console.log('MenuInstance', MenuInstance);

    // MenuInstance.updateOpenKeys(this.name);
}
// this.globalConfig = instance.appContext.config.globalProperties.$VIEWUI;
</script>

<template>
    <li>
        <div ref="reference" @click="handleClick">
            <!-- <slot name="title"></slot>
            <Icon :type="arrowType" :custom="customArrowType" :size="arrowSize"
                :class="[prefixCls + '-submenu-title-icon']" /> -->
            图标
        </div>
        <collapse-transition>
            <ul v-show="opened">
                <slot></slot>
            </ul>
        </collapse-transition>
    </li>
</template>

<style lang='less' scoped>

</style>