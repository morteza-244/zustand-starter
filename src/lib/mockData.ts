import { TProduct } from "@/types/product";
import { v4 as uuid } from "uuid";

export const PRODUCTS_LIST: TProduct[] = [
  { id: uuid(), price: 2500, title: "Product 1" },
  { id: uuid(), price: 7589, title: "Product 2" },
  { id: uuid(), price: 10000, title: "Product 3" },
  { id: uuid(), price: 35690, title: "Product 4" },
  { id: uuid(), price: 150, title: "Product 5" },
  { id: uuid(), price: 200, title: "Product 6" },
  { id: uuid(), price: 863, title: "Product 7" },
  { id: uuid(), price: 20, title: "Product 8" },
];
