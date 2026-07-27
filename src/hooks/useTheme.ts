import { useContext } from "react";
import { Theme } from "../contexts/ThemeContext";

export const useTheme = () => {
  const theme = useContext(Theme);
  if (!theme) {
    throw new Error("Theme must be used in side of the ThemeContextprovider");
  }

  return theme;
};
