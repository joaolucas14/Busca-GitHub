import { atom } from "recoil";
import IUser from "../Interfaces/IUser";

export const userState = atom<IUser | null>({
  key: "userState",
  default: null,
});
