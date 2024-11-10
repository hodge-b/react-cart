import { VariantProps } from "class-variance-authority";
import { HTMLProps, ReactNode } from "react";
import { sidebarSubMenuVariance } from "./SidebarSubMenu.variance";

export interface SidebarSubMenuProps
  extends HTMLProps<HTMLDivElement>,
    VariantProps<typeof sidebarSubMenuVariance> {
  children: ReactNode;
}
