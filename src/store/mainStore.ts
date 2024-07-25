import { createUserSlice } from "@/store/userSlice";
import { TMainStore } from "@/types/store";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createCartSlice } from "./cartSlice";

export const useMainStore = create<TMainStore>()(
  immer((...a) => ({
    ...createUserSlice(...a),
    ...createCartSlice(...a),
  }))
);
