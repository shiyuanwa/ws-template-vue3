interface menuItem {
  title: string
  icon?: string
  active?: boolean
}
interface menu extends menuItem {
  chidren?: menuItem[]
}
