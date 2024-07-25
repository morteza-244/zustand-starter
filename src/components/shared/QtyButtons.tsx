import { useMainStore } from "@/store/mainStore";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { Button } from "../ui/button";

interface QtyButtonsProps {
  productId: string;
}

const QtyButtons = ({ productId }: QtyButtonsProps) => {
  const { decQty, getProductById, incQty, setTotal } = useMainStore(
    useShallow((s) => ({
      decQty: s.decQty,
      incQty: s.incQty,
      getProductById: s.getProductById,
      setTotal: s.setTotal,
    }))
  );
  const product = getProductById(productId);
  
  useEffect(() => {
    const unSub = useMainStore.subscribe(
      (s) => s.products,
      (products) => {
        setTotal(
          products.reduce((acc, item) => acc + item.price * item.qty, 0)
        );
      },
      { fireImmediately: true }
    );
    return unSub;
  }, [setTotal]);

  return (
    <>
      {product && (
        <div className="flex items-center gap-x-2">
          <Button size={"sm"} onClick={() => decQty(productId)}>
            <MinusIcon size={17} />
          </Button>
          <p className="text-slate-700 font-medium">{product.qty}</p>
          <Button size={"sm"} onClick={() => incQty(productId)}>
            <PlusIcon size={17} />
          </Button>
        </div>
      )}
    </>
  );
};

export default QtyButtons;
