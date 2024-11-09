import { cva } from "class-variance-authority";

export const sidebarVariance = cva(
  [
    "hidden md:flex flex-col",
    "w-1/4 lg:w-1/5 h-screen",
    "bg-slate-100 border-slate-300 border-r",
  ],
  {
    variants: {
      variant: {
        primary: "",
      },
    },
  }
);
