import { cva } from "class-variance-authority";

export const sidebarProfileVariance = cva(["px-4 py-10 flex justify-between"], {
  variants: {
    variant: {
      primary: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
