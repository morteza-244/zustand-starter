import QtyButtons from "@/components/shared/QtyButtons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import { useMainStore } from "@/store/mainStore";
import { TProduct } from "@/types/product";
import { Trash } from "lucide-react";

interface ShoppingCardProps {
  product: TProduct;
}
const ShoppingCard = ({ product }: ShoppingCardProps) => {
  const removeProduct = useMainStore((s) => s.removeProduct);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center gap-x-2">
          <p>{product.title}</p>
          <Button
            onClick={() => {
              removeProduct(product.id);
            }}
            variant={"destructive"}
            size={"icon"}
          >
            <Trash size={20} />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>{formatPrice(product.price)}</CardContent>
      <CardFooter>
        <QtyButtons productId={product.id} />
      </CardFooter>
    </Card>
  );
};

export default ShoppingCard;
