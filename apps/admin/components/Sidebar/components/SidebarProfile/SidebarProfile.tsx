import { forwardRef } from "react";
import { SidebarProfileProps } from "./SidebarProfile.types";
import { cn } from "@repo/shared-utils";
import { sidebarProfileVariance } from "./SidebarProfile.variance";
import { CircleUserRound } from "lucide-react";

const SidebarProfile = forwardRef<HTMLDivElement, SidebarProfileProps>(
  ({}, ref) => {
    return (
      <div ref={ref} className={cn(sidebarProfileVariance())}>
        <CircleUserRound />
        <h2>SidebarProfile Component</h2>
      </div>
    );
  }
);

export default SidebarProfile;
