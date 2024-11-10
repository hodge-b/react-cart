import { VariantProps } from "class-variance-authority";
import type { HTMLProps, ReactNode } from "react";
import { sidebarMenuHeaderVariance } from "./SidebarMenuHeader.variance";

export interface SidebarMenuHeaderProps
  extends HTMLProps<HTMLDivElement>,
    VariantProps<typeof sidebarMenuHeaderVariance> {
  children: ReactNode;
}
