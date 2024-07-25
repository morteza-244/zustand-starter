import { TCartProduct, TProduct } from "@/types/product";
import { StateCreator } from "zustand";

type TCart = {
  products: TCartProduct[];
  totalPrice: number;
};

type TCartActions = {
  addProduct: (product: TProduct) => void;
  removeProduct: (productId: string) => void;
  incQty: (productId: string) => void;
  decQty: (productId: string) => void;
  getProductById: (productId: string) => TCartProduct | undefined;
  setTotal: (total: number) => void;
  reset: () => void;
};

export type TCartSlice = TCart & TCartActions;

const initialState: TCart = {
  products: [],
  totalPrice: 0,
};

export const createCartSlice: StateCreator<
  TCartSlice,
  [["zustand/immer", never]],
  [],
  TCartSlice
> = (set, get) => ({
  ...initialState,
  addProduct: (product) =>
    set((state) => {
      state.products.push({ ...product, qty: 1 });
    }),
  incQty: (productId) =>
    set((state) => {
      const existingProduct = state.products.find(
        (product) => product.id === productId
      );
      if (existingProduct) {
        existingProduct.qty += 1;
      }
    }),
  decQty: (productId) =>
    set((state) => {
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === productId
      );
      if (existingProductIndex !== -1) {
        if (state.products[existingProductIndex].qty === 1) {
          state.products.splice(existingProductIndex, 1);
        } else {
          state.products[existingProductIndex].qty -= 1;
        }
      }
    }),
  getProductById: (productId) =>
    get().products.find((product) => product.id === productId),
  reset: () => set(() => initialState),
  setTotal: (total) =>
    set((state) => {
      state.totalPrice = total;
    }),
  removeProduct: (productId) =>
    set((state) => {
      state.products.filter((product) => product.id !== productId);
    }),
});
