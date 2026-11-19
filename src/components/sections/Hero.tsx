import { ArrowDownRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-arquitectura.jpg";
import { hero } from "@/content/site";
import { generalMessage } from "@/content/whatsappMessages";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { TrustBar } from "@/components/sections/TrustBar";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Hero() {
  return (
    <section className="hero-stage relative isolate overflow-hidden bg-background text-primary" aria-labelledby="hero-title">
      {/* Imagen ilustrativa; sustituir por una fotografía real cuando esté disponible. */}
      <img src={heroImg} alt={hero.imageAlt} width={1920} height={1024} className="absolute inset-0 -z-20 h-full w-full object-cover object-right" />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" aria-hidden="true" />
      <div className="absolute right-6 top-6 z-10"><ThemeToggle /></div>
      <div className="hero-layout container-site relative flex flex-col items-center justify-between text-center">
        <div className="hero-copy mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground">
            <MapPin className="size-3.5" aria-hidden="true" />
            {hero.badge}
          </span>
          <h1 id="hero-title" className="hero-name mt-6 font-serif text-5xl font-medium sm:text-7xl lg:text-8xl">
            {hero.title}
          </h1>
          <p className="hero-statement mt-5 max-w-xl font-serif text-2xl text-primary sm:text-3xl">{hero.statement}</p>
          <p className="hero-description mt-5 max-w-xl text-base text-muted-foreground">{hero.subtitle}</p>
          <div className="hero-actions mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <WhatsAppButton message={generalMessage} variant="primary" size="lg">{hero.primaryCta}</WhatsAppButton>
            <Button asChild variant="link" size="lg" className="px-0 sm:px-4">
              <a href="#servicios">{hero.secondaryCta}<ArrowDownRight aria-hidden="true" /></a>
            </Button>
          </div>
          <p className="hero-note mt-5 max-w-lg text-xs text-muted-foreground">{hero.microcopy}</p>
        </div>
        <TrustBar />
      </div>
    </section>
  );
}
