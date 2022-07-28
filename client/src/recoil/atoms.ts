import { atom } from "recoil";
import { Salary, User } from "../types";

export const loggedUserState = atom<User>({
  key: "loggedUserState",
  default: null,
});

export const salariesState = atom<Salary[]>({
  key: "salariesState",
  default: [],
});

export const filterState = atom<string>({ key: "filterState", default: "" });

export const searchParamState = atom<string>({
  key: "searchParamState",
  default: "",
});
