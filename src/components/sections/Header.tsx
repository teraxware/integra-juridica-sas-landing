import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navigation } from "@/content/navigation";
import { header, site } from "@/content/site";
import { generalMessage } from "@/content/whatsappMessages";
import { buildPhoneLink } from "@/lib/whatsapp";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Logo } from "@/components/sections/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-site flex h-20 items-center justify-between gap-3 py-3">
        <Logo />
        <nav aria-label={header.mainNav} className="hidden xl:block">
          <ul className="flex items-center gap-5 whitespace-nowrap text-xs font-semibold text-muted-foreground">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="rounded-sm transition-colors hover:text-primary">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <WhatsAppButton message={generalMessage} variant="primary" className="hidden md:inline-flex">{header.whatsappCta}</WhatsAppButton>
        <Button
          variant="ghost"
          size="icon"
          type="button"
          className="text-primary xl:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? header.menuClose : header.menuOpen}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
        </div>
      </div>
      <div
        id="menu-movil"
        hidden={!open}
        className="border-t border-border bg-background xl:hidden animate-in slide-in-from-top-2 fade-in"
      >
        <nav aria-label={header.mobileNav} className="container-site py-4">
          <ul className="flex flex-col">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)} className="block py-3 font-medium text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <WhatsAppButton message={generalMessage} className="w-full">{header.whatsappCta}</WhatsAppButton>
            <a href={buildPhoneLink()} className="flex min-h-11 items-center justify-center gap-2 text-sm font-medium text-primary">
              <Phone className="size-4 text-gold" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
