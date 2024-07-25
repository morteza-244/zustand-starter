import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import { TProduct } from "@/types/product";

interface ProductCardProps {
  product: TProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
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
        <Button type="button">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
