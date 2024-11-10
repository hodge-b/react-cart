import { VariantProps } from "class-variance-authority";
import { HTMLProps } from "react";
import { customersVariance } from "./Customers.variance";

export interface CustomersProps
  extends HTMLProps<HTMLDivElement>,
    VariantProps<typeof customersVariance> {}
