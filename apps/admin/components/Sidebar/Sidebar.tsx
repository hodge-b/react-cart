"use client";

// TODO: This component still needs work.

import { forwardRef, useEffect, useState, type ReactNode } from "react";

import { cn } from "@repo/shared-utils";
import { sidebarVariance } from "./Sidebar.variance";
import SidebarMenuButton from "./components/SidebarMenuButton";
import SidebarMenuHeader from "./components/SidebarHeader";
import SidebarContent from "./components/SidebarContent";
import SidebarFooter from "./components/SidebarFooter";
import SidebarProfile from "./components/SidebarProfile";
import SidebarSubMenu from "./components/SidebarSubMenu";
import type { SidebarProps } from "./Sidebar.types";

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(({ menu }, ref) => {
  const [sidebarMenuContent, setSidebarMenuContent] =
    useState<ReactNode | null>(null);

  useEffect(() => {
    const menuContent = menu.map((item) => {
      const subMenuContent = item.subMenu.map((subItem) => (
        <SidebarMenuButton
          key={subItem.id}
          label={subItem.label}
          href={subItem.link ?? undefined}
          id="sub-menu-item"
          isSubMenuItem
        />
      ));

      return (
        <SidebarMenuButton
          key={item.id}
          label={item.label}
          href={item.link ?? undefined}
          id="sub-menu"
          isSubMenu
        >
          <SidebarSubMenu>{subMenuContent}</SidebarSubMenu>
        </SidebarMenuButton>
      );
    });
    setSidebarMenuContent(menuContent);
  }, [menu]);

  return (
    <div ref={ref} className={cn(sidebarVariance())}>
      {/* Sidebar header. */}
      <SidebarMenuHeader>
        <SidebarMenuButton label="Fake Store" isDropdown>
          <SidebarSubMenu>
            <></>
          </SidebarSubMenu>
        </SidebarMenuButton>
      </SidebarMenuHeader>

      {/* Sidebar content. */}
      {sidebarMenuContent && (
        <SidebarContent>{sidebarMenuContent}</SidebarContent>
      )}

      {/* Sidebar footer. */}
      <SidebarFooter>
        <SidebarProfile />
      </SidebarFooter>
    </div>
  );
});

export default Sidebar;
