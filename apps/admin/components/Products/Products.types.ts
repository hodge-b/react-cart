import { VariantProps } from "class-variance-authority";
import { HTMLProps } from "react";
import { productsVariance } from "./Products.variance";

export interface ProductsProps
  extends HTMLProps<HTMLDivElement>,
    VariantProps<typeof productsVariance> {}
