import { forwardRef } from "react";

import { cn } from "@repo/shared-utils";
import { SidebarContentProps } from "./SidebarContent.types";
import { sidebarContentVariance } from "./SidebarContent.variance";

const SidebarContent = forwardRef<HTMLDivElement, SidebarContentProps>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className={cn(sidebarContentVariance())}>
        {children}
      </div>
    );
  }
);

export default SidebarContent;
