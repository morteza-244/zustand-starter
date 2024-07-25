import { createUserSlice } from "@/store/userSlice";
import { TMainStore } from "@/types/store";
import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createCartSlice } from "./cartSlice";

export const useMainStore = create<TMainStore>()(
  devtools(
    persist(
      subscribeWithSelector(
        immer((...a) => ({
          ...createUserSlice(...a),
          ...createCartSlice(...a),
        }))
      ),
      { name: "product-storage" }
    )
  )
);
