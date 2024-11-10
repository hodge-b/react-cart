import { VariantProps } from "class-variance-authority";
import { HTMLProps } from "react";
import { promotionsVariance } from "./Promotions.variance";

export interface PromotionsProps
  extends HTMLProps<HTMLDivElement>,
    VariantProps<typeof promotionsVariance> {}
