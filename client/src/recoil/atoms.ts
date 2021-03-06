import { atom } from "recoil";
import { sectors } from "../utils/constants";
import { Salary, User } from "../utils/types";

export const loggedUserState = atom<User>({
  key: "loggedUserState",
  default: JSON.parse(window.localStorage.getItem("user")),
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

export const notificationState = atom({
  key: "notificationState",
  default: { message: "", className: "" },
});

export const displayState = atom<string>({
  key: "displayState",
  default: "none",
});

export const sectorsState = atom<Object[]>({
  key: "sectorsState",
  default: sectors,
});
