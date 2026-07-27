import { Theme } from "./ThemeContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface ThemeProviderprops {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderprops> = ({ children }) => {
  const [dark, setIsDark] = useLocalStorage("dark", true);

  const changeTheme = () => {
    setIsDark(!dark);
  };

  return (
    <Theme.Provider value={{ dark, changeTheme }}>{children}</Theme.Provider>
  );
};

export default ThemeProvider;
