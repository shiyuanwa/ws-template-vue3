interface menu {
  leave: string
  title: string
  name: string
  icon?: string
  active?: boolean
  open?: boolean
  children: menu[]
}

interface MenuInstance {
  addSubItem: (sub: any) => void;
  addMenuItem: (menuItem: any) => void;
  handleMenuItemSelect: (name: string) => void;
}
interface SubMenuInstance {
  // addSubItem: (sub: any) => void;
  // addMenuItem: (menuItem: any) => void;
  handleMenuItemSelect: (name: string) => void;
}