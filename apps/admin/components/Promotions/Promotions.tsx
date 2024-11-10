import { cn } from "@repo/shared-utils";
import { promotionsVariance } from "./Promotions.variance";
import type { PromotionsProps } from "./Promotions.types";

const Promotions = ({}: PromotionsProps) => {
  return (
    <main className={cn(promotionsVariance())}>
      <h2>Promotions Overview Page Component</h2>
    </main>
  );
};

export default Promotions;
