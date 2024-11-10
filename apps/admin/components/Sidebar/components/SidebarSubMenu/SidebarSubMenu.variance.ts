import { cva } from "class-variance-authority";

export const sidebarSubMenuVariance = cva([""], {
  variants: {
    variant: {
      primary: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
