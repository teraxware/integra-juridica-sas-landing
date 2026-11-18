import { ArrowDownRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-arquitectura.jpg";
import { hero } from "@/content/site";
import { generalMessage } from "@/content/whatsappMessages";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="hero-stage relative isolate overflow-hidden bg-background text-primary" aria-labelledby="hero-title">
      {/* Imagen ilustrativa; sustituir por una fotografía real cuando esté disponible. */}
      <img src={heroImg} alt={hero.imageAlt} width={1920} height={1024} className="absolute inset-0 -z-20 h-full w-full object-cover object-right" />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden="true" />
      <div className="container-site relative py-12 md:py-16 lg:py-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground">
            <MapPin className="size-3.5" aria-hidden="true" />
            {hero.badge}
          </span>
          <h1 id="hero-title" className="hero-name mt-6 font-sans text-5xl font-semibold sm:text-7xl lg:text-8xl">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-lg font-serif text-2xl text-primary sm:text-3xl">{hero.statement}</p>
          <p className="mt-5 max-w-lg text-base text-muted-foreground">{hero.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton message={generalMessage} variant="primary" size="lg">{hero.primaryCta}</WhatsAppButton>
            <Button asChild variant="link" size="lg" className="justify-start px-0 sm:px-4">
              <a href="#servicios">{hero.secondaryCta}<ArrowDownRight aria-hidden="true" /></a>
            </Button>
          </div>
          <p className="mt-5 max-w-lg text-xs text-muted-foreground">{hero.microcopy}</p>
        </div>
      </div>
    </section>
  );
}
