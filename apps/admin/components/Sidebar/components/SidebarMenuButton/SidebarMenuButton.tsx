"use client";

import { forwardRef, MouseEvent, useState } from "react";
import { ChevronDown, ChevronRight, ChevronsUpDown } from "lucide-react";

import { cn } from "@repo/shared-utils";
import type { SidebarMenuButtonProps } from "./SidebarMenuButton.types";
import { sidebarMenuButtonVariance } from "./SidebarMenuButton.variance";

const SidebarMenuButton = forwardRef<HTMLAnchorElement, SidebarMenuButtonProps>(
  (
    {
      className,
      children,
      label,
      variant,
      radius,
      isDropdown = false,
      isSubMenu = false,
      isSubMenuItem = false,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      const targetId = e.currentTarget.id;

      if (targetId === "sub-menu-item") {
        e.stopPropagation();
        return;
      }
      if (targetId === "sub-menu") {
        e.preventDefault();
        if (isSubMenu) setIsOpen(!isOpen);
      }
    };

    return (
      <a
        ref={ref}
        className={cn(
          sidebarMenuButtonVariance({ className, variant, radius }),
          isOpen && isSubMenu && "hover:bg-white"
        )}
        onClick={handleClick}
        {...props}
      >
        <div className="flex justify-between">
          {label}
          {isDropdown && <ChevronsUpDown />}
          {isSubMenu ? isOpen ? <ChevronDown /> : <ChevronRight /> : null}
        </div>
        {children && isOpen && <div>{children}</div>}
      </a>
    );
  }
);

export default SidebarMenuButton;
