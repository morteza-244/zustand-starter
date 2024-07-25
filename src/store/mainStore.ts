import { createUserSlice } from "@/store/userSlice";
import { TMainStore } from "@/types/store";
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createCartSlice } from "./cartSlice";

export const useMainStore = create<TMainStore>()(
  subscribeWithSelector(
    immer((...a) => ({
      ...createUserSlice(...a),
      ...createCartSlice(...a),
    }))

  )
);
