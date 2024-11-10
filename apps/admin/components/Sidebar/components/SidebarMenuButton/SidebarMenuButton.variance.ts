import { cva } from "class-variance-authority";

export const sidebarMenuButtonVariance = cva(
  ["p-4 cursor-pointer inline-block flex flex-col"],
  {
    variants: {
      variant: {
        primary: "hover:bg-slate-100 w-full",
      },
      radius: {
        none: "rounded-none",
        xs: "rounded-xs",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      radius: "md",
    },
  }
);
