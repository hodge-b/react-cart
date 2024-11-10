import { cva } from "class-variance-authority";

export const analyticsVariance = cva([""], {
  variants: {
    variant: {
      primary: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
