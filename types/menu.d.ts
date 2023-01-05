interface SubMenu {
  name: string
  title: string
  icon?: string
  active?: boolean
  open?: boolean
}
interface MenuList {
  name: string,
  parent?: string,
  handleClick: (click: boolean | string) => void
}
interface MenuInstance {
  addSubItem: (s: any) => void;
  addMenuItem: (m: any) => void;
  handleSubMenuSelect: (parents: string[]) => void;
  handleMenuItemSelect: (name: string) => void;
}