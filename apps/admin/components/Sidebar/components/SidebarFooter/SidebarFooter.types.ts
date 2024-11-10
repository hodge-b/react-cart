import type { VariantProps } from "class-variance-authority";
import type { HTMLProps, ReactNode } from "react";
import { sidebarFooterVariance } from "./SidebarFooter.variance";

export interface SidebarFooterProps
  extends HTMLProps<HTMLDivElement>,
    VariantProps<typeof sidebarFooterVariance> {
  children: ReactNode;
}
