import type { VariantProps } from "class-variance-authority";
import type { HTMLProps, ReactNode } from "react";
import { sidebarContentVariance } from "./SidebarContent.variance";

export interface SidebarContentProps
  extends HTMLProps<HTMLDivElement>,
    VariantProps<typeof sidebarContentVariance> {
  children: ReactNode;
}
