import { cva } from "class-variance-authority";

export const sidebarMenuHeaderVariance = cva(["p-4 w-full"], {
  variants: {
    variant: {
      primary: "border-b border-slate-200",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
