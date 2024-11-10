import { cva } from "class-variance-authority";

export const sidebarVariance = cva(
  ["hidden md:flex flex-col justify-between", "w-1/4 lg:w-1/5 h-screen"],
  {
    variants: {
      variant: {
        primary: "bg-white border-slate-300 border-r",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
