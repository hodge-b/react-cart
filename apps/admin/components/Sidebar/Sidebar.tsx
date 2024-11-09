import { cn } from "@repo/shared-utils";
import { sidebarVariance } from "./Sidebar.variance";

const Sidebar = () => {
  return (
    <div className={cn(sidebarVariance())}>
      <h2>Sidebar Component</h2>
    </div>
  );
};

export default Sidebar;
