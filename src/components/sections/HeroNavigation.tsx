import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/content/navigation";
import { header } from "@/content/site";
import { Logo } from "@/components/sections/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

export function HeroNavigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("scroll", close, { passive: true });
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", close);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="hero-navigation relative z-20 flex w-full shrink-0 flex-col items-center gap-4">
      <Logo cover />
      <div className="relative flex min-h-12 w-full max-w-4xl items-center justify-between border-y border-primary/20 py-2">
        <Button variant="ghost" size="icon" className="text-primary md:invisible" aria-label={open ? header.menuClose : header.menuOpen} aria-expanded={open} aria-controls="menu-portada" onClick={() => setOpen((value) => !value)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
        <nav aria-label={header.coverNav} className="hidden md:block">
          <ul className="flex items-center gap-6 text-xs font-semibold text-primary lg:gap-8">
            {navigation.map((item) => <li key={item.href}><a href={item.href} className="transition-colors hover:text-gold">{item.label}</a></li>)}
          </ul>
        </nav>
        <ThemeToggle />
        {open && <nav id="menu-portada" aria-label={header.mobileNav} className="absolute inset-x-0 top-full mt-2 border border-border bg-background p-4 text-left shadow-soft md:hidden">
          <ul>{navigation.map((item) => <li key={item.href}><a href={item.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-semibold text-primary">{item.label}</a></li>)}</ul>
        </nav>}
      </div>
    </div>
  );
}