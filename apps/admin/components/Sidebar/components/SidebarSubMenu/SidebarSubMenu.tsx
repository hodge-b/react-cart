import { forwardRef } from "react";
import { SidebarSubMenuProps } from "./SidebarSubMenu.types";
import { cn } from "@repo/shared-utils";
import { sidebarSubMenuVariance } from "./SidebarSubMenu.variance";

const SidebarSubMenu = forwardRef<HTMLDivElement, SidebarSubMenuProps>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className={cn(sidebarSubMenuVariance())}>
        {children}
      </div>
    );
  }
);

export default SidebarSubMenu;
