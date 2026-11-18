import { ArrowRight, Briefcase, Building2, Receipt, ScrollText } from "lucide-react";
import { services } from "@/content/services";
import { sectionTitles } from "@/content/site";
import { messagesByArea } from "@/content/whatsappMessages";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Card } from "@/components/ui/card";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import { SectionHeading } from "./SectionHeading";

const icons = { building: Building2, briefcase: Briefcase, receipt: Receipt, scroll: ScrollText };

export function Services() {
  return (
    <section id="servicios" className="section-y" aria-labelledby="servicios-title">
      <div className="container-site">
        <SectionHeading id="servicios-title" {...sectionTitles.services} />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, index) => {
            const Icon = icons[s.icon];
            return (
              <Card key={s.key} className="group flex flex-col gap-4 rounded-sm border-border bg-card p-7 shadow-none transition-colors hover:border-gold">
                <div className="mb-4 flex items-center justify-between">
                  <Icon className="size-8 text-primary" strokeWidth={1.25} aria-hidden="true" />
                  <span className="font-sans text-sm text-earth" aria-hidden="true">0{index + 1}</span>
                </div>
                <h3 className="font-sans text-xl font-semibold text-primary">{s.title}</h3>
                <p className="text-muted-foreground">{s.description}</p>
                <a
                  href={buildWhatsAppLink(messagesByArea[s.key])}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir WhatsApp: consultar sobre ${s.title}`}
                  className="group mt-auto inline-flex min-h-11 items-center gap-2 self-start font-semibold text-primary"
                >
                  <WhatsAppIcon className="text-success" />
                  {s.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
