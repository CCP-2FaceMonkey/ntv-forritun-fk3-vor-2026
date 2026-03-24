<<<<<<< HEAD
import { createContext, useContext, useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

type Theme = "light" | "dark";
=======
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '~/root';

type Theme = {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
};
>>>>>>> upstream/main

function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function ThemeToggle() {
<<<<<<< HEAD
  const [theme, setThemeState] = useState<Theme>("light");
=======
  const { theme, setTheme } = useContext<Theme | null>(ThemeContext) as Theme;
  console.log(theme, setTheme);
>>>>>>> upstream/main
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setThemeState(getInitialTheme());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyTheme(theme);
  }, [theme, mounted]);

  const toggle = () => {
    setThemeState((t) => (t === "light" ? "dark" : "light"));
  };

  if (!mounted) {
    return (
      <div className="theme-toggle" aria-hidden>
        Toggle theme
      </div>
    );
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
