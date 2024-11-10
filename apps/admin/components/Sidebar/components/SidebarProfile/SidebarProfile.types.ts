import { VariantProps } from "class-variance-authority";
import { HTMLProps } from "react";
import { sidebarProfileVariance } from "./SidebarProfile.variance";

export interface SidebarProfileProps
  extends HTMLProps<HTMLDivElement>,
    VariantProps<typeof sidebarProfileVariance> {}
