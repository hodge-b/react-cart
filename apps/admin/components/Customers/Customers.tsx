import { cn } from "@repo/shared-utils";
import type { CustomersProps } from "./Customers.types";
import { customersVariance } from "./Customers.variance";

const Customers = ({}: CustomersProps) => {
  return (
    <main className={cn(customersVariance())}>
      <h2>Customers Overview Page Component</h2>
    </main>
  );
};

export default Customers;
