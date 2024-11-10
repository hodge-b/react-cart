import type { HTMLProps, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { sidebarMenuButtonVariance } from "./SidebarMenuButton.variance";

export interface SidebarMenuButtonProps
  extends HTMLProps<HTMLAnchorElement>,
    VariantProps<typeof sidebarMenuButtonVariance> {
  children?: ReactNode;
  label: string;
  isDropdown?: boolean;
  isSubMenu?: boolean;
  isSubMenuItem?: boolean;
}
