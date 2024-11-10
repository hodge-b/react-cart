import { cn } from "@repo/shared-utils";
import type { AnalyticsProps } from "./Analytics.types";
import { analyticsVariance } from "./Analytics.variance";

const Analytics = ({}: AnalyticsProps) => {
  return (
    <main className={cn(analyticsVariance())}>
      <h2>Analytics Overview Page Component</h2>
    </main>
  );
};

export default Analytics;
