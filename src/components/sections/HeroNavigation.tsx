import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
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
    <div className="hero-navigation relative z-20 flex w-full shrink-0 items-center justify-between gap-6">
      <Logo cover />
      <div className="flex items-center gap-6">
        <nav aria-label={header.coverNav} className="hidden lg:block">
          <ul className="flex items-center gap-6 text-xs font-semibold text-primary xl:gap-8">
            {navigation.map((item) => <li key={item.href}><a href={item.href} className="relative block py-3 transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:text-gold hover:after:scale-x-100">{item.label}</a></li>)}
          </ul>
        </nav>
        <div className="flex items-center gap-2 [&_button]:border-0">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="text-primary lg:hidden" aria-label={open ? header.menuClose : header.menuOpen} aria-expanded={open} aria-controls="menu-portada" onClick={() => setOpen((value) => !value)}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </div>
      {open && <nav id="menu-portada" aria-label={header.mobileNav} className="absolute inset-x-0 top-full mt-4 border-t border-gold bg-background px-6 py-3 text-left shadow-soft lg:hidden">
        <ul className="divide-y divide-border">{navigation.map((item) => <li key={item.href}><a href={item.href} onClick={() => setOpen(false)} className="flex items-center justify-between gap-4 py-4 font-serif text-xl text-primary transition-colors hover:text-gold">{item.label}<ArrowUpRight className="size-4 text-gold" aria-hidden="true" /></a></li>)}</ul>
      </nav>}
    </div>
  );
}