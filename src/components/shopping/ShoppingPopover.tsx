import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { formatPrice } from "@/lib/utils";
import { useMainStore } from "@/store/mainStore";
import { ShoppingCart } from "lucide-react";
import { useShallow } from "zustand/react/shallow";
import ShoppingCard from "./ShoppingCard";

const ShoppingPopover = () => {
  const { reset, products, totalPrice } = useMainStore(
    useShallow((s) => ({
      reset: s.reset,
      products: s.products,
      totalPrice: s.totalPrice,
    }))
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size={"icon"} variant={"secondary"}>
          <ShoppingCart size={20} />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="overflow-y-auto h-96 space-y-2 w-96"
      >
        <div className="flex gap-2 justify-between w-full text-lg items-center">
          <h2 className="font-medium">Cart: </h2>
          <Button onClick={reset} size={"sm"} variant={"secondary"}>
            Reset
          </Button>
        </div>
        <div className="space-y-2">
          {products.length === 0 && (
            <p className="text-center">There is no cart</p>
          )}
          {products.map((product) => (
            <ShoppingCard key={product.id} product={product} />
          ))}
        </div>
        <p>Total: {formatPrice(totalPrice)}</p>
      </PopoverContent>
    </Popover>
  );
};

export default ShoppingPopover;
