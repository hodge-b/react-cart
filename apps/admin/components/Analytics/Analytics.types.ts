import { VariantProps } from "class-variance-authority";
import { HTMLProps } from "react";
import { analyticsVariance } from "./Analytics.variance";

export interface AnalyticsProps
  extends HTMLProps<HTMLDivElement>,
    VariantProps<typeof analyticsVariance> {}
