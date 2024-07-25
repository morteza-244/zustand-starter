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
import { useShallow } from "zustand/react/shallow";

interface ProductCardProps {
  product: TProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addProduct, cartProducts } = useMainStore(
    useShallow((s) => ({
      cartProducts: s.products,
      addProduct: s.addProduct,
    }))
  );
  return (
    <Card className="hover:scale-105 cursor-pointer transition">
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-700 font-medium">
          {formatPrice(product.price)}
        </p>
      </CardContent>
      <CardFooter>
        {cartProducts.find((item) => item.id === product.id) ? (
          <QtyButtons productId={product.id} />
        ) : (
          <Button type="button" onClick={() => addProduct(product)}>
            Add to Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
