import { cva } from "class-variance-authority";

export const sidebarContentVariance = cva(
  ["flex flex-col", "h-full", "overflow-auto"],
  {
    variants: {
      variant: {
        primary: "",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
