import { cn } from "@repo/shared-utils";
import { ordersVariance } from "./Orders.variance";
import type { OrdersProps } from "./Orders.types";

const Orders = ({}: OrdersProps) => {
  return (
    <main className={cn(ordersVariance())}>
      <h2>Orders Overview Page Component</h2>
    </main>
  );
};

export default Orders;
