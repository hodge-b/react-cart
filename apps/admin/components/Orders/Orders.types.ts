import { VariantProps } from "class-variance-authority";
import { HTMLProps } from "react";
import { ordersVariance } from "./Orders.variance";

export interface OrdersProps
  extends HTMLProps<HTMLDivElement>,
    VariantProps<typeof ordersVariance> {}
