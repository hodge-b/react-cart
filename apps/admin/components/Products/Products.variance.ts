import { cva } from "class-variance-authority";

export const productsVariance = cva([""], {
  variants: {
    variant: {
      primary: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
