export interface MenuItem {
  id: string | number;
  label: string;
  link: string | null;
}

export interface SidebarMenu extends MenuItem {
  subMenu: MenuItem[];
}
