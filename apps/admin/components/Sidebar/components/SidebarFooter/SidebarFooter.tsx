import { forwardRef } from "react";
import { SidebarFooterProps } from "./SidebarFooter.types";
import { cn } from "@repo/shared-utils";
import { sidebarFooterVariance } from "./SidebarFooter.variance";

const SidebarFooter = forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className={cn(sidebarFooterVariance())}>
        {children}
      </div>
    );
  }
);

export default SidebarFooter;
