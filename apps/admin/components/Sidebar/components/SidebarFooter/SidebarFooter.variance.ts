import { cva } from "class-variance-authority";

export const sidebarFooterVariance = cva(["border-t border-slate-100"], {
  variants: {
    variant: {
      primary: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
