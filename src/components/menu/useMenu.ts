
import { ref, reactive, inject, getCurrentInstance } from "vue"

export default function useMenu(props: { [key: string]: any }) {
    const active = ref(false)
    const opened = ref(false)
    const instance = getCurrentInstance()
    const submenuList = reactive<MenuList[]>([])
    const menuItemList = reactive<MenuList[]>([])

    return {
        active,
        opened,
        instance,
        submenuList,
        menuItemList,
    }
}