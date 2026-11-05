import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { footer } from "@/content/site";
import type { LegalSection } from "@/content/legalPages";

export function LegalPage({ title, sections }: { title: string; sections: LegalSection[] }) {
  return (
    <>
      <Header />
      <main className="section-y">
        <article className="container-site max-w-3xl">
          <Link to="/" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary">
            <ArrowLeft className="size-4" aria-hidden="true" />
            {footer.backHome}
          </Link>
          <h1 className="mt-6 text-4xl font-semibold text-primary">{title}</h1>
          {sections.map((s) => (
            <section key={s.heading} className="mt-10">
              <h2 className="text-2xl font-semibold text-primary">{s.heading}</h2>
              <div className="mt-3 space-y-3 text-muted-foreground">
                {s.paragraphs?.map((p) => <p key={p}>{p}</p>)}
                {s.list && (
                  <ul className="list-disc space-y-1 pl-5">
                    {s.list.map((li) => <li key={li}>{li}</li>)}
                  </ul>
                )}
                {s.link && (
                  <a href={s.link.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline underline-offset-2">
                    {s.link.label}
                  </a>
                )}
              </div>
            </section>
          ))}
          <Link to="/" className="mt-12 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary">
            <ArrowLeft className="size-4" aria-hidden="true" />
            {footer.backHome}
          </Link>
        </article>
      </main>
      <Footer compact />
    </>
  );
}
