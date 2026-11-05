import { Link } from "@tanstack/react-router";
import { navigation } from "@/content/navigation";
import { services } from "@/content/services";
import { footer, site } from "@/content/site";
import { legal } from "@/content/legal";
import { Logo } from "./Logo";

function LegalBlock() {
  return (
    <div className="border-t border-primary-foreground/15 pt-8 text-xs leading-relaxed text-primary-foreground/65">
      <p>{legal.companyName} · {legal.nit} · {legal.license}</p>
      <p>{legal.address} · {legal.hours}</p>
      <p>{legal.contactLine}</p>
      <p className="mt-3 max-w-3xl">{legal.disclaimer}</p>
      <p className="mt-3 flex flex-wrap gap-x-3">
        <Link to="/aviso-de-privacidad" className="underline underline-offset-2 hover:text-gold">{legal.privacyLabel}</Link>
        <span aria-hidden="true">|</span>
        <Link to="/politica-cookies" className="underline underline-offset-2 hover:text-gold">{legal.cookiesLabel}</Link>
      </p>
      <p className="mt-3">{legal.copyright}</p>
    </div>
  );
}

export function Footer({ compact = false }: { compact?: boolean }) {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-site py-12">
        {!compact && (
          <div className="mb-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Logo inverted />
              <p className="mt-4 text-sm text-primary-foreground/75">{site.footerDescription}</p>
            </div>
            <nav aria-label="Pie de página">
              <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-gold">{footer.navTitle}</h2>
              <ul className="mt-4 grid gap-2 text-sm">
                {navigation.map((n) => <li key={n.href}><a href={n.href} className="hover:text-gold">{n.label}</a></li>)}
              </ul>
            </nav>
            <div>
              <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-gold">{footer.servicesTitle}</h2>
              <ul className="mt-4 grid gap-2 text-sm text-primary-foreground/85">
                {services.map((s) => <li key={s.key}>{s.title}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-gold">{footer.contactTitle}</h2>
              <ul className="mt-4 grid gap-2 text-sm text-primary-foreground/85">
                <li>{site.phoneDisplay}</li>
                <li className="break-words">{site.email}</li>
                <li>{site.address}</li>
                {site.socials.map((s) => (
                  <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold">{s.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <LegalBlock />
      </div>
    </footer>
  );
}
