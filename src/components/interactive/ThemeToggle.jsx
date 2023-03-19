import { useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const ThemeToggle = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const setDocumentTheme = () => {
    document.documentElement.setAttribute("data-theme", theme);
  };

  useEffect(setDocumentTheme, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setDocumentTheme();
  };

  return (
    <a href="#" className="simple-button " onClick={toggleTheme}>
      {theme === "light" ? "🌙" : "☀️"}
    </a>
  );
};
