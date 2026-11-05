import { CircleCheck } from "lucide-react";
import { differentiators } from "@/content/differentiators";
import { sectionTitles } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

export function WhyUs() {
  return (
    <section className="section-y" aria-labelledby="confianza-title">
      <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <SectionHeading id="confianza-title" title={sectionTitles.why.title} />
        <ul className="grid gap-5">
          {differentiators.map((d) => (
            <li key={d} className="flex items-start gap-4 border-b border-border pb-5 text-lg text-foreground">
              <CircleCheck className="mt-1 size-5 shrink-0 text-success" aria-hidden="true" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
