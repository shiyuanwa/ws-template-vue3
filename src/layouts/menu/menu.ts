import { ref } from 'vue'
import menuData from './data'
import _ from 'lodash'
import deep from '@/utils/deep'

class Menu {
  public menu = ref<menu[]>([])
  public activeMenu = ref([])

  constructor() {
    this.menu.value = this.getMenuData()
  }

  private getMenuData() {
    deep.loop(menuData, (item: menu, i: string) => {
      item.leave = i
      return item.children
    })
    return menuData as menu[]
  }
  toggleMenu(menuItem: menu) {
    this.menu.value = deep.loop(this.menu.value, (item: menu) => {
      let end = item.leave.length
      if (item.leave === menuItem.leave.substring(0, end)) {
        if (item?.children) {
          item.open = true
        } else {
          item.active = true
        }
      } else {
        if (item?.children) {
          item.open = false
        } else {
          item.active = false
        }
      }
      return item.children
    })
  }
}

export default new Menu()
