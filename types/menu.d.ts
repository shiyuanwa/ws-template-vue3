interface menu {
  leave: string
  title: string
  name: string
  icon?: string
  active?: boolean
  open?: boolean
  children: menu[]
}
