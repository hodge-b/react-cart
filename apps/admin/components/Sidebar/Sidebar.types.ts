import type { SidebarMenu } from "@/lib/types";

export interface SidebarProps {
  menu: SidebarMenu[];
  isCollapsed?: boolean;
}
