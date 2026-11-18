export function SectionHeading({ id, title, subtitle }: { id: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10 max-w-2xl border-l-2 border-gold pl-5">
      <h2 id={id} className="font-sans text-3xl font-semibold text-primary sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
