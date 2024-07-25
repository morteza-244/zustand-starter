export type TProduct = {
  id: string;
  title: string;
  price: number;
};

export type TCartProduct = TProduct & { qty: number };
