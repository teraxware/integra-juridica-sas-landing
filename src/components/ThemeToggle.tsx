import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { header } from "@/content/site";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    let preferred = false;
    try { preferred = localStorage.getItem("integra-theme") === "dark"; } catch { /* Storage may be unavailable. */ }
    document.documentElement.classList.toggle("dark", preferred);
    setDark(preferred);
    const syncTheme = () => setDark(document.documentElement.classList.contains("dark"));
    window.addEventListener("integra-theme-change", syncTheme);
    return () => window.removeEventListener("integra-theme-change", syncTheme);
  }, []);

  function toggleTheme() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    setDark(next);
    window.dispatchEvent(new Event("integra-theme-change"));
    try { localStorage.setItem("integra-theme", next ? "dark" : "light"); } catch { /* Theme still works without storage. */ }
  }

  return <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={dark ? header.themeLight : header.themeDark} title={dark ? header.themeLight : header.themeDark} className="shrink-0 rounded-full border border-border text-primary">
    {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
  </Button>;
}