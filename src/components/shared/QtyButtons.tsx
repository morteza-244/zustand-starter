import { useMainStore } from "@/store/mainStore";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useShallow } from "zustand/react/shallow";
import { Button } from "../ui/button";

interface QtyButtonsProps {
  productId: string;
}

const QtyButtons = ({ productId }: QtyButtonsProps) => {
  const { decQty, getProductById, incQty } = useMainStore(
    useShallow((s) => ({
      decQty: s.decQty,
      incQty: s.incQty,
      getProductById: s.getProductById,
    }))
  );
  const product = getProductById(productId);
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
