import { GraduationCap } from "lucide-react";
import { team } from "@/content/team";
import { sectionTitles } from "@/content/site";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "./SectionHeading";

export function Team() {
  return (
    <section id="equipo" className="section-y bg-muted" aria-labelledby="equipo-title">
      <div className="container-site">
        <SectionHeading id="equipo-title" {...sectionTitles.team} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Card key={i} className="rounded-md p-7 text-center shadow-soft">
              {/* PLACEHOLDER: reemplace las iniciales por la foto del abogado */}
              <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-primary font-serif text-2xl text-gold" aria-hidden="true">
                {m.initials}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary">{m.name}</h3>
              <p className="mt-1 text-sm font-medium text-foreground">{m.role}</p>
              <p className="mt-2 inline-block rounded-sm border border-border px-2 py-0.5 text-xs font-semibold text-muted-foreground">{m.license}</p>
              <p className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <GraduationCap className="size-4 text-gold" aria-hidden="true" />
                {m.degree}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{m.specialty}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
