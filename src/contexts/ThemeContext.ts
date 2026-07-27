import { createContext } from "react";

interface Theme {
  dark: boolean;
  changeTheme: () => void;
}

export const Theme = createContext<Theme | null>(null);
