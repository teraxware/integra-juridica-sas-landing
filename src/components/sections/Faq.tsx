import { faqs } from "@/content/faqs";
import { sectionTitles } from "@/content/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  return (
    <section id="preguntas" className="section-y bg-muted" aria-labelledby="faq-title">
      <div className="container-site max-w-3xl">
        <SectionHeading id="faq-title" title={sectionTitles.faq.title} />
        <Accordion type="single" collapsible className="rounded-md border border-border bg-background px-6">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="last:border-b-0">
              <AccordionTrigger className="min-h-11 text-base font-semibold text-primary hover:no-underline">
                <h3 className="font-sans text-base font-semibold tracking-normal">{f.q}</h3>
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
