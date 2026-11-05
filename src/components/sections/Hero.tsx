import { MapPin } from "lucide-react";
import heroImg from "@/assets/hero-oficina.jpg";
import { hero } from "@/content/site";
import { generalMessage } from "@/content/whatsappMessages";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground" aria-labelledby="hero-title">
      {/* PLACEHOLDER: reemplace por una foto real de la oficina o del equipo */}
      <img src={heroImg} alt={hero.imageAlt} width={1600} height={1008} className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden="true" />
      <div className="container-site grid gap-10 py-20 md:py-28 lg:grid-cols-2 lg:py-36">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
            <MapPin className="size-3.5" aria-hidden="true" />
            {hero.badge}
          </span>
          <h1 id="hero-title" className="mt-6 text-4xl font-semibold sm:text-5xl lg:text-[3.4rem]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">{hero.subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton message={generalMessage} size="lg">{hero.primaryCta}</WhatsAppButton>
            <Button asChild variant="outline-light" size="lg">
              <a href="#servicios">{hero.secondaryCta}</a>
            </Button>
          </div>
          <p className="mt-5 text-sm text-primary-foreground/75">{hero.microcopy}</p>
        </div>
      </div>
    </section>
  );
}
