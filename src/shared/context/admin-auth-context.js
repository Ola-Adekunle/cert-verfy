import { createContext } from "react";

export const AdminAuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});
