import { Quote } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { sectionTitles } from "@/content/site";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "./SectionHeading";

// IMPORTANTE: publicar solo testimonios con autorización escrita de la persona.
// Sin autorización expresa, anonimizar nombre y empresa.
export function Testimonials() {
  return (
    <section className="section-y" aria-labelledby="testimonios-title">
      <div className="container-site">
        <SectionHeading id="testimonios-title" title={sectionTitles.testimonials.title} />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} className="rounded-md p-7 shadow-soft">
              <figure>
                <Quote className="size-6 text-gold" aria-hidden="true" />
                <blockquote className="mt-4 font-serif text-lg text-foreground">“{t.quote}”</blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="block font-semibold text-primary">{t.name}</span>
                  <span className="text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
