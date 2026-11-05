import { steps } from "@/content/steps";
import { sectionTitles } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

export function Steps() {
  return (
    <section id="como-trabajamos" className="section-y bg-muted" aria-labelledby="pasos-title">
      <div className="container-site">
        <SectionHeading id="pasos-title" title={sectionTitles.steps.title} />
        <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="flex size-12 items-center justify-center rounded-full border-2 border-gold bg-background font-serif text-lg font-semibold text-primary">
                {i + 1}
              </span>
              <h3 className="mt-5 font-sans text-lg font-bold tracking-normal text-primary">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.description}</p>
            </li>
          ))}
        </ol>
        <p className="mt-12 text-sm text-muted-foreground">{sectionTitles.steps.note}</p>
      </div>
    </section>
  );
}
