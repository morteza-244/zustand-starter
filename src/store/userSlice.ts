import { StateCreator } from "zustand";

type TUser = {
  fullName: string;
  username: string;
  email: string;
  address: string;
  age: number;
};

type TUserActions = {
  setAddress: (address: string) => void;
};

export type TUserSlice = TUser & TUserActions;

export const createUserSlice: StateCreator<
  TUserSlice,
  [["zustand/immer", never]],
  [],
  TUserSlice
> = (set) => ({
  address: "",
  age: 20,
  email: "morteza@gmail.com",
  fullName: "Morteza Sadeghi",
  username: "morteza@26",
  setAddress: (address) =>
    set((state) => {
      state.address = address;
    }),
});
