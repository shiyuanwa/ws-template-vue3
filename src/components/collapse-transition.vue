<script lang="ts">
import { defineComponent } from 'vue'
import type { RendererElement } from 'vue'

const hasClass = (el: RendererElement, cls: string) => {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (el.classList) {
        return el.classList.contains(cls);
    } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
}

const trim = (string: string) => {
    return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

const addClass = (el: RendererElement, cls: string) => {
    if (!el) return;
    let curClass = el.className;
    const classes = (cls || '').split(' ');

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.add(clsName);
        } else {
            if (!hasClass(el, clsName)) {
                curClass += ' ' + clsName;
            }
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
}

const removeClass = (el: RendererElement, cls: string) => {
    if (!el || !cls) return;
    const classes = cls.split(' ');
    let curClass = ' ' + el.className + ' ';

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.remove(clsName);
        } else {
            if (hasClass(el, clsName)) {
                curClass = curClass.replace(' ' + clsName + ' ', ' ');
            }
        }
    }
    if (!el.classList) {
        el.className = trim(curClass);
    }
}

export default defineComponent({
    name: 'CollapseTransition',
    setup() {
        const on = {
            beforeEnter(el: RendererElement) {
                addClass(el, 'collapse-transition');
                if (!el.dataset) el.dataset = {};
                el.dataset.oldPaddingTop = el.style.paddingTop;
                el.dataset.oldPaddingBottom = el.style.paddingBottom;
                el.style.height = '0';
                el.style.paddingTop = 0;
                el.style.paddingBottom = 0;
            },

            enter(el: RendererElement) {
                el.dataset.oldOverflow = el.style.overflow;
                if (el.scrollHeight !== 0) {
                    el.style.height = el.scrollHeight + 'px';
                    el.style.paddingTop = el.dataset.oldPaddingTop;
                    el.style.paddingBottom = el.dataset.oldPaddingBottom;
                } else {
                    el.style.height = '';
                    el.style.paddingTop = el.dataset.oldPaddingTop;
                    el.style.paddingBottom = el.dataset.oldPaddingBottom;
                }

                el.style.overflow = 'hidden';
            },

            afterEnter(el: RendererElement) {
                removeClass(el, 'collapse-transition');
                el.style.height = '';
                el.style.overflow = el.dataset.oldOverflow;
            },

            beforeLeave(el: RendererElement) {
                if (!el.dataset) el.dataset = {};
                el.dataset.oldPaddingTop = el.style.paddingTop;
                el.dataset.oldPaddingBottom = el.style.paddingBottom;
                el.dataset.oldOverflow = el.style.overflow;

                el.style.height = el.scrollHeight + 'px';
                el.style.overflow = 'hidden';
            },

            leave(el: RendererElement) {
                if (el.scrollHeight !== 0) {
                    addClass(el, 'collapse-transition');
                    el.style.height = 0;
                    el.style.paddingTop = 0;
                    el.style.paddingBottom = 0;
                }
            },

            afterLeave(el: RendererElement) {
                removeClass(el, 'collapse-transition');
                el.style.height = '';
                el.style.overflow = el.dataset.oldOverflow;
                el.style.paddingTop = el.dataset.oldPaddingTop;
                el.style.paddingBottom = el.dataset.oldPaddingBottom;
            }
        }
        return { on }
    }
})
</script>

<template>
    <transition appear v-on="on">
        <slot />
    </transition>
</template>

<style scoped lang="less">
.collapse-transition {
    transition: .3s height ease-in-out, .3s padding-top ease-in-out, .3s padding-bottom ease-in-out;
}
</style>
