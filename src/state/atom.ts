import { atom } from "recoil";
import IUser from "../Interfaces/IUser";
import IRepositorio from "../Interfaces/IRepositorio";

export const userState = atom<IUser | null>({
  key: "userState",
  default: null,
});

export const repositoriosState = atom<IRepositorio[]>({
  key: "repositoriosState",
  default: [],
});

export const erroBuscaState = atom<boolean>({
  key: "erroBusca",
  default: false,
});
