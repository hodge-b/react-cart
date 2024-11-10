import { cva } from "class-variance-authority";

export const dashboardVariance = cva([""], {
  variants: {
    variant: {
      primary: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
