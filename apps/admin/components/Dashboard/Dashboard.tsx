import { cn } from "@repo/shared-utils";
import type { DashboardProps } from "./Dashboard.types";
import { dashboardVariance } from "./Dashboard.variance";

const Dashboard = ({}: DashboardProps) => {
  return (
    <div className={cn(dashboardVariance())}>
      <h2>Dashboard Component</h2>
    </div>
  );
};

export default Dashboard;
