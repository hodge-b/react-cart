import { cn } from "@repo/shared-utils";
import { productsVariance } from "./Products.variance";
import type { ProductsProps } from "./Products.types";

const Products = ({}: ProductsProps) => {
  return (
    <main className={cn(productsVariance())}>
      <h2>Products Overview Page Component</h2>
    </main>
  );
};

export default Products;
