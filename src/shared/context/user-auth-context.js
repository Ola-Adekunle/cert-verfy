import { createContext } from "react";

export const UserAuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});
