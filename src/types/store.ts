import { TCartSlice } from "@/store/cartSlice";
import { TUserSlice } from "@/store/userSlice";

export type TMainStore = TUserSlice & TCartSlice;
