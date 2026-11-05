import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navigation } from "@/content/navigation";
import { header, site } from "@/content/site";
import { generalMessage } from "@/content/whatsappMessages";
import { buildPhoneLink } from "@/lib/whatsapp";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Logo } from "@/components/sections/Logo";

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
      <div className="container-site flex h-18 items-center justify-between gap-4 py-3">
        <Logo />
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-5 whitespace-nowrap text-sm font-medium text-muted-foreground">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="rounded-sm transition-colors hover:text-primary">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <a href={buildPhoneLink()} className="hidden items-center gap-2 whitespace-nowrap text-sm font-medium text-primary xl:flex">
            <Phone className="size-4 text-gold" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          <WhatsAppButton message={generalMessage}>{header.whatsappCta}</WhatsAppButton>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md text-primary lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? header.menuClose : header.menuOpen}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <div
        id="menu-movil"
        hidden={!open}
        className="border-t border-border bg-background lg:hidden animate-in slide-in-from-top-2 fade-in"
      >
        <nav aria-label="Menú móvil" className="container-site py-4">
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
