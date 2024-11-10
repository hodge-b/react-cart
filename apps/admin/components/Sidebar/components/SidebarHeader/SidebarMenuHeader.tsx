import { forwardRef } from "react";
import { SidebarMenuHeaderProps } from "./SidebarMenuHeader.types";
import { cn } from "@repo/shared-utils";
import { sidebarMenuHeaderVariance } from "./SidebarMenuHeader.variance";

const SidebarMenuHeader = forwardRef<HTMLDivElement, SidebarMenuHeaderProps>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className={cn(sidebarMenuHeaderVariance())}>
        {children}
      </div>
    );
  }
);

export default SidebarMenuHeader;
