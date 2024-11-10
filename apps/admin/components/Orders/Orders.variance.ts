import { cva } from "class-variance-authority";

export const ordersVariance = cva([""], {
  variants: {
    variant: {
      primary: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
