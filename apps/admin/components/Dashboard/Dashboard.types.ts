import { VariantProps } from "class-variance-authority";
import { HTMLProps } from "react";
import { dashboardVariance } from "./Dashboard.variance";

export interface DashboardProps
  extends HTMLProps<HTMLDivElement>,
    VariantProps<typeof dashboardVariance> {}
